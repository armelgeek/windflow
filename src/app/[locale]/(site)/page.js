import {Preview} from '@/components/core/general/Preview';
import fs from 'fs';
import path from 'path';

export const getFilesRecursively = (directory) => {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = entries.map(entry => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? getFilesRecursively(fullPath) : fullPath;
  });
  return Array.prototype.concat(...files);
};
export async function generateStaticPaths() {
  const staticPath = path.join(process.cwd(), '.next/static');
  console.log('relativePaths',staticPath);
  const chunkFiles = getFilesRecursively(path.join(staticPath, 'chunks'));

  const cssFiles = getFilesRecursively(path.join(staticPath, 'css'));
 // console.log('chunkFiles',cssFiles);
  const allFiles = [...chunkFiles, ...cssFiles];
  const relativePaths = allFiles.map(file => file.replace(process.cwd(), '').replace('.next', '_next'));

  return relativePaths.filter(file => file.endsWith('.css'));
}

export default async function Page() {
 const cssFilesOnly = await generateStaticPaths();
  const cssLinks = cssFilesOnly.map(file => `<link rel="stylesheet" href="${file}" /> \n`).join('');

  return (
    <>
      <Preview cssLinks={cssLinks} />
    </>
  );
}

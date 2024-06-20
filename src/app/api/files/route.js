import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
const getFilesRecursively = (directory) => {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = entries.map(entry => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? getFilesRecursively(fullPath) : fullPath;
  });
  return Array.prototype.concat(...files);
};
export const GET = async (req) => {
    const staticPath = path.join(process.cwd(), '.next/static');
    const chunkFiles = getFilesRecursively(path.join(staticPath, 'chunks'));
    const cssFiles = getFilesRecursively(path.join(staticPath, 'css'));
    const allFiles = [...chunkFiles, ...cssFiles];
    const relativePaths = allFiles.map(file => file.replace(process.cwd(), '').replace('.next', '_next'));
    const cssFilesOnly = relativePaths.filter(file => file.endsWith('.css'));
    const jsFilesOnly = relativePaths.filter(file => file.endsWith('.js'));
    const cssLinks = cssFilesOnly.map(file => `<link rel="stylesheet" href="${file}">`).join('\n');
    const jsScripts = jsFilesOnly.map(file => `<script src="${file}"></script>`).join('\n');
  
    const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      ${cssLinks}
    </head>
    <body>
      <div class="mount"></div>
     
    </body>
  </html>
    `;
    return new NextResponse(htmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
    

}

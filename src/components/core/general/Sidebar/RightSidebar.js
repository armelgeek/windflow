import React from 'react';
import PseudoClass from "@/components/core/blocks/components/pseudoClass";
import BlockTailwind from "@/components/core/blocks/tailwind/BlockTailwind";
const RightSidebar = () => {

    return (
        <div className="fixed top-[80px] right-0 w-[270px] p-0 pb-2">
            <div
                className="relative inline-block overflow-x-hidden overflow-y-hidden w-[270px] h-[calc(100vh-40px-29px)] bg-white dark:bg-dark-700">
                <PseudoClass/>
                <div
                    className=" py-1 border-b border-gray-200 dark:border-gray-700 px-3  flex flex-row justify-between items-center capitalize cursor-pointer  text-gray-700 text-base"></div>
                <BlockTailwind />
                {/**     <div className="h-full overflow-x-hidden overflow-y-auto pb-5">
                 <details className="relative">
                 <summary
                 className="px-2 bg-gray-300 pt-[9px] pb-1 mb-1 text-[12px] font-semibold text-gray-600 dark:text-white cursor-pointer  dark:bg-dark-700 border-t"
                 title="Animation">
                 <span className="inline-flex flex-row gap-x-2 items-center">Animation<div
                 className="start gap-x-0.5"/></span>
                 </summary>
                 <div className="mt-1 flex flex-row justify-between px-2  flex-wrap gap-x-2">
                 <div className="text-sm">Animation</div>
                 <div>
                 <button>+</button>
                 </div>
                 </div>
                 <div className="border-t last:border-b dark:border-dark-600">
                 <div
                 className="text-muted flex flex-row justify-between group  pl-6 pr-3 bg-gray-300 dark:bg-dark-300 text-black dark:text-white"
                 draggable="true">
                 <span className="flex items-center py-1 text-sm"><span> Heading</span></span>
                 <button title="help"
                 className="btn btn-ghost btn-sm btn-light !h-[20px] hidden p-0.5  bg-transparent border-0 font-normal group-hover:block dark:!text-dark-50 dark:bg-dark-600 dark:bg-transparent dark:hover:!text-white dark:hover:bg-dark-500">
                 <span className="flex h-full w-full flex-row items-center">
                 <span
                 className="flex flex-col justify-center h-full w-full gap-x-1.5 [text-wrap:nowrap]">
                 <span className="flex flex-col justify-center h-full">
                 (?)
                 </span>
                 </span>
                 </span>
                 </button>
                 </div>
                 </div>
                 </details>
                 </div>**/}
            </div>
        </div>
    )
}
export default RightSidebar;

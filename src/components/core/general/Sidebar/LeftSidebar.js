import React from 'react';
import ElementList from "@/components/core/general/Element/ElementList";
const Tree = ()=>{
    return (
        <div className="relative" aria-haspopup="dialog" aria-expanded="false"
             aria-controls="layers-active-item-dropdown" id="layers-active-item-target">
            <div className="text-black bg-green-300 text-[12px] dark:text-white dark:bg-dark-400">
                <div className="flex py-2 cursor-pointer pl-1">
                    <div className="flex justify-center ">
                                  <span
                                      className="center text-gray-500 hover:text-gray-700 w-[16px] h-[16px] bg-green-900 mr-0.5"></span>
                        <div className="inline-block px-0.5 text-xs font-medium">
                                    <span className="flex justify-center  gap-x-2">
                                        <span className="dark:text-white">
                                            <span className="center h-full"></span>
                                        </span>
                                        <span>Body</span>
                                    </span>
                        </div>
                    </div>
                    <div className="pr-2"></div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute top-[0px] w-full h-[16px]"></div>
                <div className="text-[12px]">
                    <div className="flex flex-row py-2 bg-gray-200 cursor-pointer pl-[16px]">
                        <div className="flex justify-center ">
                                    <span
                                        className="center text-gray-500 hover:text-gray-700 w-[16px] h-[16px] bg-green-900 mr-0.5"></span>
                            <div className="inline-block px-0.5 text-xs font-medium">
                                        <span
                                            className="flex flex-row justify-start items-center gap-x-2">
                                            <span className="dark:text-white">
                                                <span
                                                    className="flex justify-center w-full">
                                                    <span className="flex justify-center w-4 h-4">
                                                        <span className="relative inline-block w-[14px] h-[14px]">
                                                          <span
                                                              className="absolute top-0 left-0 w-full h-full border border-current rounded-sm"></span>
                                                          <span
                                                              className="absolute top-0 left-[3px] h-full border-r border-current"></span>
                                                          <span
                                                              className="absolute top-0 left-[10px] h-full border-r border-current"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span>Container</span>
                                        </span>
                            </div>

                        </div>
                        <div className="pr-2"></div>
                    </div>
                </div>
            </div>
            <div className="relative" aria-haspopup="dialog" aria-expanded="false"
                 aria-controls="layers-active-item-dropdown" id="layers-active-item-target">
                <div className="text-gray-500 bg-gray-300 text-[12px] dark:text-white dark:bg-dark-400">
                    <div className="flex justify-between  cursor-pointer pl-[16px]" draggable="true">
                        <div className="flex flex-row justify-start items-center"><span
                            className="ml-2 w-[4px] border-black border-l h-[32px] dark:border-dark-300"></span>
                            <span
                                className="flex justify-center text-black hover:text-gray-700 w-[16px] bg-green-500 h-[16px] mr-0.5">

                                    </span>
                            <div className="inline-block px-0.5 text-xs font-medium">
                                        <span
                                            className="flex flex-row justify-start items-center gap-x-2">
                                            <span className="dark:text-white">
                                                <span
                                                    className="flex justify-center w-full">
                                                    <span className="flex justify-center w-4 h-4">
                                                        <span className="relative inline-block w-[14px] h-[14px]">
                                                          <span
                                                              className="absolute top-0 left-0 w-full h-full border border-current rounded-sm"></span>
                                                          <span
                                                              className="absolute top-0 left-[3px] h-full border-r border-current"></span>
                                                          <span
                                                              className="absolute top-0 left-[10px] h-full border-r border-current"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span>Container</span>
                                        </span>
                            </div>
                        </div>
                        <div className="pr-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const LeftSidebar = () => {
    return (
        <div className="fixed top-[80px] left-0">
            <div
                className="relative inline-block overflow-x-hidden overflow-y-hidden w-[300px] h-[calc(100vh-40px-29px)] bg-white dark:bg-dark-700">
                <div className="absolute  top-[0px] overflow-y-auto w-full h-[calc(100vh-80px-29px-32px)]">
                    <ElementList/>
                </div>
            </div>
        </div>

    )
}
export default LeftSidebar;

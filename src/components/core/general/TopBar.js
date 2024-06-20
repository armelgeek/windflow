import React from "react";

export const TopBar = () => {
  return (
    <nav className="fixed top-0 left-[0px] w-[calc(100vw-0px)] h-[40px] border-b shadow-none z-[200] dark:text-white bg-white dark:bg-dark-700">
      <div className="flex flex-row justify-between items-center w-full h-full">
        <div className="w-full flex flex-row justify-between">
          <div className="start w-[calc(50vw-200px)]  bg-green-200">
            <div className="start pl-3"></div>
          </div>
          <div className="center">
            <div className="preview-size-buttons">
              <div className="btn-group bg-gray-100 dark:bg-dark-600 rounded">
                <button
                  title="Mobile - 375px"
                  className="btn btn-sm btn-light py-1 border-0 font-normal dark:!text-dark-50 dark:bg-dark-600 dark:hover:!text-white dark:hover:bg-dark-500"
                >
               
                </button>
              </div>
            </div>
          </div>
          <div className="end w-[calc(50vw-200px)] bg-green-200"></div>
        </div>
      </div>
    </nav>
  );
};

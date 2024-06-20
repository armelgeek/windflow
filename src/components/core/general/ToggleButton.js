import React, { useState } from 'react';

const ToggleButton = ({ isActive, onClick, children }) => {
    const activeClasses = "bg-green-500 dark:bg-dark-600 dark:hover:bg-dark-500 dark:hover:!text-white";
    const inactiveClasses = "dark:bg-dark-300 dark:bg-dark-600 dark:hover:bg-dark-500 dark:hover:!text-white";

    return (
        <button
            onClick={onClick}
            className={`rounded px-2 py-1 border-0 font-medium text-[12px] dark:!text-dark-50 dark:!text-white text-black ${isActive ? activeClasses : inactiveClasses}`}
        >
      <span className="flex h-full w-full flex-row items-center">
        <span className="center h-full w-full gap-x-1.5 [text-wrap:nowrap]">
          <div className="gap-x-2 w-full">
            {children}
          </div>
        </span>
      </span>
        </button>
    );
};


export default ToggleButton;

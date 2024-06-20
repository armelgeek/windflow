import React from 'react';

const Tab = ({ isActive, label, onClick, onClose }) => {
    const activeClasses = "bg-gray-700 dark:bg-dark-900";
    const inactiveClasses = "bg-gray-200 dark:bg-dark-900";

    return (
        <div
            className={`group cursor-pointer py-2 relative start flex-nowrap gap-x-1.5 pl-3 pr-4 text-[12px] font-medium rounded-t-md overflow-clip min-w-[120px] ${isActive ? activeClasses : inactiveClasses}`}
            onClick={onClick}
        >
      <span className="flex flex-col justify-center items-start h-full">
        <span className={isActive ? "text-white" : "text-black"}>
          {label}
        </span>
        <div className="absolute top-0 bottom-0 right-2 z-[1]">
          <div
              className={`flex flex-col w-full h-full justify-center items-center ${isActive ? "text-white" : "text-black"}`}
              onClick={(e) => { e.stopPropagation(); onClose(); }}
          >
            x
          </div>
        </div>
      </span>
        </div>
    );
};

export default Tab;

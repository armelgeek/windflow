import React from 'react'
import Options from './Options';
const Placement = ({ title, data, updateCss }) => {
    return (
        <div className='flex-1 space-y-2'>
            <div className="flex relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none min-w-0">
                <div className="flex flex-row-reverse justify-between w-full text-gray-900 dark:text-white text-xs text-opacity-60 dark:text-opacity-60">
                    <div className="w-2/3 items-center">
                        <div className="w-full flex flex-col space-y-1">
                            <div className="grid grid-cols-2 gap-1 mt-1">
                                <div className="w-full">
                                    <Options
                                        attr={'positionTop'}
                                        title={''}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                    <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Top </span>

                                </div>
                                <div className="w-full">
                                    <Options
                                        attr={'positionRight'}
                                        title={''}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                    <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Right </span>

                                </div>
                                <div className="w-full">
                                    <Options
                                        attr={'positionBottom'}
                                        title={''}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                    <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Bottom </span>

                                </div>
                                <div className="w-full">
                                    <Options
                                        attr={'positionLeft'}
                                        title={''}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                    <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Left </span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <label className="w-1/3 py-0.5 text-xs leading-5.5 truncate pr-1 font-medium panel-item-label text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60">
                        Placement
                    </label>

                </div>
            </div>
        </div>
    )
}

export default Placement;
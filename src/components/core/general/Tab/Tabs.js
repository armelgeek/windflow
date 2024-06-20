import React, { useState } from 'react';
import Tab from './Tab';
import {useEditor} from "@/store/editor";

const Tabs = () => {
    const {
        desktop,
        openTab,
        createEmptyBlock,
        closeTab
    } = useEditor();
    const {tabs, currentTab} = desktop;
    return (
        <>
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    isActive={index === currentTab}
                    label={tab.label}
                    onClick={() => openTab(index)}
                    onClose={() => closeTab(index)}
                />
            ))}
            <div className={`relative text-black  px-2  cursor-pointer`} onClick={createEmptyBlock}>
                Add a new
            </div>
        </>
    );
};

export default Tabs;

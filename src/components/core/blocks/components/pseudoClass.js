import React, { useCallback } from 'react'
import {useEditor} from "@/store/editor";
const PseudoClass = ({ tab, close }) => {
    const {
        desktop,
        updateDesktopValue
    } = useEditor();
    return (
        <div className="flex flex-col px-3  py-1">
            <label htmlFor="editor" className='text-xs uppercase'>Pseudo-/classes/elements</label>
            <select value={desktop.state} onChange={(e) => {
                updateDesktopValue({
                    prop: 'state',
                    value: e.target.value
                })
            }} className='select select-sm bg-white'>
                <option value="neutral">Default</option>
                <option value="hover">Hover</option>
                <option value="focus">Focus</option>
                <option value="focus-visible">Focus Visible</option>
                <option value="active">Active</option>
                <option value="disabled">Disabled</option>
                <option value="group-hover">Group Hover</option>
                <option value="first">First</option>
                <option value="last">Last</option>
                <option value="before">Before</option>
                <option value="after">After</option>
            </select>
        </div>
    )
}
export default PseudoClass;

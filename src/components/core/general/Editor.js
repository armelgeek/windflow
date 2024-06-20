import React, {useRef} from 'react';
import {useEditor} from "@/store/editor";
import BlockContainer from "@/components/core/blocks/container";

const Editor  = () => {
    const ref  = useRef();
    const {
        desktop,
        editor,
        createEmptyBlock,
        setCurrent
       } = useEditor();
    return (
        <>
            {desktop.tabs.length> 0 ? (
                <div id="BlockEditor" ref={ref}>
                        {editor.document && (<BlockContainer
                            doc={editor.document}
                            setCurrent={setCurrent}
                            level="10"
                            ajustCoords={()=> {}}
                        />)}
                    {editor.current && (
                         <pre> {editor.current.tag}</pre>
                    )}
                </div>
                ): (
                    <button className="btn btn-primary btn-xs w-48 py-2 rounded-md " onClick={createEmptyBlock}>Créer un page</button>
                )
            }
        </>)
}
    export default Editor;

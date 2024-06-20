import React, { useState, useCallback, useEffect, useRef, memo } from 'react'
import _ from 'lodash';
import classes, {flattenClasses, searchClass} from "@/lib/tail/classes";
import {useEditor} from "@/store/editor";
const classList = flattenClasses();
// eslint-disable-next-line react/display-name
const ScrollItem = memo(({ selectTag, item, index }) => {
    return (
        <div className="text-sm  lowercase suggestion-item" key={item.attr + '--' + index} onClick={() => {
            selectTag(item.value, item.attr)
        }}> {item.value}</div>
    )
}, (prevProps, nextProps) =>
    prevProps.item === nextProps.item &&
    prevProps.index === nextProps.index
)
const ScrollableList = ({ items, containerRef, selectTag }) => {
    const [visibleItems, setVisibleItems] = useState(10);
    const [loading, setLoading] = useState(false);

    const handleScroll = useCallback(() => {
        const container = containerRef.current;

        if (container) {
            const scrolledToBottom =
                Math.round(container.scrollTop + container.clientHeight + 2) >= container.scrollHeight;
            if (scrolledToBottom && !loading && visibleItems < items.length) {
                setLoading(true);
                setTimeout(() => {
                    setVisibleItems((prevVisibleItems) => Math.min(prevVisibleItems + 10, items.length));
                    setLoading(false);
                }, 100);
            }
        }
    }, [containerRef, loading, visibleItems, items.length])

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, [containerRef, loading, visibleItems, items])

    const renderedItems = items.slice(0, visibleItems).map((item, index) => (
        <ScrollItem key={index} item={item} index={index} selectTag={selectTag} />
    ));
    return (
        <>
            {renderedItems}
        </>
    );
};
const BlockCss = () => {
    const {
        desktop,
        editor,
        updateBlockStyle,
        updateBlockProperty
    } = useEditor();
    const [semantics, seSemantics] = useState(classes.semantics);
    const containerRef = useRef();
    const [cls, setCls] = useState([]);
    const [text, setText] = useState('');
    const [state, setState] = useState({
        css: editor?.current?.cssObject,
        container: editor?.current?.css.container,
        style: editor?.current?.style,
        semantic: editor?.current?.semantic,
    })
    const updateCss = useCallback((classe, attr) => {
            editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`] = {
                ...editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`],
                [attr]: classe
            };
            updateBlockStyle(editor.current.cssObject);
            if (editor.selectedBlocks.length > 0) {
                for (let index = 0; index < editor.selectedBlocks.length; index++) {
                    const element = editor.selectedBlocks[index];
                    element.cssObject[`${desktop.mode}`][`${desktop.state}`] = {
                        ...element.cssObject[`${desktop.mode}`][`${desktop.state}`],
                        [attr]: classe
                    };
                    updateBlockStyle(element.cssObject, element);
                }
            }
        },
        [editor, desktop.mode, desktop.state, updateBlockStyle])
    const updateValue = useCallback((value, type) => {
        if (type !== 'style') {
            updateBlockProperty(value, 'element');
            if (editor.selectedBlocks.length > 0) {
                for (let index = 0; index < editor.selectedBlocks.length; index++) {
                    const element = editor.selectedBlocks[index];
                    updateBlockProperty(value, 'element', element);
                }
            }
        }
        updateBlockProperty(value, type);
        if (editor.selectedBlocks.length > 0) {
            for (let index = 0; index < editor.selectedBlocks.length; index++) {
                const element = editor.selectedBlocks[index];
                updateBlockProperty(value, type, element);
            }
        }
    }, [editor.selectedBlocks, updateBlockProperty])
    useEffect(() => {
        setState({
            css: editor?.current?.cssObject,
            container: editor?.current?.css.container,
            style: editor?.current?.style,
            semantic: editor?.current?.semantic,
        });
    }, [editor])
    const handleSearh = useCallback((value) => {
        setText(value);
        if (value.length > 1) {
            setCls(searchClass(classList, value));
        }
    }, [])
    const selectTag = useCallback((value, key) => {
        updateCss(value, key);
        setCls([]);
        setText('');
    }, [updateCss])
    return (
        <div className="flex flex-col w-full h-full items-start bg-bluegray-200">
            <span className="uppercase font-bold  my-2" style={{ fontSize: '10px' }}>CSS</span>
            <div className="tag-input-sg-container  w-full">
                <input type="text" value={text} className="w-full input-sm  rounded-md  border-gray-200 focus:outline-0 focus:shadow-none focus:focus-within:ring-0 text-sm" placeholder='Search class' onChange={(e) => handleSearh(e.target.value)} />
                <div className="suggestions-container" ref={containerRef} style={{
                    display: cls.length > 0 ? 'block' : 'none'
                }}>
                    <ScrollableList items={cls} containerRef={containerRef} selectTag={selectTag} />
                </div>
                <div className="flex flex-row flex-wrap gap-2 py-2">
                    {!_.isUndefined(state.css[`${desktop.mode}`][`${desktop.state}`]) && !_.isNull(state.css[`${desktop.mode}`][`${desktop.state}`]) && Object.keys(state.css[`${desktop.mode}`][`${desktop.state}`]).map((item) => {
                        return state.css[`${desktop.mode}`][`${desktop.state}`][item] !== '' ? (
                            <div className="badge badge-primary tex-sm rounded-full text-xs lowercase font-bold cursor-pointer" key={`css-badge-` + item}>
                                <span>{state.css[`${desktop.mode}`][`${desktop.state}`][item]}</span>
                                <span className='ml-1' onClick={() => updateCss('', item)}>x</span>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>
            <span className="uppercase font-bold   my-2" style={{ fontSize: '10px' }}>Style</span>
            <textarea value={state.style} rows={10} onChange={(e) => {

                updateValue(e.target.value, 'style')
            }} className="text-sm textarea border font-mono w-full h-1/6 bg-white shadow p-1" />
            <span className="uppercase font-bold   mt-2" style={{ fontSize: '10px' }}>Semantic</span>
            <select value={state.semantic} className="w-full mr-4 select select-sm" onChange={(e) => { updateValue(e.target.value, 'semantic') }}>
                <option value=""></option>
                {semantics.map(semantic => (
                    <option key={semantic} selected={state.semantic === semantic} value={semantic}>{semantic}</option>
                ))}
            </select>
        </div>
    )
}
export default BlockCss;

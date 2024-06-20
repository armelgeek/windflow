
// Create a randomi ID
function randomID(){
    return 'tail-editor-' + Math.random().toString(36).substr(2, 5)
}

//clone object and reassign any id to a new random id
const traverse = function (o) {
    for (var i in o) {
        //fn.apply(this,[i,o[i]]);
        if (o[i] !== null && typeof (o[i]) == "object") {
            traverse(o[i]);
        } else {
            if (i === 'id') {
                o[i] = randomID()
            }
        }
    }
    return o
};


// Find a node by ID and remove (flag remove)
function removeElement(id,currentNode){
    if (id == currentNode.id) {
        return currentNode;
    } else {
        var node = null
        for(var index in currentNode.blocks){

            node = currentNode.blocks[index];

            if(node.id === id){
                currentNode.blocks.splice(index,1)
                node.parent = currentNode
                // set current node when removing
                //store.dispatch ( 'setCurrent' , currentNode )
                return node;
            }
            removeElement(id, node );
        }
        return node

    }
}


export function updateBlockContainer(blocks, currentId, modified){

    blocks.forEach((block) => {
        if (block.id === currentId) {
            block.css.container = modified;
        }
        if (block.blocks && block.blocks.length > 0) {
            updateBlockContainer(block.blocks, currentId, modified);
        }
    });
}
export function updateStyles(document, currentId, css, obj) {
    console.log('currentId',currentId);
    function checkAndUpdate(block) {
        if (block.id === currentId) {
            block.css.css = css;
            block.cssObject = obj;
            return true;
        }
        return false;
    }
    if (checkAndUpdate(document)) {
        return;
    }
    function recursiveUpdate(blocks) {
        for (let block of blocks) {
            if (checkAndUpdate(block)) {
                return;
            }
            if (block.blocks && block.blocks.length > 0) {
                recursiveUpdate(block.blocks);
            }
        }
    }
    if (document.blocks && document.blocks.length > 0) {
        recursiveUpdate(document.blocks);
    }
}


export const flattenObject = (nestedObj, prefix = '') => {
    return Object.keys(nestedObj).reduce((acc, key) => {
        const newKey = `${prefix}`;
        if (typeof nestedObj[key] === 'object' && nestedObj[key] !== null) {
            return { ...acc, ...flattenObject(nestedObj[key], `${newKey}.`) };
        } else {
            return { ...acc, [newKey]: nestedObj[key] };
        }
    }, {});
};
export function updateBlockProperty(blocks, currentId, propertyPath, modified) {
    const propertyParts = propertyPath.split('.');

    blocks.forEach((block) => {
        if (block.id === currentId) {
            let currentLevel = block;
            for (let i = 0; i < propertyParts.length - 1; i++) {
                currentLevel = currentLevel[propertyParts[i]];
            }
            currentLevel[propertyParts[propertyParts.length - 1]] = modified;
        }

        if (block.blocks && block.blocks.length > 0) {
            updateBlockProperty(block.blocks, currentId, propertyPath, modified);
        }
    });
}
export function modifyBlockProperty(blocks, currentId, modified, property) {
    blocks.forEach((block) => {
        if (block.id === currentId) {
            let properties = property.split('.');
            let currentObject = block;

            for (let prop of properties.slice(0, -1)) {
                currentObject[prop] = currentObject[prop] || {};
                currentObject = currentObject[prop];
            }

            currentObject[properties[properties.length - 1]] = modified;
        }

        if (block.blocks && block.blocks.length > 0) {
            modifyBlockProperty(block.blocks, currentId, modified, property);
        }
    });
}
export function moveBlockAction(blocks, currentId, direction) {
    let targetIndex = -1;

    blocks.forEach((block, index) => {
        if (block.id === currentId) {
            targetIndex = index;
        }

        if (block.blocks && block.blocks.length > 0) {
            moveBlockAction(block.blocks, currentId, direction);
        }
    });

    if (targetIndex !== -1) {
        if (direction === "up" && targetIndex > 0) {
            const temp = blocks[targetIndex];
            blocks[targetIndex] = blocks[targetIndex - 1];
            blocks[targetIndex - 1] = temp;
        } else if (direction === "down" && targetIndex < blocks.length - 1) {
            const temp = blocks[targetIndex];
            blocks[targetIndex] = blocks[targetIndex + 1];
            blocks[targetIndex + 1] = temp;
        }
    }
}

export function duplicateBlockAction(blocks, current, duplicatedBlock) {

    blocks.forEach((block, index) => {
        if (block.id === current.id) {
            blocks.splice(index + 1, 0, duplicatedBlock);
        }
        if (block.blocks && block.blocks.length > 0) {
            duplicateBlockAction(block.blocks, current, duplicatedBlock);
        }
    });
}
export function duplicateData(current){
    const duplicating = (block) => {
        const duplicate = { ...block };
        duplicate.id = randomID('windflow');
        if (duplicate.blocks && duplicate.blocks.length > 0) {
            duplicate.blocks = duplicate.blocks.map(duplicating);
        }
        return duplicate;
    };
    return duplicating(current);
}

function findBlockById(blocks, currentId) {
    for (const block of blocks) {
        if (block.id === currentId) {
            return block;
        }
        if (block.blocks && block.blocks.length > 0) {
            const childBlock = findBlockById(block.blocks, currentId);
            if (childBlock) {
                return childBlock;
            }
        }
    }
    return null;
}


export function navigateToParentAction(blocks, currentId) {
    for (const block of blocks) {
        const childBlock = findBlockById(block.blocks, currentId);
        if (childBlock) {
            return block;
        }
        if (block.blocks && block.blocks.length > 0) {
            const parentBlock = navigateToParentAction(block.blocks, currentId);
            if (parentBlock) {
                return parentBlock;
            }
        }
    }

    return null;
}
export function updateBlockIcon(blocks, currentId, modified) {

    blocks.forEach((block) => {
        if (block.id === currentId) {
            block.data.icon = modified
        }
        if (block.blocks && block.blocks.length > 0) {
            updateBlockIcon(block.blocks, currentId, modified);
        }
    });
}
export function removeNestedObjectsKey(currentNode = {}, arrayKey = [], deleteKey = '') {

    delete currentNode[deleteKey]
    currentNode[arrayKey].forEach((obj) => {
        removeNestedObjectsKey(obj, arrayKey, deleteKey)
    })
    return currentNode
}
export function manageObjectInArray(arr, object) {
    const index = arr.findIndex((item) => item.id === object.id);
    if (index === -1) {
        arr.push(object);
    } else {
        arr.splice(index, 1);
    }
    return arr;
}
export function filterBlocksRecursive(blocks, currentId) {
    return blocks.filter((block) => {
        if (block.id === currentId) {
            return false;
        }

        if (block.blocks && block.blocks.length > 0) {
            block.blocks = filterBlocksRecursive(block.blocks, currentId);
        }

        return true;
    });
}

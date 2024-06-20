export const displayDate = (timestamp) => {
    const date = new Date(timestamp);

    const monthNames = [
        "Janvier",
        "Fevrier",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Decembre",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // return day + ' ' + monthNames[monthIndex] + ' ' + year;
    return ` ${day} ${monthNames[monthIndex]} ${year}`;
};

export const displayMoney = (n) => {
    const format = new Intl.NumberFormat("fr-MG", {
        style: "currency",
        currency: "MGA",
    });

    // or use toLocaleString()
    return format.format(n);
};

export const calculateTotal = (arr) => {
    if (!arr || arr?.length === 0) return 0;

    const total = arr.reduce((acc, val) => acc + val, 0);

    return total;
};


function strOp(str) {
    return str.toString().replace(/\s/g, "").toLowerCase();
}

export const checkHasExistText = (text, textCheck) => {
    if (strOp(text).includes(strOp(textCheck))) {
        return true;
    }
};
export const removeLeadingNegativeSign = (text) => {
    let x = text.startsWith('-');
    return {
        negative: x ? 1 : 0,
        attribute: text.substr(x ? 1 : 0)
    };
}
export const displayShortMonth = (timestamp) => {
    const date = new Date(timestamp);

    const monthNames = [
        "Jan.",
        "Févr.",
        "Mars",
        "Avr.",
        "Mai",
        "Juin.",
        "Juill.",
        "Août",
        "Sept.",
        "Oct.",
        "Nov",
        "Déc.",
    ];

    const monthIndex = date.getMonth();
    return `${monthNames[monthIndex]}`;
};


export function removeClassesByType(originalString, classType) {
    const regex = new RegExp(`\\b${classType}-\\w+\\s*`, 'g');
    const newString = originalString.replace(regex, '');
    const cleanedString = newString.trim().replace(/\s+/g, ' ');

    return cleanedString;
}
export const clean = function (str = '') {
    if (!str) return ''
    str = str.replace(/\s\s+/g, ' ')
    return [...new Set(str.split(' '))].join(' ')
}
export function toCamelCase(str) {
    return str.replace(/-([a-z])/g, function (match, p1) {
        return p1.toUpperCase();
    });
}
export function getAllFontsFromBlocks(blocks) {
    const fontsSet = new Set();
    function traverseBlocks(blocks) {
        if (Array.isArray(blocks)) {
            blocks.forEach((block) => {
                if (block.font && block.font !== "") {
                    fontsSet.add(block.font);
                }
                if (block.blocks && block.blocks.length > 0) {
                    traverseBlocks(block.blocks);
                }
            });
        } else {
            fontsSet.add(blocks.font);
            if (blocks.blocks && blocks.blocks.length > 0) {
                traverseBlocks(blocks.blocks);
            }
        }
    }
    traverseBlocks(blocks.document);
    return Array.from(fontsSet);
}

export function mergeCSSObjects(obj1, obj2) {
    const mergedObject = { ...obj1 };
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (mergedObject[key]) {
                mergedObject[key] = { ...mergedObject[key], ...obj2[key] };
            } else {
                mergedObject[key] = obj2[key];
            }
        }
    }

    return mergedObject;
}

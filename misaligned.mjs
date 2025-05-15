import { expect } from 'chai';

const MAJOR_COLORS = ["White", "Red", "Black", "Yellow", "Violet"];
const MINOR_COLORS = ["Blue", "Orange", "Green", "Brown", "Slate"];

function getMajorColor(index) {
    if (!index || index < 1 || index > 25) {
        return -1
    }
    try {
        const colorMap = _get_color_map()
        let result = colorMap.get(index)[0]
        return result === undefined ? -1 : result
    } catch (error) {
        return "Error: Invalid index" + error
    }
}
function getMinorColor(index) {
    if (!index || index < 1 || index > 25) {
        return -1
    }
    try {
        const colorMap = _get_color_map()
        let result = colorMap.get(index)[1]
        return result === undefined ? -1 : result
    } catch (error) {
        return "Error: Invalid index" + error
    }
}
function getNumberFromColor(majorColor, minorColor) {
    if (!majorColor || !minorColor) {
        return -1
    }
    try {
        const colorMap = _get_color_map()
        for (let [key, val] of colorMap) {
            if (val[0] === majorColor && val[1] === minorColor) {
                return key
            }
        }
        throw new Error("color not found")
    } catch (error) {
        return "Error: color not found" + error
    }
}

function print_color_map() {
    const colorMap = _get_color_map()
    for (let [key, val] of colorMap) {
        console.log(`${key} | ${val[0]} | ${val[1]}`)
    }
}


function _get_color_map() {
    const colorMap = new Map();
    let index = 1;
    for (let i = 0; i < MAJOR_COLORS.length; i++) {
        for (let j = 0; j < MINOR_COLORS.length; j++) {
            colorMap.set(index, [MAJOR_COLORS[i], MINOR_COLORS[j]]);
            index++;
        }
    }
    return colorMap;
}




export { getMajorColor, getMinorColor, getNumberFromColor, print_color_map }
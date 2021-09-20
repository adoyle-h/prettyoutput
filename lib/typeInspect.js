'use strict'

const toString = Object.prototype.toString;
const serializableList = [
    '[object Null]', '[object Undefined]', '[object Number]', '[object Boolean]', '[object Date]',
];

/**
 * Serializable values are boolean, number, null, Date, Single line strings, empty arrays
 * @param {*} input
 * @return {boolean}
 */
exports.isSerializable = function(input) {
    const type = toString.call(input);
    return (
        serializableList.includes(type) ||
        // is single line string
        (type === '[object String]' && input.indexOf('\n') === -1) ||
        // is empty array
        (type === '[object Array]' && input.length <= 0) ||
        // is empty object
        (type === '[object Object]' && Object.keys(input).length <= 0)
    )
}

/* Problem 39: Flatten Object (Deep)
 Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
 Example:
 Input: {a: {b: {c: 1}}} Output: {'a.b.c': 1}
 Hint: Use recursion; build the key by joining parent keys with dots.
*/

function flattenObject(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        const newKey = parentKey
            ? `${parentKey}.${key}`
            : key;

        if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
        ) {
            flattenObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
}

// Example:
const obj = {
    a: {
        b: {
            c: 1
        }
    },
    d: 2
};

console.log(flattenObject(obj));

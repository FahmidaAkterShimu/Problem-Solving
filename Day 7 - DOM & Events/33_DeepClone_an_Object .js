/* Problem 33: Deep Clone an Object
 Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
 Example:
 const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99; 
 // a.x.y is still 1
 Hint: Use recursion and check for object/array types.
 */

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const cloned = {};

    for (let key in obj) {
        cloned[key] = deepClone(obj[key]);
    }

    return cloned;
}

// Test
const a = {
    x: {
        y: 1
    }
};

const b = deepClone(a);

b.x.y = 99;

console.log(a.x.y);
console.log(b.x.y);

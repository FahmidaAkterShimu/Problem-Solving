/* Problem 17: Merge Two Objects
 Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
 Example:
 Input: {a:1}, {b:2}  → Output: {a:1, b:2}
 Hint: Use the spread operator or Object.assign().
 */

//  Method 1
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1 }, { b: 2 }));


// Method 2
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const output = mergeObjects({ a: 1 }, { b: 2 });

console.log(output);

/* Problem 16: Count Object Properties
 Description: Write a function countProperties(obj) that returns the number of properties in an object.
 Example:
 Input: {a: 1, b: 2, c: 3}  → Output: 3
 Hint: Use Object.keys().length.
 */

function countProperties(obj) {
    const properties = Object.keys(obj);
    const count = properties.length;

    return count;
}

output = countProperties({ a: 1, b: 2, c: 3 });

console.log(output);

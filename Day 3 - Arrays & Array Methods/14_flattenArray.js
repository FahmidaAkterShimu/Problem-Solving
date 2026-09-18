/* Problem 14: Flatten a Nested Array
 Description: Write a function flattenArray(arr) that flattens one level of a nested array.
 Example:
 Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
 Hint: Use flat() or reduce() with concat(). 
 */

// Method 1
function flattenArray(arr) {
    return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, 5]]));

// Method 2
function flattenArray(arr) {
    return arr.reduce((acc, current) => {
        return acc.concat(current);
    }, []);
}

console.log(flattenArray([1, [2, 3], [4, 5]]));

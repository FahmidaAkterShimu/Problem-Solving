/* Problem 27: Merge Arrays with Spread
 Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
 Example:
 Input: [1,2], [3,4], [5] Output: [1,2,3,4,5]
 Hint: Use rest parameters and spread inside reduce or flat.
*/

function mergeArrays(...arrays) {
    return arrays.flat();
}

output = mergeArrays([1, 2], [3, 4], [5]);

console.log(output);

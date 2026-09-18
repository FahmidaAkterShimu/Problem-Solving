/* Problem 13: Remove Duplicates from Array
 Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
 Example:
 Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
 Hint: Use Set or filter() with indexOf().
*/

// First method
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// Second method
function removeDuplicates(arr) {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });
}

output = removeDuplicates([1, 2, 2, 3, 3, 4])

console.log(output);

/* Problem 12: Find Maximum Value in Array
 Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
 Example:
 Input: [3, 1, 7, 2, 9] → Output: 9
 Hint: Loop through and track the largest value found.
*/

function findMax(arr) {
    let max = 0;
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

output = findMax([3, 1, 7, 2, 9]);

console.log(output);

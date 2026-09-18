/* Problem 11: Find the Sum of an Array
 Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
 Example:
 Input: [1, 2, 3, 4, 5]  → Output: 15
 Hint: Use reduce() or a for loop. 
*/

function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

output = sumArray([1, 2, 3, 4, 5]);

console.log(output);

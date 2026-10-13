/* Problem 48: Rotate an Array
 Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
 Example:
 Input: [1,2,3,4,5], k=2
 Output: [4,5,1,2,3]
 Hint: Use slice and concat, or reverse the whole array then parts.
*/

function rotateArray(arr, k) {
    if (arr.length === 0) return [];

    k = k % arr.length;

    return arr
        .slice(-k)
        .concat(arr.slice(0, arr.length - k));
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

/* Problem 45: Binary Search
 Description: Write a function binarySearch(arr, target) that searches a sorted array and returns the index of the target, or -1 if not found.
 Example:
 Input: [1,3,5,7,9], target=7  → Output: 3
 Hint: Use left and right pointers; check the middle element each iteration.
*/

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;
        }

        if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));
console.log(binarySearch([1, 3, 5, 7, 9], 4));

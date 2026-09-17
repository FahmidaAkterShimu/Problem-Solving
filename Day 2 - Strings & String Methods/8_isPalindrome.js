/* Problem 8: Check Palindrome
 Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
 Example:
 Input: 'racecar'  → Output: true | Input: 'hello'    → Output: false
 Hint: Compare the string to its reverse.
 */

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");

    return str === reversed;
}

output1 = isPalindrome("racecar")
output2 = isPalindrome("hello")

console.log(output1);
console.log(output2);

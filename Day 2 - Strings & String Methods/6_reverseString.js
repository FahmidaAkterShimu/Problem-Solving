/* Problem 6: Reverse a String
 Description: Write a function reverseString(str) that returns the reverse of a given string.
 Example:
 Input: 'hello'   → Output: 'olleh' | Input: 'world'   → Output: 'dlrow'
 Hint: Use split(''), reverse(), and join(''). */

function reverseString(str) {
    return str.split("").reverse().join("");
}

output1 = reverseString("hello");
output2 = reverseString("world")

console.log(output1);
console.log(output2);

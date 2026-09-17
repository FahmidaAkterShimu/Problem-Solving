/* Problem 10: Count Occurrences of a Character
 Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
 Example:
 Input: 'banana', 'a'  → Output: 3
 Hint: Use split(char).length - 1 or a loop.
*/

function countChar(str, char) {
    return str.split(char).length - 1;
}

output = countChar("banana", "a")

console.log(output);

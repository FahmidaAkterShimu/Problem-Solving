/* Problem 7: Count Vowels in a String
 Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
 Example:
 Input: 'hello'   → Output: 2 | Input: 'javascript' → Output: 3
 Hint: Use a loop or match() with a regular expression.
*/

function countVowels(str) {
    let count = 0;

    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }

    return count;
}

output1 = countVowels('hello');
output2 = countVowels('javascript');

console.log(output1);
console.log(output2);

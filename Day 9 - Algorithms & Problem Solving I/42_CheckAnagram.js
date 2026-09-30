/* Problem 42: Check Anagram
 Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
 Example:
 Input: 'listen', 'silent'  → Output: true
 Input: 'hello', 'world'   → Output: false
 Hint: Sort both strings and compare, or use a character frequency map.
*/

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const count = {};

    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

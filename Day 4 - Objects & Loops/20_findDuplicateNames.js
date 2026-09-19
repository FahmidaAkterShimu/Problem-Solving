/* Problem 20: Find Duplicate Values in Array of Objects
 Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
 Example:
 Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}] Output: ['Ali']
 Hint: Use a frequency map (object) to count occurrences.
 */

function findDuplicateNames(arr) {
    const frequency = {};

    for (let person of arr) {
        const name = person.name;

        if (frequency[name]) {
            frequency[name]++;
        }
        else {
            frequency[name] = 1;
        }
    }

    return Object.keys(frequency).filter(
        name => frequency[name] > 1
    );
}

output = findDuplicateNames([
    { name: "Ali" },
    { name: "Sara" },
    { name: "Ali" }
])

console.log(output);

/* Problem 50: Pascal's Triangle Row
 Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
 Example:
 Input: 0  → Output: [1]
 Input: 3  → Output: [1,3,3,1]
 Input: 4  → Output: [1,4,6,4,1]
 Hint: Each element is the sum of the two elements above it from the previous row.
*/

function pascalRow(n) {
    let row = [1];

    for (let i = 1; i <= n; i++) {
        const newRow = [1];

        for (let j = 1; j < row.length; j++) {
            newRow.push(row[j - 1] + row[j]);
        }

        newRow.push(1);
        row = newRow;
    }

    return row;
}

console.log(pascalRow(0));
console.log(pascalRow(3));
console.log(pascalRow(4));

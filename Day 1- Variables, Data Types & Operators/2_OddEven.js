/* Problem 2: Check Even or Odd
 Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
 Example:
 Input: 4  → Output: true | Input: 7  → Output: false
 Hint: Use the modulus (%) operator. */

function isEven(n) {
    return n % 2 === 0;
}

const output1 = isEven(4);
console.log(output1);

const output2 = isEven(7);
console.log(output2);

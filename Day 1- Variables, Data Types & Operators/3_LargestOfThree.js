/* Problem 3: Find the Largest of Three Numbers
 Description: Write a function largest(a, b, c) that returns the largest of three numbers.
 Example:
 Input: 3, 7, 5  → Output: 7
 Hint: Use Math.max() or if-else conditions.*/

function largest(a, b, c) {
    if (a > b && a > c)
        return a;

    else if (b > a && b > c)
        return b;

    else
        return c;
}

const output = largest(3, 7, 5);

console.log(output);

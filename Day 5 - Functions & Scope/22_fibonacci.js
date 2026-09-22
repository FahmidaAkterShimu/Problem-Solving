/* Problem 22: Fibonacci Sequence
 Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
 Example:
 Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
 Hint: Try both iterative and recursive approaches.
*/

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + current;

        prev = current;
        current = next;
    }

    return current;
}

output = fibonacci(6);

console.log(output);

/* Problem 44: Valid Parentheses
 Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
 Example:
 Input: '()[]{}'  → Output: true
 Input: '([)]'    → Output: false
 Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones.
*/

function isValidParentheses(str) {
    const stack = [];

    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let char of str) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            const top = stack.pop();

            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("([)]"));

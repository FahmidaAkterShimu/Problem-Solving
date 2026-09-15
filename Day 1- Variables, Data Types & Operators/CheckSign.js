/* Problem 5: Check Positive, Negative or Zero
 Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
 Example:
 Input: -5 → Output: 'negative' | Input: 0 → Output: 'zero'
 Hint: Use if-else if-else statements. */

function checkSign(n) {
    if (n > 0)
        return "positive";
    else if (n < 0)
        return "negative";
    else
        return "zero";
}

const output1 = checkSign(-5);

console.log(output1);

const output2 = checkSign(0);

console.log(output2);

/* Problem 4: Celsius to Fahrenheit
 Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
 Example:
 Input: 0 → Output: 32 | Input: 100 → Output: 212
 Hint: Formula: (C × 9/5) + 32 */

function toFahrenheit(celsius) {
    const C = (celsius * 9 / 5) + 32;
    return C;
}

const output1 = toFahrenheit(0);

console.log(output1);

const output2 = toFahrenheit(100);

console.log(output2);

/* Problem 46: Count Words in a Sentence
 Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
 Example:
 Input: 'the cat sat on the mat'
 Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
 Hint: Split by spaces, then reduce into a frequency object.
*/

function wordCount(sentence) {
    const words = sentence.toLowerCase().trim().split(/\s+/);

    return words.reduce((count, word) => {
        count[word] = (count[word] || 0) + 1;
        return count;
    }, {});
}

console.log(wordCount("the cat sat on the mat"));

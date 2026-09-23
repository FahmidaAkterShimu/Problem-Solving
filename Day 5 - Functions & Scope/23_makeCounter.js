/* Problem 23: Create a Counter with Closure
 Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
 
 Example:
 const c = makeCounter();
 c.increment(); 
 c.increment();
 c.getCount();
 
 Hint: Use a variable inside the outer function that inner functions can access.
*/

function makeCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },

    decrement: function () {
      count--;
    },

    getCount: function () {
      return count;
    }
  };
}

const c = makeCounter();

c.increment();
c.increment();

console.log(c.getCount());

c.decrement();

console.log(c.getCount());

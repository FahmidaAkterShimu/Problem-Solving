/* Problem 32: Throttle Function
 Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
 Example:
 const throttledScroll = throttle(onScroll, 200);
 // Fires at most once every 200ms during scroll
 Hint: Track the last call time with Date.now().
 */

function throttle(fn, limit) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= limit) {
            lastCall = now;
            fn(...args);
        }
    };
}

function onScroll() {
    console.log("Scroll event");
}

const throttledScroll = throttle(onScroll, 200);

setInterval(() => {
  throttledScroll();
}, 200);

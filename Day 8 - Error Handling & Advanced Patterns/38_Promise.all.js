/* Problem 38: Implement Promise.all from Scratch
 Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
 Example:
 myPromiseAll([p1, p2, p3]).then(results => console.log(results));
 Hint: Track resolved count and results array; reject on first failure.
*/

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    resolvedCount++;

                    if (resolvedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
}


// Example:
const p1 = Promise.resolve("A");

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("B"), 1000);
});

const p3 = Promise.resolve("C");

myPromiseAll([p1, p2, p3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });

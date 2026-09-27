/* Problem 37: Retry a Promise
 Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
 Example:
 await retry(unstableFetch, 3); // Tries up to 3 times before failing
 Hint: Use a loop with try/catch; only throw after all retries are exhausted.
*/

async function retry(fn, times) {
    let lastError;

    for (let i = 1; i <= times; i++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
        }
    }

    throw lastError;
}


// Test
let attempt = 0;

async function unstableFetch() {
    attempt++;

    if (attempt < 3) {
        throw new Error("Request failed");
    }

    return "Success";
}

async function main() {
    try {
        const result = await retry(unstableFetch, 3);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();

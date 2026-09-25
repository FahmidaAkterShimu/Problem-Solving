/* Problem 29: Async/Await Fetch Simulation
 Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
 Example:
 await getUserData(1); 
 // returns {id:1, name:'Test User'}
 Hint: Use async/await with a Promise that wraps setTimeout.
*/

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function getUserData(id) {
    await delay(500);

    return {
        id: id,
        name: "Test User"
    };
}

async function main() {
    const user = await getUserData(1);

    console.log(user);
}

main();

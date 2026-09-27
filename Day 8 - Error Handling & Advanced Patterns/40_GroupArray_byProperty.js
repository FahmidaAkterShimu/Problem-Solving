/* Problem 40: Group Array by Property
 Description: Write a function groupBy(arr, key) that groups an array of objects by a given property key.
 Example:
 groupBy([{type:'fruit',name:'apple'},
 {type:'veg',name:'carrot'},
 {type:'fruit',name:'mango'}], 'type')
 // {fruit: [...], veg: [...]}
 Hint: Use reduce() and build an object where each key maps to an array.
*/

function groupBy(arr, key) {
    return arr.reduce((result, item) => {
        const group = item[key];

        if (!result[group]) {
            result[group] = [];
        }

        result[group].push(item);

        return result;
    }, {});
}

// Example:
const users = [
    { type: "fruit", name: "apple" },
    { type: "veg", name: "carrot" },
    { type: "fruit", name: "mango" }
];

console.log(groupBy(users, "type"));

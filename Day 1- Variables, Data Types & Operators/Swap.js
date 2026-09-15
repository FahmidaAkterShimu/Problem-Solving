// Problem 1: Swap Two Variables

function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

const output = swap(5, 10);

console.log(output);

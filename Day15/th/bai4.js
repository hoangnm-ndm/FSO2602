// Input:
// Phan Minh Trúc
const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
    '',
    '',
    2,
    null,
    undefined,
    undefined
];

function countElement(arr) {
    const count = arr.reduce((acc, ele) => {
        acc[ele] = (acc[ele] || 0) + 1;
        return acc;
    }, {});
    return count;
}

// Output:
const result = countElement(fruits);
console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }



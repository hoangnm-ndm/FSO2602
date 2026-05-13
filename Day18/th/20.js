//Phan Minh Trúc
function findCommonElement(arr1, arr2) {
    // Loại bỏ phần tử trùng lặp
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    let result = [];

    // Duyệt set1 và kiểm tra trong set2
    for (let item of set1) {
        if (set2.has(item)) {
            result.push(item);
        }
    }

    return result.length ? result : false;
}

// Test
console.log(findCommonElement([1, 2, 2, 3, 4], [2, 2, 4, 5]));
// [2, 4]

console.log(findCommonElement([1, 3, 5], [2, 4, 6]));
// false
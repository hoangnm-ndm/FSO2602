// Minh Truc
function findCommonElement(arr1, arr2) {
    // Xử lý và in ra kết quả
    const newArr = []
    for (let i of new Set(arr2)) {
        if (new Set(arr1).has(i)) {
            newArr.push(i)
        }
    }
    return newArr
}
console.log(findCommonElement([1, 2, 3, 4, 2, 6], [2, 3, 4, 3, 4, 7, 6]))


function findCommonElement(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];
    for (const item of set1) {
        if(arr2.includes(item)){
            result.push(item)
        }
    }
    if (result.length) {
        console.log(...result);
    } else {
        console.log(false);
    }
}

// Output:
findCommonElement([1, 2, 3], [2, 3, 4]); // 2 3
findCommonElement([1, 2, 3], [4, 5, 6]); // false
findCommonElement([1, 2, 3], [4, 5, 6]); // false
findCommonElement([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]); // 2 3 4

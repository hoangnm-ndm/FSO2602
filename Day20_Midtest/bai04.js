function findSecondLargestNumber(arr) {
	if (!Array.isArray(arr)) return "invalid";
	// Cach 1:
	// const uniqueArr = [...new Set(arr)];

	// Cach 2: su dung reduce để loại bỏ trùng lặp.
	const uniqueArr = arr.reduce((acc, cur) => {
		if (!acc.includes(cur)) {
			acc.push(cur);
		}
		return acc;
	}, []);

	if (uniqueArr.length < 2) return null;
	uniqueArr.sort((a, b) => b - a);
	return uniqueArr[1];
}

console.log(findSecondLargestNumber([1, 1, 1])); // null
console.log(findSecondLargestNumber([1, 1, 2, 3, 4])); // 1
console.log(findSecondLargestNumber([1, 1, 2])); //
console.log(findSecondLargestNumber([1, 1])); // null
console.log(findSecondLargestNumber([1, -1, 2, 2, , , , ,])); // 2

// Tiến An
const arrayNumber = [1, 2, 3, 4, 3, 2, 1];
ex1 = 2;
ex2 = [1, 2, 2, 1];
ex3 = [1, 2, 3, 4];
ex4 = [1, 2, 3, 4, 3, 2, 1];
function checkSymmetricalArr(arr) {
	if (!Array.isArray(arr)) {
		return "Dữ liệu không hợp lệ.";
	}

	if (arr.length===1) {
		return "Mảng có 1 phần tử, không kiểm tra được";
	}

	let leftPointer = 0;
	let rightPointer = arr.length - 1;

	while (leftPointer < rightPointer) {
		if (arr[leftPointer] !== arr[rightPointer]) return false;

		leftPointer++;
		rightPointer--;
	}

	return true;
}

// Output:
const result = checkSymmetricalArr(arrayNumber);

console.log(result); //true

console.log("checkSymmetricalArr(ex1)", checkSymmetricalArr(ex1));
console.log("checkSymmetricalArr(ex2)", checkSymmetricalArr(ex2));
console.log("checkSymmetricalArr(ex3)", checkSymmetricalArr(ex3));
console.log("checkSymmetricalArr(ex4)", checkSymmetricalArr(ex4));
console.log("checkSymmetricalArr([])", checkSymmetricalArr([]));
console.log("checkSymmetricalArr([1])", checkSymmetricalArr([1]));

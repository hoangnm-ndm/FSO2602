console.log(1, 2, 32, 34, 4, 5, 5, "Hoang");

function sum() {
	// console.log(arguments);
	// console.log(typeof arguments);
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

// console.log({ sum });

// * Symbol.iterator
console.log(sum(1, 2, 3, 4, 5, 10, 20));

// * rest operator
//*: Toán tử rest đi gom hết các giá trị còn lại thành một mảng.

function tinhTong(...rest) {
	console.log(Array.isArray(rest));
	let total = 0;
	for (let i = 0; i < rest.length; i++) {
		total += rest[i];
	}
	return total;
}
console.log(tinhTong(1, 2, 3, 4));

function hello() {
	console.log("hello");
}

const result = hello();
console.log(result);

/**
 * * Tính chỉ số BMI từ người dùng nhập vào chiều cao (cm) và cân nặng (kg)
 */

function calcBMI(height, weight) {
	// * validation value /  Not a Number
	if (Number.isNaN(height) || Number.isNaN(weight)) {
		return "so nhap vao khong hop le!";
	}
	const bmi = (weight * 10000) / (height * height);
	return bmi;
}

const height = +prompt("height?");
const weight = +prompt("weight?");

console.log(calcBMI(height, weight));

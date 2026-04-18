/**
 * * Bai 1: Kiem tra xem dãy số a,b,c có phải dãy số tăng dần không? Với a, b, c nhập lần lượt từ bàn phím
 */

/**
 * ? Input: a,b,c từ bàn phím.
 * ? Logic: a < b, b < c
 * ? Output: true/false - tăng/không tăng dần.
 */

// console.log(window);

let a = +prompt("Moi ban nhap a:");
let b = +prompt("Moi ban nhap b:");
let c = +prompt("Moi ban nhap c:");

console.log(typeof a);

console.log(a, b, c);
if (a < b && b < c) {
	// console.log("tang dan");
	console.log(true);
} else {
	console.log(false);
}

/**
 * * Kiểm tra 3 số nhập từ bàn phím có phải là độ dài 3 cạnh của 1 tam giác không?
 */

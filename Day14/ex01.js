function count(...agrs) {}

function sum(a, b) {
	// console.log(a + b);
	return a + b;
}

sum(10, 20);

function chuviChuNhat(a, b) {
	console.log(sum(a, b) * 2);
}

/**
 * * Hình chữ nhật có 2 cạnh a, b. Tính chu vi?
 */

/**
 * * Nhu cầu:
 * - Gom các logic lại để tái sử dụng.
 * - Code sạch, dễ bảo trì, có tính đóng gói.
 * => Dùng Hàm
 *
 * * 1. Named function - Function Declaration
 * * 2. Expression function
 */

// const tinhTong = function (a, b) {
// 	return a + b;
// 	console.log("ahihi");
// };

// console.log(tinhTong(2, 3));

/**
 *
 * input: ()
 * =>
 * logic+output
 */
const hello = (name = "ban") => {
	console.log(`Xin chao ${name}`);
};

hello("Hoang");
hello();

const tinhTong = (a, b) => a + b;

const showArray = (a, b, c) => [a, b, c];

console.log(showArray(10, 20, 30));

const showObj = (a, b, c) => ({ a, b, c });

console.log(showObj(10, 20, 30));

const btnElement = document.getElementById("hello");
btnElement.onclick = function () {
	console.log("xin chao!");
	console.log("bonjour!");
	console.log("hello!");
};

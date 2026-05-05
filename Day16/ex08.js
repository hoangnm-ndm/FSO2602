const arr = [1, 2, 3, 4];

// const result = arr.reduce((accumulator, currentValue, currentIndex, array) => {
//  accumulator *= currentValue;
// 	return accumulator;
// }, 1);

// const result = arr.reduce((acc, cur) => {
// 	console.log({ acc, cur });
// 	acc += cur;
// 	return acc;
// });

// console.log(result);

console.log(arr);

const cart = [
	{ id: 1, name: "tomato", quantity: 2, price: 30 },
	{ id: 2, name: "tivi LG", quantity: 3, price: 2000 },
	{ id: 3, name: "Logitech mouse MX Anywhere 3", quantity: 1, price: 1200 },
];

// * Tính tổng giá trị giỏ hàng bằng reduce

// * PHAN MINH TRUC
const result = cart.reduce((acc, cur) => (acc += cur.quantity * cur.price), 0);

Object + 3 * 2000 + 1 * 1200; // [object Object]60001200

console.log(result);

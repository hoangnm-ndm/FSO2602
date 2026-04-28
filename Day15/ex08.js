/**
 * * map = mapping (ánh xạ)
 * * trả về 1 mảng mới cùng số lượng phần từ với mảng gốc nhưng có sự biến đổi thông qua logic trong callback.
 *
 *
 */

const number = [1, 2, 3, 4];

function scale(item, index) {
	return item * 2;
}

console.log(number.map(scale));

const products = [
	{ id: 1, name: "tomato", quantity: 2, price: 30 },
	{ id: 2, name: "tivi LG", quantity: 3, price: 2000 },
];

const cart = products.map((item) => ({
	...item,
	total: item.quantity * item.price,
}));

console.log(cart);

const returnMap = [1, 2, 3, 4].map((item) => {
	console.log(item);
});

console.log(returnMap);

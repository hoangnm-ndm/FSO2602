/**
 * * search method: find, findIndex, findLast, findLastIndex, filter, includes, indexOf()...
 */

const animals = ["ant", "bee", "cat", "dog", "bee", "mongoose"];

const findResult = animals.find((item) => item === "bee");
console.log(findResult);

const products = [
	{ id: 1, name: "tomato", quantity: 2, price: 30 },
	{ id: 2, name: "tivi LG", quantity: 3, price: 2000 },
	{ id: 3, name: "Logitech mouse MX Anywhere 3", quantity: 1, price: 1200 },
];

console.log(products.find((item) => item.price >= 1000));

// * findLast: giống với find nhưng tìm khớp phần tử cuối cùng thoả mãn callback.
console.log(products.findLast((item) => item.price >= 1000));

// * findIndex, findLastIndex tương tự nhưng trả về index của phần tử thoã mãn.

console.log(products.filter((item) => item.price >= 1000));

console.log(animals.indexOf("beeeee", 0));
// * Trả về -1 khi không tìm thấy.

console.log(animals.includes("cat", 3));

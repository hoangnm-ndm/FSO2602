const products = [
	{ id: 1, name: "tomato", quantity: 2, price: 30 },
	{ id: 2, name: "tivi LG", quantity: 3, price: 2000 },
	{ id: 3, name: "Logitech mouse MX Anywhere 3", quantity: 1, price: 1200 },
];

function sortByField(arr, field, direction = "asc") {
	const sult = [...arr];

	sult.sort((a, b) => {
		let value1 = a[field];
		let value2 = b[field];

		if (direction === "asc") {
			return value1 > value2 ? 1 : -1;
		} else {
			return value1 < value2 ? 1 : -1;
		}
	});

	return sult;
}

console.log(sortByField(products, "price", "desc"));
console.log(sortByField(products, "name", "asc"));

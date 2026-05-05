const products = [
	{ id: 1, name: "tomato", quantity: 2, price: 30 },
	{ id: 2, name: "tivi LG", quantity: 3, price: 2000 },
	{ id: 3, name: "Logitech mouse MX Anywhere 3", quantity: 1, price: 1200 },
];
function sortByField(arr, field, direction = "asc") {
	if (direction == "desc") {
		if (typeof arr[0][field] === "number") {
			return arr.sort((a, b) => b[field] - a[field]);
		} else {
			return arr.sort();
		}
	}
	if (direction == "asc") {
		if (typeof arr[0][field] === "number") {
			return arr.sort((a, b) => a[field] - b[field]);
		} else {
			return arr.sort().reverse();
		}
	}
}

console.log(sortByField(products, "price", "asc"));

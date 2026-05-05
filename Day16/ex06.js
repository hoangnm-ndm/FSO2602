const arr = [1, 3, 4, 2, 100];

console.log(arr.sort((a, b) => a - b));
// * a - b: a < b => trả về số âm => a đứng trước b.
// console.log(arr.sort().reverse());
// console.log(arr);
// console.log(arr.toSorted());
console.log(arr);

// ! toSorted: trả về mảng mới đã được sắp xếp, không thay đổi mảng gốc.

console.log("anh" < "hoang");

const strArr = ["anh", "hoang", "hoa", "hieu"];
console.log(strArr.sort());

const products = [
	{ id: 1, name: "tomato", quantity: 2, price: 30 },
	{ id: 2, name: "tivi LG", quantity: 3, price: 2000 },
	{ id: 3, name: "Logitech mouse MX Anywhere 3", quantity: 1, price: 1200 },
];

// * sắp xếp mảng bất kỳ theo thuộc tính bất kỳ được truyền vào theo hướng ascending (asc) hoặc descending (desc).

// Typescript,
// * Kiểm tra giá trị của field để biết là number hay string.
function sortByField(arr, field, direction = "asc") {}

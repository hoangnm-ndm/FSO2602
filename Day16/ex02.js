/**
 * some, every, join, concat, flat, reverse, sort, reduce.
 *
 * ? some: phương thức some truyền vào 1 callback để kiểm tra xem có ít nhất 1 phần tử thoả mãn 1 logic nào đó không? (true/false)
 * ? every: phương thức some truyền vào 1 callback để kiểm tra xem có mọi phần tử thoả mãn 1 logic nào đó không? (true/false)
 */

const arr = [
	{ id: 1, name: "Nguyen Minh Hoang", gender: "male" },
	{ id: 2, name: "Nguyen Thi Nu", gender: "female" },
	{ id: 3, name: "Nguyen Minh Anh", gender: "female" },
];

// const result = arr.some((item, index) => item.gender === "female");

const result = arr.every((item, index) => item.gender === "female");

console.log(result);

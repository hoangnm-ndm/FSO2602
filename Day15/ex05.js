const students = ["Hoang", "Donal Trump", "Viet"];
// * array literal
// console.log(students);

// console.log(students.prototype);
// console.log(students.push("Obama", "Chau Tinh Tri", 1, 2, 3));
// console.log(students);

// console.log(Array.prototype.push);

// * Việc thêm phần tử vào đầu mảng không tốt về hiệu suất.
students[3] = students[2];
students[2] = students[1];
students[1] = students[0];
students[0] = "Obama";

delete students[3];

console.log(students);
console.log(students[3]);

/**
 * ! length của mảng đúng bằng index của phần tử cuối + 1. */

// * Mảng thưa.
console.log([1, 2, , ,].length);

for (let i = 0; i < students.length; i++) {
	console.log(students[i]);
}

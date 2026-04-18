/**
 * * Viết hàm in ra hình vuông độ dài mỗi cạnh là 5 đơn vị với ký tự "*" bằng for loop
 */

// *****
// *****
// *****
// *****
// *****

// function printSquare(n) {
// 	for (let i = 0; i < n; i++) {
// 		let row = "";
// 		for (let j = 0; j < n; j++) {
// 			row += "*";
// 		}
// 	}
// }

// printSquare(5);

let s = "";
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		s += "* ";
	}
	s += "\n";
}
console.log(s);

// * Sử dụng vòng lặp for in ra hình thoi với độ dài mỗi cạnh là n như minh hoạ bên dưới.
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

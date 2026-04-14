// console.log(name);
// var name = "Nam";
// hoisting:
// - nó diễn ra với cả hàm và biến với nhiều cách khai báo nhưng không phải tất cả đều được hoisting như nhau

// const infor = "Hoang";
// console.log(infor);
// infor = "Dat";
// console.log(infor);

// console.log(infor);
// let infor = "Hoang";
// console.log(infor);
// infor = "Dat";
// console.log(infor);

let name = "Hoang";

{
	// trong khu vuc block thi let va const chi co hieu luc trong block do
	let name = "Vinh";
	console.log("ben trong:", name);
	// block scope: chỉ có hiệu lực trong block đó
}
console.log("ben ngoai:", name);

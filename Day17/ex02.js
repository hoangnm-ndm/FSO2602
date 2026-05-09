let myString = "Hoang";

console.log(myString[1]);
console.log(myString[100]);
myString[0] = "l";

console.log(myString);

// * dữ liệu nguyên thuỷ được gọi là unmutation (không thể bị biến đổi/cập nhật 1 phần)

myString = "Dong";
console.log(myString); // hoan toan dung vi day la lay gia tri khac thay the/ghi de vao vung nho co truoc do.

console.log(myString.length);

for (let i = 0; i < myString.length; i++) {
	console.log(myString[i]);
}

// console.log(new String("DONG"));
for (const key in myString) {
	// console.log(typeof myString);
	console.log(myString[key]);
}

for (const iterator of myString) {
	// auto-boxing
	console.log(iterator);
}

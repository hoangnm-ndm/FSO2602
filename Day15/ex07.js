const products = ["iphone", "macbook", "ipad"];

// const result = products.slice(-3, -1);
//* Nếu chỉ số là âm, thì -1 tương ứng với phần tử cuối mảng.
//* start > end luôn được mảng rỗng.
// console.log(result);
console.log(products);

products.forEach((item, index) => {
	console.log(`${item}: ${index}`);
});

let content = "";

const result = products.forEach((item, index, array) => {
	content += item + "+";
	return "hello";
});

console.log(content);
console.log(result);

// * callback = hàm được gọi lại.
// * Là 1 hàm được truyền vào hàm khác dưới dạng tham số để khi cần thì gọi lại.

// * Cô lập được logic xử lý với từng phần tử của mảng.
function print(item) {
	console.log(item);
}

// * Đây là 1 hàm chuyên để lặp qua từng phần tử của mảng mà thôi.
function example(arr, callbackFn) {
	for (let i = 0; i < arr.length; i++) {
		callbackFn(arr[i]);
	}
}

example(["hoang", "Viet", "Duc An"], print);

// ? string > number > boolean;

console.log(10 + "10"); // string
console.log(10 + true); // number
console.log(typeof ("" + true));

// const Pi = 3.14
const Pi = new Number(3.14);
console.log(Number("Hoang"));
console.log(Number(true));

console.log(true + false); // number
console.log(String(true));

console.log("1" + 1);
console.log("1" - 1);

console.log(0.1 + 0.2);

// console.log("10" / 2);
// console.log("22" ** 2);
// * Với phép "+" thì JS ưu tiên sử dụng như là toán tử nối chuỗi.
// * Với các toán tử số học - JS sử dụng như là với number.

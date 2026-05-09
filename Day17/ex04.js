let string = "100HOANG";
let number = parseInt(string);
let number2 = parseFloat(string);
let number3 = Number(string);

console.log(number); // 10
console.log(number2); // 10
console.log(number3); // 10

let string1 = "true";
let boolean1 = Boolean(string1);
console.log(boolean1);

let string2 = " ";
let boolean2 = Boolean(string2);
console.log(boolean2);

let string3 = "Hoang";
let boolean3 = Boolean(string3);
console.log(boolean3);

let string4 = "";
let boolean4 = Boolean(string4);
console.log(boolean4);

console.log(10 + "Hoang");
console.log(10 + true);

console.log(false + "");
console.log(String(false));

let content = "    Toi dang hoc lap trinh JS, JS kha kho day    ";
// console.log(content.indexOf("JS"));
// console.log(content.indexOf("JavaScript"));
// console.log(content.lastIndexOf("JS")); // number

// console.log(content.includes("JS")); // boolean

console.log(content.replace("JS", "JavaScript"));

console.log(content.replaceAll("JS", "JavaScript"));

console.log(content.toUpperCase());
console.log(content.toLowerCase());
console.log(content.toLocaleLowerCase());

console.log(content.trim()); // trimEnd, trimStart
console.log(content);

console.log("==========");
let string1 = "Hello";
let string2 = "Hello";
let string3 = new String("Hello");
let string4 = "Apple";
console.log(string1 == string2); // true
console.log(string1 === string2); // true
console.log(string1 == string3); // true
console.log(string1 === string3); // false
console.log(string1 > string4); // true vì chữ H có mã Unicode lớn hơn chữ A

console.log("\tHoang");
console.log("\n\nHoang");
console.log('toi la mot "hacker"');

// * Prettier - Code Formatter

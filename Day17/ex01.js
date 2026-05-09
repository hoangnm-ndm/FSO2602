let a = 10;
let myString = "Hoang";

// * Cơ chế auto-boxing: Khi bạn cố gắng truy cập một thuộc tính hoặc phương thức trên một giá trị nguyên thủy (như số hoặc chuỗi), JavaScript sẽ tự động tạo ra một đối tượng tạm thời để thực hiện thao tác đó. Ví dụ, khi bạn gọi myString.length, JavaScript sẽ tạo ra một đối tượng String tạm thời từ myString để truy cập thuộc tính length.

let myString2 = new String("Hoang Nguyen Minh");
console.log(String.prototype);

console.log(myString2.split(" "));
console.log(myString);
console.log(typeof myString2);

const x = Number("Hoang"); // ko tạo ra 1 đối tượng, bản chất là hàm ép kiểu
const y = new Number("20"); // Tạo ra một đối tượng Number.

console.log(typeof x, typeof y);

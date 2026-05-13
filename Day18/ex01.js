console.log(Number(null));
console.log(String(null));
console.log(Boolean(null));

if (null === null) {
	console.log("true");
}

console.log(typeof null);

// null là giá trị nguyên thuỷ, nó không phải là 1 object, nó không có thuộc tính nào cả, nó cũng không phải là 1 hàm, nó chỉ đơn thuần là 1 giá trị nguyên thuỷ đại diện cho sự vắng mặt của giá trị nào đó.

// const vallueNull = new Null(null);
// sai -> Vì Null không có constructor nào cả, nó không phải là 1 hàm, nó chỉ đơn thuần là 1 giá trị nguyên thuỷ đại diện cho sự vắng mặt của giá trị nào đó.

console.log(null == undefined);
// so sánh tương đối, JS sẽ chuyển đổi null và undefined về cùng 1 giá trị để so sánh, và kết quả là true
console.log(null === undefined); //false

const obj = {
	name: "Hoang",
	age: 20,
	address: "",
};

console.log(obj.address);

console.log(obj.address ?? "Địa chỉ không có sẵn");
console.log(obj.address || "Địa chỉ không có sẵn"); // sai về mặt logic vì kể cả chuỗi rỗng thì vẫn có key và value ở trong obj.
// * Trong trường hợp này thì có vẻ như ?? và || cho ra kết quả giống nhau, nhưng thực tế thì chúng khác nhau, ?? sẽ trả về giá trị bên phải nếu giá trị bên trái là null hoặc undefined, còn || sẽ trả về giá trị bên phải nếu giá trị bên trái là falsy (false, 0, "", null, undefined, NaN)
console.log(obj.address && "Địa chỉ không có sẵn");

// let a = null || undefined ?? "default";  // Sẽ gây lỗi cú pháp

// let b = (null || undefined) ?? "default";  // Sẽ chạy mà không có lỗi

const obj2 = Object.create(null);
console.log(obj2);

// * String, Number, Boolean, Object...

// class Person {
//   constructor(name, gender) {
//     this.name = name;
//     this.gender = gender;
//   }
// }

function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

// * function constructor

const Huy = new Person("Nguyen Van Huy", "male"); // * instance = nguyên mẫu

Person.prototype.hello = function () {
	console.log(`xin chao, minh la ${this.name}`);
};

const Hoang = new Person("Hoang", "male");

Huy.hello();
Hoang.hello();

console.log(Hoang);

console.log(Object.entries(Hoang));
console.log(Hoang.valueOf());

const arr = [1, 2, 3];

arr.forEach((item) => console.log(item));

console.log(arr);

console.log(Object.prototype);
console.log(Array.prototype);
Array.prototype.summary = function () {
	// * sang tao ra phuong thuc cua minh
};

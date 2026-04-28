const person = {
	greet() {
		console.log("Hello!");
	},
};

const student = Object.create(person);
student.study = function () {
	console.log("Studying...");
};

student.greet(); // 'Hello!'
student.study(); // 'Studying...'

/**
 * create User
 * create admin: có tất cả các đặc tính của User, có thêm vài đặc tính riêng của admin.
 *
 */

const emptyObj = Object.create(null);
console.log(emptyObj); // {}

const nullObj = {};

console.log(nullObj);

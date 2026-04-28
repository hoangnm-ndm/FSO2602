const person = Object.create(Object.prototype, {
	name: {
		value: "Hoang",
		writable: true,
		enumerable: true,
		configurable: true,
	},
	age: { value: 30, writable: false, enumerable: true, configurable: true },
	password: {
		value: "123456",
		writable: true,
		enumerable: false,
		configurable: true,
	},
	email: {
		value: "hoang@gmail.com",
		writable: false,
		enumerable: true,
		configurable: false,
	},
});

console.log(person);

for (const key in person) {
	console.log(person[key]);
}

person.password = "111";
console.log(person);

console.log("hoangnm".length);

console.log([12, 3, 4, 5].length);
console.log([12, 3, 4, 5]);

function Person(name, address, age, major) {
	this.name = name;
	this.address = address;
	this.age = age;
	this.major = major;
}

console.log({ Object });
console.log({ Person });

const infor = {
	name: "Hoang",
	address: "Bac Ninh",
	age: 34,
};

console.log(infor);

console.log(Object.values(infor));
console.log(Object.keys(infor));
console.log(Object.entries(infor));

// console.log(Object.freeze(infor));
// console.log(Object.seal(infor));

delete infor.address;
// infor.address = undefined;

console.log(infor);

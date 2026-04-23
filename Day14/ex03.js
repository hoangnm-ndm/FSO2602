const infor = {
	name: "Hoang",
	age: 30,
	address: "bacninh",
	// * property
};
// * Khuyen dung cach 1.

console.log(infor);

const obj = new Object(null);
console.log(obj);

const myCart = {
	items: [
		{ id: 1, name: "tomato", quantity: 2, price: 10 },
		{ id: 2, name: "tivi", quantity: 4, price: 2000 },
	],
	count: function () {
		let countQuantity = 0;
		for (let i = 0; i < this.items.length; i++) {
			countQuantity += this.items[i].quantity;
		}
		return countQuantity;
	},
	showThis: function () {
		console.log(this);
	},
};

myCart.showThis();
console.log(myCart.count());

const infor2 = {
	name: "Nam",
	age: 18,
	address: "HaNoi",
	hello: function () {
		console.log(`xin chao, toi la ${this.name}`);
	},
};

infor2.hello();

function showProperty(obj, property) {
	console.log(obj[property]);
}

showProperty(infor2, "address");
infor2.isMarried = true;
infor2.gender = "male";

delete infor2.age;

console.log(infor2);

const person = { name: "John", age: 30, gender: "male" };
for (let key in person) {
	console.log(key, person[key]);
}

for (const key in infor2) {
	console.log(infor2[key]);
}

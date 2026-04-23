// * Object là reference data type

const obj1 = {
	a: 1,
	b: 2,
	c: {
		d: 3,
	},
};

const obj2 = { ...obj1 };
// * Shallow Copy

console.log(obj2 === obj1);

obj2.a = 10;

console.log(obj1, obj2);

obj2.c.d = 30;

console.log(obj1, obj2);

const deepCopy = structuredClone(obj1);
// * deep copy

delete deepCopy.c.d;

console.log(obj1, deepCopy);

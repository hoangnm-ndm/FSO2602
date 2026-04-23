const dog = {
	name: "john",
	age: 1,
	color: "yellow",
	address: "USA",
};

const otherInfor = {
	gender: "male",
};

console.log(dog.name);
console.log(dog.age);

const { name, age, ...rest } = dog;

console.log(name);
console.log(age);
console.log(rest);

const fullInfor = { ...dog, ...otherInfor };
// * spread - Sử dụng khi muốn trải các properties/values vào vùng chứa mới (object/array)

const inforCopy = { ...fullInfor };
// * Không được copy object/array bằng cách này.
inforCopy.name = "Mực";
console.log(fullInfor);
console.log(inforCopy);

let a = 10;

let b = a;

b = 20;

console.log(a, b);

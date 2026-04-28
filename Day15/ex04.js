const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget); // cũng bị thay đổi.
console.log(target); //  obj đích bị thay đổi.
console.log(source);

const infor = { name: "Hoang" };
const address = { address: "HN" };

const fullInfor = Object.assign({}, infor, address);
console.log(fullInfor);
// console.log(infor);
// console.log(infor === fullInfor);

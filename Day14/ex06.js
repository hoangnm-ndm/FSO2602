const x = { b: 10, c: 30, ny: "Huong" };
const y = { b: 10, c: 30 };

console.log(x === y);

const z = x;

console.log(z === x);

z.ny = "Huong dau chan";

console.log(x);
console.log(z);

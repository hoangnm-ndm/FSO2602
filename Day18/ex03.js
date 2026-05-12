const myDate = "2024-06-18T12:00:00Z";

console.log(typeof myDate);

console.log(Date.prototype);

console.log(Date.now());
console.log(typeof Date.now());

console.log(Date());
console.log(typeof Date());
const myDate2 = new Date("2024-06-18");
console.log(myDate2);
console.log(typeof myDate2);

// createdAt: 2024-06-18T12:00:00.000Z
// updatedAt: 2024-06-18T12:00:00.000Z
// const now = Date.now();

// console.log(typeof now);

// now.getDay();

const now = new Date();

console.log(typeof now);

console.log(now.getDay());

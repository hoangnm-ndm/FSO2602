// const date = new Date();
// console.log(date.getFullYear()); // Năm
// console.log(date.getMonth()); // Tháng (0 - 11)
// console.log(date.getDate()); // Ngày
// console.log(date.getDay()); // Thứ (0 - 6)
// console.log(date.getHours()); // Giờ
// console.log(date.getMinutes()); // Phút
// console.log(date.getSeconds()); // Giây
// console.log(date.getMilliseconds()); // Mili giây

// const date = new Date();
// console.log(date); // Ngày giờ hiện tại
// date.setFullYear(2021);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(0);
// date.setMinutes(0);
// date.setSeconds(0);
// date.setMilliseconds(0);
// console.log(date);

// console.log(Date.prototype); // undefined

const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
console.log(futureDate);
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const arr = [1, 2, 3];

console.log(arr);
console.log(arr.join(" "));
// join để nối mảng thành chuỗi.
// split để tách chuỗi thành mảng.

// concat để nối 2 mảng lại với nhau.

// const result = arr.concat(4, 5, 6, [[7, 8, 9]]);
const result = arr.concat(); // copy mảng, tạo ra mảng mới hoàn toàn khác với mảng gốc.

console.log(result);

console.log(arr);

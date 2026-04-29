// Trúc
// Input:


const n = +window.prompt("Nhập số n:");


/* 
giải sử n = 10;
lần 1: 
  i = 2;
  j = 1,14..;

Lần 2: 
    i =3 
    j= căn bậc 2 của 3

Lần 3:
 i = 4
 j =2
j*j ===i => là số chính phương

lần lượt đến 10 mới dừng lại.
*/
function printSquareNumber(n) {
    // Xử lý và in ra kết quả
    if (n < 2) {
        return
    }


    for (let i = 2; i <= n; i++) {
        let j = Math.sqrt(i)
        j = Math.floor(j)
        if (j * j === i) {
            console.log(i)
        }
    }
}
// Output:
printSquareNumber(n);


const users = [
    { fullname: 'Nguyen Van A', age: 20, address: 'LangSon' },
    { fullname: 'Nguyen Van B', age: 22, address: 'BacGiang' },
    { fullname: 'Nguyen Van C', age: 21, address: 'HaNoi' },
    { fullname: 'Nguyen Van D', age: 22, address: 'HaNoi' },
    { fullname: 'Nguyen Van E', age: 32, address: 'LangSon' },
];

// function groupBy(arr, key) {
//     const result = arr.reduce((acc, curr) => {
//         const condition = curr[key];
//         if (condition in acc) {
//             acc[condition].push(curr);
//         } else {
//             acc[condition] = [curr];
//         }

//         return acc;
//     }, {});
//     return result;
// }

const result = Object.groupBy(users, ({ address }) => address);

// Output:
// const result1 = groupBy(users, 'address'); // nhóm theo địa chỉ

console.log(result);

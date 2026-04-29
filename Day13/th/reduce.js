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

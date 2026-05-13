//Phan Minh Truc

// const categories = [
//     { id: 1, name: "Chuyên mục 1", parent: 0 },
//     { id: 2, name: "Chuyên mục 2", parent: 0 },
//     { id: 3, name: "Chuyên mục 3", parent: 0 },
//     { id: 4, name: "Chuyên mục 2.1", parent: 2 },
//     { id: 5, name: "Chuyên mục 2.2", parent: 2 },
//     { id: 6, name: "Chuyên mục 2.3", parent: 2 },
//     { id: 7, name: "Chuyên mục 3.1", parent: 3 },
//     { id: 8, name: "Chuyên mục 3.2", parent: 3 },
//     { id: 9, name: "Chuyên mục 3.3", parent: 3 },
//     { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
//     { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
// ];

// const convertNested = (categories = []) => {
//     const map = {};
//     const result = [];
//     categories.forEach((ele) => {
//         map[ele.id] = { ...ele, children: [] }
//     })
//     categories.forEach((ele) => {
//         if (ele.parent === 0) {
//             result.push(map[ele.id])
//         } else {
//             console.log(ele.parent)
//             console.log(ele.id)
//             map[ele.parent].children.push(map[ele.id])
//         }
//     })
//     return result

// }
const categories = [
    { id: 1, name: "Chuyên mục 1", parent: 0 },
    { id: 2, name: "Chuyên mục 2", parent: 0 },
    { id: 3, name: "Chuyên mục 3", parent: 0 },
    { id: 4, name: "Chuyên mục 2.1", parent: 2 },
    { id: 5, name: "Chuyên mục 2.2", parent: 2 },
    { id: 6, name: "Chuyên mục 2.3", parent: 2 },
    { id: 7, name: "Chuyên mục 3.1", parent: 3 },
    { id: 8, name: "Chuyên mục 3.2", parent: 3 },
    { id: 9, name: "Chuyên mục 3.3", parent: 3 },
    { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
    { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

function convertNested(arr, parent = 0) {
  return arr
    .filter((item) => item.parent === parent)
    .map((item) => {
      // Tìm các phần tử con
      const children = convertNested(arr, item.id);

      // Tạo object mới
      const result = {
        id: item.id,
        name: item.name,
      };

      // Nếu có children thì thêm vào
      if (children.length > 0) {
        result.children = children;
      }

      return result;
    });
}




console.log(convertNested(categories))
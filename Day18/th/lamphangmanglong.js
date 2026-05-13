
// Lê Minh Hiếu:
const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          {
            id: 3,
            name: "Apple",
          },
          {
            id: 4,
            name: "Dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    children: [
      {
        id: 7,
        name: "Fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
          },
          {
            id: 9,
            name: "Mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];


function flattenCategories(arr, parentId = 0) {
  const result = [];

  arr.forEach(item => {
    const flatItem = {
      id: item.id,
      name: item.name,
      parentId: parentId
    }
    result.push(flatItem);
    if (item.children) {
      const chidrenInner = flattenCategories(item.children, item.id);
      result.push(...chidrenInner);
    }
  });

  return result;
}


const result = flattenCategories(categories);
console.log(result);




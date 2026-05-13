function flattenCategories(arr, parentId = 0) {
  return arr.reduce((acc, item) => {
    acc.push({
      id: item.id,
      name: item.name,
      parentId,
    });

    if (item.children) {
      acc.push(
        ...flattenCategories(item.children, item.id)
      );
    }

    return acc;
  }, []);
}

// Test
const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          { id: 3, name: "Apple" },
          { id: 4, name: "Dell" },
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
          { id: 8, name: "Thrillers" },
          { id: 9, name: "Mystery" },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];

console.log(flattenCategories(categories));
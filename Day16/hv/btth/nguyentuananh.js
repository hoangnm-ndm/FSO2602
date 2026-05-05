const animals = ["ant", "bee", "cat", "dog", "bee", "mongoose", "elephant"];

/**
 * * Dùng reduce để đếm số lần xuất hiện các phần tử trong mảng.
 * 1 điểm
 */
let res1 = animals.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 0;
  }
  acc[cur]++;

  return acc;
}, {});
console.log(res1);

const students = [
  { id: 1, name: "Nguyen Minh Hoang", contry: "Vietnam" },
  { id: 2, name: "Nguyen Minh Chau", contry: "Vietnam" },
  { id: 3, name: "John Doe", contry: "USA" },
  { id: 4, name: "Dara", contry: "Campuchia" },
];

// * Dùng reduce để nhóm các sinh viên trong lớp theo các quốc gia khác nhau.
// * 2 điểm
let ress = students.reduce((acc, cur) => {
  if (!acc[cur.contry]) {
    acc[cur.contry] = [];
  }
  acc[cur.contry].push(cur);
  return acc;
}, {});

console.log(ress);
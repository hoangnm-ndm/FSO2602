const animals = ["ant", "bee", "cat", "dog", "bee", "mongoose", "elephant"];

/**
 * * Dùng reduce để đếm số lần xuất hiện các phần tử trong mảng.
 * 1 điểm
 */

const countAnimals = function (arr) {
  return arr.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
};

console.log(countAnimals(animals));

const students = [
  { id: 1, name: "Nguyen Minh Hoang", contry: "Vietnam" },
  { id: 2, name: "Nguyen Minh Chau", contry: "Vietnam" },
  { id: 3, name: "John Doe", contry: "USA" },
  { id: 4, name: "Dara", contry: "Campuchia" },
];

// * Dùng reduce để nhóm các sinh viên trong lớp theo các quốc gia khác nhau.
// * 2 điểm

const result = {
  Vietnam: [
    { id: 1, name: "Nguyen Minh Hoang", contry: "Vietnam" },
    { id: 2, name: "Nguyen Minh Chau", contry: "Vietnam" },
  ],
  USA: [{ id: 3, name: "John Doe", contry: "USA" }],
  Campuchia: [{ id: 4, name: "Dara", contry: "Campuchia" }],
};

const groupStudent = function (arr) {
  return arr.reduce((acc, cur) => {
    if(acc[cur.contry]){
      acc[cur.contry].push(cur)
    }else{
      acc[cur.contry] = [cur]
    }

    return acc;
  }, {});
};


console.log(groupStudent(students));

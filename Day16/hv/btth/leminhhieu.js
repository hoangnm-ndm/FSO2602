
const students = [
  { id: 1, name: "Nguyen Minh Hoang", contry: "Vietnam" },
  { id: 2, name: "Nguyen Minh Chau", contry: "Vietnam" },
  { id: 3, name: "John Doe", contry: "USA" },
  { id: 4, name: "Dara", contry: "Campuchia" },
];

const animals = ["ant", "bee", "cat", "dog", "bee", "mongoose", "elephant"];

const countAnimals = animals.reduce((acc, animal) => {
  acc[animal] = (acc[animal] || 0) + 1;
  return acc;
}, {});

console.log(countAnimals);

const groupStudents = students.reduce((acc, student) => {
  const country = student.contry;

  if (!acc[country]) {
    acc[country] = [];
  }

  acc[country].push(student);

  return acc;
}, {});

console.log(groupStudents);
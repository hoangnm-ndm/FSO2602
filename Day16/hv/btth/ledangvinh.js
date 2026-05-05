console.log("Bai 1 : ");
const animals = [
	"ant",
	"bee",
	"cat",
	"dog",
	"bee",
	"mongoose",
	"mongoose",
	"elephant",
];

const result = animals.reduce((acc, cur) => {
	acc[cur] = (acc[cur] || 0) + 1;
	return acc;
}, {});

console.log(result);

console.log("Bai 2 : ");
const students = [
	{ id: 1, name: "Nguyen Minh Hoang", contry: "Vietnam" },
	{ id: 2, name: "Nguyen Minh Chau", contry: "Vietnam" },
	{ id: 3, name: "John Doe", contry: "USA" },
	{ id: 3, name: "John Doe", contry: "USA" },
	{ id: 2, name: "Nguyen Minh Chau", contry: "Vietnam" },
	{ id: 4, name: "Dara", contry: "Campuchia" },
	{ id: 4, name: "Dara", contry: "Campuchia" },
];

// * Dùng reduce để nhóm các sinh viên trong lớp theo các quốc gia khác nhau.
// * 2 điểm

const result2 = students.reduce((acc, cur) => {
	if (!acc[cur.contry]) {
		acc[cur.contry] = [];
	}
	acc[cur.contry].push(cur);

	return acc;
}, {});

console.log(result2);

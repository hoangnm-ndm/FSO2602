const animals = ["ant", "bee", "cat", "dog", "bee", "mongoose", "elephant"];
function countAnimals(arr) {
	const result = arr.reduce((acc, curr) => {
		if (curr in acc) {
			acc[curr]++;
		} else {
			acc[curr] = 1;
		}

		return acc;
	}, {});

	return result;
}

// Output:
console.log("bai 1: ", countAnimals(animals));

const students = [
	{ id: 1, name: "Nguyen Minh Hoang", contry: "Vietnam" },
	{ id: 2, name: "Nguyen Minh Chau", contry: "Vietnam" },
	{ id: 3, name: "John Doe", contry: "USA" },
	{ id: 4, name: "Dara", contry: "Campuchia" },
];

const groupStudentByCountry = (students) =>
	students.reduce((acc, curr) => {
		const country = curr.contry;

		if (country in acc) {
			acc[country].push(curr);
		} else {
			acc[country] = [curr];
		}

		return acc;
	}, {});

console.log("bai 2: ", groupStudentByCountry(students));

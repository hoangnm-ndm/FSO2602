const students = ["Hoang", "Duy", "Hoa", "Truong", "Vu", "Viet"];

// * index của mảng tính từ 0,

function randomStudent(arr, ignoreIndex) {
	if (ignoreIndex > arr.length || ignoreIndex < 0) {
		return false;
	}

	let newArr = arr.slice(ignoreIndex);

	let randomIndex = Math.floor(Math.random() * newArr.length);

	return newArr[randomIndex];
}

console.log(randomStudent(students, 1));

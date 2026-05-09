const arr = ["Hoang", "huy", "Duc", "Phuc", "Hoa Mizy"];
const randomStudent = (ignoreIndex) => {
	if (ignoreIndex >= arr.length || ignoreIndex <= 0) {
		return false;
	}
	const newArr = arr.slice(ignoreIndex - 1);
	const k = Math.floor(Math.random() * newArr.length);
	return newArr[k];
};
console.log(randomStudent(0));

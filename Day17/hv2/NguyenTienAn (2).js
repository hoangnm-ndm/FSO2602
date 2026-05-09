const arr = ["Hoang", "huy", "Duc", "Phuc", "Hoa Mizy"];

function randomStudent(arr, ignoreIndex) {
	// * Hãy gọi ngẫu nhiên 1 bạn trong danh sách arr (students) cho trước tuy nhiên bỏ qua những bạn có index <= ignoreIndex.
	// * trong trường hợp ignoreIndex >= length thi return false
	if (ignoreIndex >= arr.length) return false;

	const sliceArr = arr.slice(ignoreIndex);
	const randomIndex = Math.floor(Math.random() * sliceArr.length);
	return sliceArr[randomIndex];
}

console.log(randomStudent(arr, 1));

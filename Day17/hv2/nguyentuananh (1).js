const arr = ["Hoang", "huy", "Duc", "Phuc", "Hoa Mizy"];

function randomStudent(arr, ignoreIndex) {
	// * Hãy gọi ngẫu nhiên 1 bạn trong danh sách arr (students) cho trước tuy nhiên bỏ qua những bạn có index <= ignoreIndex.
	// * trong trường hợp ignoreIndex >= length thi return false
	if (ignoreIndex >= arr.length) return false;

	let randIndex =
		ignoreIndex + Math.ceil(Math.random() * (arr.length - ignoreIndex - 1));

	// 0 - > arr.length - 1
	// ignoreIndex + 1 -> (arr.length - 1) + 1

	return arr[randIndex];
}

console.log(randomStudent(arr, 0));

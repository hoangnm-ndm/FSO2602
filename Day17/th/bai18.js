const listCharacters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Input:
function generateId(length, prefix = "") {
	// Xử lý và return về kết quả
	if (!Number.isInteger(length) || length <= 0 || length >= 100) {
		return "Length không hợp lệ";
	}

	if (typeof prefix !=='string' || prefix.length>=10) {
		return "prefix không hợp lệ";
	}

	for (let i = 0; i < length; i++) {
		const random = Math.floor(Math.random() * listCharacters.length);
		prefix += listCharacters[random];
	}
	return prefix;
}

// Output:
console.log(generateId(8, "user"));
console.log(generateId(4, "aaabbbccd"));
console.log(generateId(4,));

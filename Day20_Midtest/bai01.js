const listCharacters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// * Math.random() => trả về 1 số ngẫu nhiên từ 0 đến 1 (0 <= x < 1)
// * Math.random().toString(36) => chuyển đổi số ngẫu nhiên thành chuỗi ký tự (gồm chữ cái và số)
function generatorId(length, prefix = "") {
	console.log(Number.isInteger(length));
	if (!Number.isInteger(length) || length <= 0 || length >= 100) {
		return null;
	}

	let randomID = prefix;
	for (let i = 0; i < length; i++) {
		randomID +=
			listCharacters[Math.floor(Math.random() * listCharacters.length)];
	}
	return randomID;
}

console.log(generatorId(8, "user")); // Output: "user5a3Fb2DF"
console.log(generatorId(4, "product - ")); // Output: "product - 3a2f"
console.log(generatorId(10)); // Output: "5a3Fb2DFc1"
console.log(generatorId(99, "cf"));

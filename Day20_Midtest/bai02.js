function highlightKeyword(content, keyword) {
	const regex = new RegExp(keyword, "gi");

	if (!regex.test(content)) return content;
	if (typeof content !== "string" || typeof keyword !== "string")
		return "Invalid";

	return content.replace(regex, (match) => `<strong>${match}</strong>`);
}

// Test case:
console.log(
	highlightKeyword(
		"Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!",
		"javascript",
	),
);

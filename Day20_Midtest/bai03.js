const categories = [
	{ id: 1, name: "Chuyên mục 1" },
	{
		id: 2,
		name: "Chuyên mục 2",
		children: [
			{ id: 4, name: "Chuyên mục 2.1" },
			{
				id: 5,
				name: "Chuyên mục 2.2",
				children: [
					{ id: 10, name: "Chuyên mục 2.2.1" },
					{ id: 11, name: "Chuyên mục 2.2.2" },
					{ id: 12, name: "Chuyên mục 2.2.3" },
					{ id: 14, name: "Chuyên mục 2.2.4" },
				],
			},
			{ id: 6, name: "Chuyên mục 2.3" },
			{ id: 19, name: "Chuyên mục 2.4" },
		],
	},
	{
		id: 3,
		name: "Chuyên mục 3",
		children: [
			{ id: 7, name: "Chuyên mục 3.1" },
			{ id: 8, name: "Chuyên mục 3.2" },
			{ id: 9, name: "Chuyên mục 3.3" },
		],
	},
	{ id: 100, name: "Chuyên mục 100" },
];

function renderCategories(categories, level = 0) {
	if (!Array.isArray(categories)) return "invalid";
	categories.forEach((cate) => {
		// Cach 1:
		const prefix = "|--".repeat(level);
		console.log(prefix);

		// Cach 2:
		// let prefix = ""
		// for(let i = 0; i < level; i++) {
		//   prefix += "|--"
		// }
		// "|--|--"
		content += `
      <option value="${cate.id}">${prefix}${cate.name}</option>
    `;

		if (cate.children) {
			renderCategories(cate.children, level + 1);
		}
	});
}

let content = `<select>`;
renderCategories(categories);
content += `</select>`;

console.log(content);
document.body.innerHTML = content;

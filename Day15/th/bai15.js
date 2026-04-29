const categories = [
	{ id: 1, name: "Chuyên mục 1", parent: 0 },
	{ id: 2, name: "Chuyên mục 2", parent: 0 },
	{ id: 3, name: "Chuyên mục 3", parent: 0 },
	{ id: 4, name: "Chuyên mục 2.1", parent: 2 },
	{ id: 5, name: "Chuyên mục 2.2", parent: 2 },
	{ id: 6, name: "Chuyên mục 2.3", parent: 2 },
	{ id: 7, name: "Chuyên mục 3.1", parent: 3 },
	{ id: 8, name: "Chuyên mục 3.2", parent: 3 },
	{ id: 9, name: "Chuyên mục 3.3", parent: 3 },
	{ id: 13, name: "Chuyên mục 3.1.1", parent: 7 },
    { id: 16, name: "Chuyên mục 3.1.1.1", parent: 13 },
	{ id: 14, name: "Chuyên mục 3.1.2", parent: 7 },
	{ id: 15, name: "Chuyên mục 3.1.3", parent: 7 },
	{ id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
	{ id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

// giải

const convertNested = (categories = []) => {
	const map = {};
	const result = [];
	categories.forEach((ele) => {
		map[ele.id] = { ...ele, children: [] };
	});
	categories.forEach((ele) => {
		if (ele.parent === 0) {
			result.push(map[ele.id]);
		} else {
			map[ele.parent].children.push(map[ele.id]);
		}
	});
	return result;
};

function convertNested2(arr) {
  const map = {};

  // gom nhóm theo parent
  for (const item of arr) {
    if (!map[item.parent]) {
      map[item.parent] = [];
    }
    map[item.parent].push(item);
  }

  function build(parent = 0) {
    const children = map[parent] || [];

    return children.map(item => {
      const nodeChildren = build(item.id);

      if (nodeChildren.length) {
        return { ...item, children: nodeChildren };
      }

      const { parent, ...rest } = item;
      return rest;
    });
  }

  return build(0);
}
// Input:
const categories = [
	{
		id: 1,
		name: "Electronics",
		children: [
			{
				id: 2,
				name: "Laptops",
				children: [
					{
						id: 3,
						name: "Apple",
					},
					{
						id: 4,
						name: "Dell",
					},
				],
			},
			{
				id: 5,
				name: "Headphones",
			},
		],
	},
	{
		id: 6,
		name: "Books",
		children: [
			{
				id: 7,
				name: "Fiction",
				children: [
					{
						id: 8,
						name: "Thrillers",
					},
					{
						id: 9,
						name: "Mystery",
					},
				],
			},
			{
				id: 10,
				name: "Non-Fiction",
			},
		],
	},
];



const flattenCategories = (array, parentId=0)=>{

    const result = array.reduce((acc, item)=>{
        acc.push({
            id: item.id,
            name: item.name,
            parentId
        })

        if(item.children){
           acc.push(...flattenCategories(item.children,item.id)) 
        }

        return acc
    }, [])

    return result
}

const result = flattenCategories(categories)

console.log('result', result)
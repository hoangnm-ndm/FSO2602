const animal = ["ant", "bee", "cat", "bee"]
const count = animal.reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {})
console.log(count)

const students = [
    { id: 1, name: "Nguyen Minh Hoang", contry: "Vietnam" },
    { id: 2, name: "Nguyen Minh Chau", contry: "Vietnam" },
    { id: 3, name: "John Doe", contry: "USA" },
    { id: 4, name: "Dara", contry: "Campuchia" },
];

const result = students.reduce((acc, cur) => {
    if (!acc[cur.contry]) {
        acc[cur.contry] = []
    }
    acc[cur.contry].push(cur)
    return acc
}, {})
console.log(result)
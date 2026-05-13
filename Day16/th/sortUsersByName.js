// Trần Đức An

function sortUsersByName(users) {
  // Xử lý và in ra kết quả
  return [...users].sort((a, b) => {
    const aName = a.fullName.split(" ");
    const bName = b.fullName.split(" ");

    const aFristName = aName[aName.length - 1];
    const bFristName = bName[bName.length - 1];
    if (aFristName === bFristName) {
      return b.fullName.localeCompare(a.fullName);
    }

    return aFristNamebFristName.localeCompare(bFristName);
  });
}

// Input:
const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Nguyễn Đu Hoàng" },
  { fullName: "Nguyễn Â Hoàng" },
  { fullName: "Nguyễn A Hoàng" },
  { fullName: "Nguyễn Ă Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
];
console.log(sortUsersByName(users));;

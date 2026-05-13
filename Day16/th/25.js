// Nguyễn Tiến Anh

const arr = ['apple', 'banana', 'cherry', 'date'];
const keyword = 'A';

const filterStringsByKeyword = (arr, keyword) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(keyword.toLowerCase())) {
            result.push(arr[i]);
        }
    }

    return result;
};

const filterStringsByKeyword2 = (arr, keyword) => {
    return arr.filter(item=>{
        return item.toLowerCase().includes(keyword.toLowerCase())
    })
    return result;
};

const filterStringsByKeyword3 = (arr, keyword) => {
    const regex = new RegExp(keyword, 'i');
     return arr.filter(str => regex.test(str));
};

// tìm kiếm theo độ match

const result = filterStringsByKeyword3(arr, keyword);
console.log(result); // ["banana"]

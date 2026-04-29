// Đức An
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
  null,
  undefined,
  null,
  NaN,
  NaN,
];

// array.reduce((accumulator, currentValue) => {
//   // xử lý
//   return accumulator;
// }, initialValue);


const removeDuplicate = function (arr) {
  return arr.reduce((result, value) => {
    if (!result.includes(value)) {
      result.push(value);
    }

    return result;
  }, []);
};

const result = removeDuplicate(fruits);
console.log(result); // ["apple", "banana", "kiwi", "orange"]

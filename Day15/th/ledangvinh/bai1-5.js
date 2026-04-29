console.log("Bai 5 : ");
function insertNumber(arr, num) {
  let cleanArr = arr.filter((item) => typeof item === "number" && !isNaN(item));
  if (typeof num === "number" && !isNaN(num)) {
    cleanArr.push(num);
  }
  cleanArr.sort((a, b) => a - b);
  console.log(cleanArr);
}

insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]

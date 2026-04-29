console.log("Bai 2 : ");

//Thực hiện viết hàm filterEvenNumbers(arr) để lọc lấy các số chẵn từ mảng arr.



function filterEvenNumbers(arr) {
  const result = [...arr] // toán tử spread ...
  // splice sử dụng để thêm, sửa, xóa Mảng
  let index=0;
  for(let i=0;i<arr.length;i++){
    if(arr[index]%2!==0 || typeof arr[index] !=='number'){
      // nế a[i] không phải number hoặc là không phải số chẵn
      // => xóa array tại i
      result.splice(i,1)
      index--
    }

    index++
  }
  console.log(result);
}

filterEvenNumbers([ 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
filterEvenNumbers([1, 3, 5, 7]); // Output: []
filterEvenNumbers([]); // Output: []
filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]

// splice
let a = [ 2, 3, 4, 5, 6]
// array.splice(start, deleteCount, item1, item2, ...)

a.splice(1,1,9)

console.log('a', a)
// Input:
// Đức An
const arrayString = ["name:John", "age:30", "city:NY",  "age:31"];

function convertArrayToObject(array) {
  // Logic bài toán và trả về kết quả
  // return array.reduce((obj, info) => {
  //   [key, value] = info.split(":");
  //   obj[key] = value
  //   return obj;
  // }, {});

  let obj={}
  array.forEach(element => {
     const [key, value] = element.split(":"); 
     obj[key]=value
  });
  return obj
}





// Output:
console.log(convertArrayToObject(arrayString));; // { name: 'John', age: '30', city: 'NY' }

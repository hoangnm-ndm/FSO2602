/**
 * Hàm lọc các giá trị falsy
 * @param {Array} arr - Mảng cần được lọc
 */
// Nguyen Ha Thanh
Array.prototype.forEach2 = function (callback) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this) {
      callback(this[i], i, this);
    }
  }
};

const array = [1,2,,3,5,6]

array.forEach2((item,index,array)=>{
  console.log(`item*2 in index ${index} is`, item*2)
})
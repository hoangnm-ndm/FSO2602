Array.prototype.forEach2 = function (callback) {
  const result = new Array(this.length);
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = callback(this[i], i, this);
    }
  }

  return result;
};

// Sample usage
const arr = [1, 2, 3, 4, 5, , , 10, 20, 0];

arr.forEach2((value, index, arr) => { 
  console.log('-----------------------')

  console.log(`Value at index ${index}: ${value}`);
  console.log('arr.length', arr.length)
});

// Output:
// Value at index 0: 1
// Value at index 1: 2
// Value at index 2: 3
// Value at index 3: 4
// Value at index 4: 5

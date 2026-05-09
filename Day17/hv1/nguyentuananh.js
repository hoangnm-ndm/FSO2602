function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseString1(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

const str = "Hello";
console.log(reverseString(str));
console.log(reverseString1(str));

function findLongestWord(str) {
  let arr = str.split(' ');
  let maxL = arr[0].length;
  let maxI = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length <= maxL) continue;
    maxI = i;
  }
  return arr[maxI];
}

console.log(findLongestWord('Tôi thích lập trình JavaScript')) // Kết quả: "JavaScript"

function extractAccount(str) {
  return str.split('@')[0];
}
console.log(extractAccount('hoangnm@codefarm.edu.vn')) // Kết quả: "hoangnm"

function strongPassword(str) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(str);
}

console.log(strongPassword('12345678')) // Kết quả: false
console.log(strongPassword('12345678a')) // Kết quả: false
console.log(strongPassword('12345678A')) // Kết quả: false
console.log(strongPassword('12345678aA')) // Kết quả: true
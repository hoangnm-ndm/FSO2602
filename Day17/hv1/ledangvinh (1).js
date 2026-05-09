console.log("Bai 1 : ");
console.log("\tCach 1 : Su dung kien thuc ve mang");

function reverseString(str) {
  let arr = str.split("");

  let result = arr.reverse();
  return result.join("");
}

console.log(reverseString("Xin chào")); // Kết quả: "oàhc niX"

console.log("\tCach 2 : Su dung vong lap");

function reverseString2(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString2("Xin chào")); // Kết quả: "oàhc niX"

console.log("Bai 2 :");

function findLongestWord(str) {
  let arr = str.split(" ");

  let longest = arr[0];
  for (const i in arr) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}

console.log(findLongestWord("Tôi thích lập trình thích JavaScript")); // Kết quả: "JavaScript"

console.log("Bai 3 :");

function extractAccount(email) {
  let result = [];
  for (let i = 0; i < email.indexOf("@"); i++) {
    result[i] = email[i];
  }

  return result.join("");
}

console.log(extractAccount("hoangnm@codefarm.edu.vn")); // Kết quả: "hoangnm"

console.log("Bai 4 : ");

function strongPassword(password) {
  if (password.length < 8) {
    return false;
  }

  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    }

    if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    }

    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }

  return hasUpperCase && hasLowerCase && hasNumber;
}

console.log(strongPassword("12345678")); // Kết quả: false
console.log(strongPassword("12345678a")); // Kết quả: false
console.log(strongPassword("12345678A")); // Kết quả: false
console.log(strongPassword("12345678aA")); // Kết quả: true

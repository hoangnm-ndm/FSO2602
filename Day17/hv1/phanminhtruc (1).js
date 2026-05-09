// Bài1
const reverseStringByArray = (str) => {
	return str.split("").reverse().join("");
};
console.log(reverseStringByArray("xin chào"));
const reverseStringByLoop = (str) => {
	let newStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
};
console.log(reverseStringByLoop("xin chào"));

// bài 2
const findLongestWord = (str) => {
	const coverArray = str.split(" ");
	const longest = coverArray.reduce((acc, cur) => {
		return cur.length > acc.length ? cur : acc;
	}, "");
	return longest;
};
console.log(findLongestWord("Tôi thích lập trình JavaScript"));

// bài 3
const extractAccount = (str) => {
	return str.slice(0, str.indexOf("@"));
};
console.log(extractAccount("hoangnm@codefarm.edu.vn"));
console.log(extractAccount("phantruc313@gmail.com"));

// bài 4
const strongPassword = (str) => {
	if (str.length < 8) {
		return false;
	}
	if (!/[A-Z]/.test(str)) {
		return false;
	}
	if (!/[a-z]/.test(str)) {
		return false;
	}
	if (!/[0-9]/.test(str)) {
		return false;
	}
	return true;
};
console.log(strongPassword("12345678"));
console.log(strongPassword("12345678a"));
console.log(strongPassword("12345678A"));
console.log(strongPassword("12345678aA"));

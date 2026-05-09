const reverseString1 = (str) => {
    return str.split('').reverse().join('');
};

console.log(reverseString1('Xin chào')) // Kết quả: "oàhc niX"

const reverseString2 = (str) => {
    let strToArr = str.split('');
    let rightPointer = str.length - 1;
    let leftPointer = 0;

    while (leftPointer < rightPointer) {
        let temp = strToArr[rightPointer];
        strToArr[rightPointer] = strToArr[leftPointer];
        strToArr[leftPointer] = temp;

        leftPointer++;
        rightPointer--;
    }

    return strToArr.join('');
};

console.log('------------------------------------')

console.log(reverseString2('Xin chào')) // Kết quả: "oàhc niX"

const findLongestWord = (str) => {
    const strToArr = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < strToArr.length; i++) {
        if (strToArr[i].length > longestWord.length) {
            longestWord = strToArr[i];
        }
    }

    return longestWord;
};

console.log('------------------------------------')

console.log(findLongestWord('Tôi thích lập trình JavaScript')) // Kết quả: "JavaScript"

const extractAccount = (str) => {
    return str.split('@')[0];
};

console.log('------------------------------------')

console.log(extractAccount('hoangnm@codefarm.edu.vn')) // Kết quả: "hoangnm"

const strongPassword = (str) => {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    let min8Length = str.length >= 8;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (!hasNumber && !Number.isNaN(+char)) {
            hasNumber = true;
        }

        if (
            !hasLowerCase &&
            char === char.toLowerCase() &&
            char !== char.toUpperCase()
        ) {
            hasLowerCase = true;
        }

        if (
            !hasUpperCase &&
            char === char.toUpperCase() &&
            char !== char.toLowerCase()
        ) {
            hasUpperCase = true;
        }
    }

    return hasUpperCase && hasLowerCase && hasNumber && min8Length;
};

console.log('------------------------------------')

console.log(strongPassword('12345678')); // false
console.log(strongPassword('12345678a')); // false
console.log(strongPassword('12345678A')); // false
console.log(strongPassword('12345678aA')); // true

const arr = [1, 2, 3];
console.log(arr.reverse());

/**
 * * kiểm tra mảng, chuối đối xứng.
 * * đảo ngược để lấy được sự sắp xếp ngược lại của mảng.
 */

/**
 * ? Viết hàm kiểm tra 1 chuỗi bất kỳ có phải chuỗi đối xứng không:
 * Input: HMH -> Output: true
 * Input: HMN -> Output: false
 * Gợi ý: sử dụng split để chuyển chuỗi về mảng...
 */

// * Nếu không dùng phương thức thì em có thể dùng vòng lặp từ i = 0 đến < length/2,
// * arr[i] === arr[length - 1 - i] -> nếu có 1 cặp nào đó không bằng nhau thì return false, ngược lại return true.

const isSymmetric = (str) => str === str.split("").reverse().join("");

console.log(isSymmetric("HMH"));
console.log(isSymmetric("HMN"));
console.log(isSymmetric("abcba"));

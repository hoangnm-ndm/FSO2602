// let a = 10;
// console.log(a.length);

console.log(Number.MAX_VALUE);
// 1.7976931348623157e308;
console.log(Number.MIN_VALUE);
-324;
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991 + 2);

// BigInt = Số nguyên lớn.
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);
// NaN;

Number.isFinite(10); // true
Number.isInteger(10); // true
Number.isNaN(10); // false
Number.parseFloat("10.5"); // 10.5
Number.parseInt("10.5"); // 10

console.log(Number.prototype.toFixed(2)); // "10.00"
console.log(Number.prototype.toString(10)); // "10"
console.log(Number.prototype.valueOf()); // 10
console.log(Number.prototype.toExponential()); // "1e+1"
console.log(Number.prototype.toPrecision(2)); // "10"
console.log(Number.prototype.toLocaleString()); // "10"

console.log(Number.EPSILON);

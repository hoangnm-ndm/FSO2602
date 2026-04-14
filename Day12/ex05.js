console.log(1 < 2 && 2 < 3);
const name = "Hoang";
const address = "BacGiang";

console.log(name === "Hoang" && address === "BacGiang");

console.log(0 && null && undefined && -0 && "2026");
// true
// false

console.log("Hoang" && "Vinh" && null && "Dat");

/**
 * * Các giá trị sau khi bị ép sang boolean sẽ nhận kết quả false (falsy values):
 * 1. 0, -0
 * 2. ""
 * 3. NaN
 * 4. undefined
 * 5. null
 * 6. false
 */

// console.log(("Hoang" && "Toan") || 0 || "" || "CodeFarm");

console.log("Toan" || "CodeFarm");
console.log("Toan" && "CodeFarm");

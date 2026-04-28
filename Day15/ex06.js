/**
 * * unshift, shift, push, pop
 */

const teamA = ["Duong Tang"];

console.log(teamA.push("Ngo Khong"));

// console.log(teamA);
// console.log(teamA.unshift("Bo tat"));
// console.log(teamA);

teamA.push("Bat Gioi", "Sa Tang");

// console.log(teamA);
// console.log(teamA.pop());

// * shift: xoa phan tu o dau mang

// console.log(teamA);

console.log(teamA);

console.log(teamA.splice(1, 2, "Con Ngua"));

/**
 * * Splice là một phương thức rất mạnh mẽ và đa dạng, tuy nhiên không nên lạm dụng. Có thể xoá, thêm, thay thế.
 * * Splice trả về mảng các phần tử bị xoá
 * * Splice thay đổi mảng gốc.
 */

console.log(teamA);

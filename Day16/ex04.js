const deepArr = [1, 2, 3, [4, 5, [6, 7, [8, [9]]]]];

/**
 * trước đây không có flat thì phải dùng đệ quy để làm phẳng mảng.
 */

console.log(deepArr.flat(Infinity));
// default là 1, nếu muốn làm phẳng nhiều hơn thì truyền vào số nguyên dương tương ứng với độ sâu của mảng cần làm phẳng.

// * Tìm xem mảng arr có ông Hoàng không?
// - Nếu không làm phẳng thì dùng nhiều vòng lặp lồng nhau, dùng đệ quy -> giảm hiệu suất, phức tạp, dễ sai...

// Input:
function swapNumber(a, b) {
	// Xử lý và in ra kết quả
	a = b - a;
	b = b - a;
	a = a + b;
	console.log(a, b);
}

// Output:
swapNumber(3, 5); // 5 3
swapNumber(10, 20);
swapNumber(10, 2);

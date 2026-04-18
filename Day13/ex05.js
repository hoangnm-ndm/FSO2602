// for (let i = 1; i <= 1000; i++) {
// 	console.log("lan thu ", i);
// }

for (let i = 1; i <= 1000; i++) {
	if (i % 2) {
		// * i % 2 != 0 => true
		// * -> Trong khối code này, i lẻ
		continue;
		// * Bỏ qua code ở lần lặp hiện tại, đến với i kế tiếp.
	}
	// * chẵn
	console.log(i);
}

//* Tôi sẽ đếm từ 1 đến 100, nhưng nếu gặp 1 số chia hết cho 10 tôi sẽ dừng đếm.

for (let i = 1; i <= 100; i++) {
	if (i % 10 === 0) {
		break;
	}
	console.log(i);
}

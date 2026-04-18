let now = new Date();

console.log(typeof now);
console.log(now);

let day = now.getDay();
console.log(day);

switch (day) {
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thur");
		break;
	case 5:
		console.log("Fri");
		break;
	case 6:
		console.log("Sat");
		break;
	default:
		console.log("Sun");
}

switch (day) {
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		console.log("Ngay trong tuan, di lam");
		break;
	default:
		console.log("Ngay cuoi tuan, di chill");
}

/**
 * * Hãy kiểm tra 1 số có chia hết cho 2 không với switch...case
 */

let myNumber = 10;
switch (myNumber % 2) {
	case 0:
		console.log("Số chẵn");
		break;
	default:
		console.log("không phải số chẵn");
}

if (true) {
	console.log("Có chạy không?");
}

if (false) {
	console.log("Có chạy không?");
}

if (3 > 2) {
	console.log(`3 thi lon hon 2`);
}

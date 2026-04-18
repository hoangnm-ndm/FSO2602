let a = +prompt("nhap a:");
let b = +prompt("nhap b");
let c = +prompt("nhap c");

if (a + b > c && a + c > b && b + c > a) {
	console.log("la tam giac");
} else {
	console.log("ko phai la tam giac");
}

a + b > c && a + c > b && b + c > a
	? console.log("abc la do dai 3 canh cua 1 tam giac")
	: console.log("khong phai");

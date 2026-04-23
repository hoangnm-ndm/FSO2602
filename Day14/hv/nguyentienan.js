function taxSalary(salary) {
	if (typeof salary !== "number" || salary <= 0) {
		console.log("Số tiền lương không hợp lệ");
		return;
	}

	switch (true) {
		case salary > 11_000_000 && salary <= 25_000_000:
			console.log((salary - 11_000_000) * 0.05); // 5 / 100 = 0.05
			break;

		case salary > 25_000_000 && salary <= 50_000_000:
			console.log(14_000_000 * 0.05 + (salary - 25_000_000) * 0.1);
			break;

		case salary > 50_000_000 && salary <= 80_000_000:
			console.log(
				14_000_000 * 0.05 + 25_000_000 * 0.1 + (salary - 50_000_000) * 0.2,
			);
			break;

		case salary > 80_000_000:
			console.log(
				14_000_000 * 0.05 +
					25_000_000 * 0.1 +
					30_000_000 * 0.2 +
					(salary - 80_000_000) * 0.3,
			);
			break;

		default:
			console.log(0);
	}
}

// Output:
taxSalary(10_000_000); // 0
taxSalary(15_000_000); // 200.000
taxSalary(70_000_000); // 7.200.000
taxSalary(30_000_000); // 1.200.000
taxSalary(100_000_000); // 15.200.000
taxSalary(-10_000_000); // Thu nhập không hợp lệ
taxSalary("abc"); // Thu nhập không hợp lệ

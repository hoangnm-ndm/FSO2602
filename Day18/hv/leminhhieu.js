console.log("bai 1:");

function formatDate(date) {
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// Ví dụ sử dụng:
const date = new Date(2023, 0, 15); // 15 January 2023
console.log(formatDate(date)); // "15/01/2023"

console.log("------------");

console.log("bai 2:");

function addDays(date, days) {
	const newDate = new Date(date);

	newDate.setDate(newDate.getDate() + days);

	return newDate.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

// Ví dụ sử dụng:
const date2 = new Date(2023, 0, 15); // 15 January 2023
const newDate = addDays(date2, 10);
console.log(newDate); // 25 January 2023

console.log(addDays(new Date(2026, 3, 15), 20));

console.log("------------");

console.log("bai 3:");

function daysBetween(date1, date2) {
	return date2.getDate() - date1.getDate();
}
// Ví dụ sử dụng:
const date3 = new Date(2023, 0, 15); // 15 January 2023
const date4 = new Date(2023, 0, 25); // 25 January 2023
console.log(daysBetween(date3, date4)); // 10

console.log("------------");

console.log("bai 4:");

function isLeapYear(year) {
	if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
		return true;
	}

	return false;
}
// Ví dụ sử dụng:
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false

console.log("------------");

console.log("bai 5:");

function calculateDaysLived(birthDate) {
	const currentDate = new Date();

	const diffTime = currentDate - birthDate;

	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

	return diffDays;
}

// Ví dụ sử dụng:
const birthDate = new Date(1990, 0, 1); // 1 January 1990
console.log(
	"Số ngày từ 1 January 1990 đến ngày hiện tại:",
	calculateDaysLived(birthDate),
); // Số ngày từ 1 January 1990 đến ngày hiện tại

console.log("------------");

console.log("bai 6:");

function getDayOfWeek(date) {
	return date.toLocaleDateString("en-GB", {
		weekday: "long",
	});
}
// Ví dụ sử dụng:
const date5 = new Date(2023, 0, 15); // 15 January 2023
console.log(getDayOfWeek(date5)); // "Sunday"

console.log("------------");

console.log("Bai 1 : ");

function formatDate(date) {
	const date1 = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${date1}/${month}/${year}`;
}

// Ví dụ sử dụng:
const date = new Date(2023, 0, 15); // 15 January 2023
console.log(formatDate(date)); // "15/01/2023"

console.log("Bai 2 : ");

function addDays(date, days) {
	const date1 = date.getDate() + days;
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${date1}/${month}/${year}`;
}

// ngay 12/05 + 20 ngay => ngay 32/05 => ngay 1/06
// * quy đổi về cùng đơn vị number millisecond để tính toán, sau đó chuyển về lại định dạng ngày tháng năm

// Ví dụ sử dụng:
const date1 = new Date(2023, 0, 15); // 15 January 2023
const newDate = addDays(date1, 10);
console.log(newDate); // 25 January 2023

console.log("Bai 3 : ");

function daysBetween(date1, date2) {
	const oneDay = 1000 * 60 * 60 * 24;

	let diff = date2 - date1;

	return diff / oneDay;
}
// Ví dụ sử dụng:
const date2 = new Date(2023, 0, 15); // 15 January 2023
const date3 = new Date(2023, 0, 25); // 25 January 2023
console.log(daysBetween(date2, date3)); // 10

console.log("Bai 4 : ");

function isLeapYear(year) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
// Ví dụ sử dụng:
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false

console.log("Bai 5 : ");

function calculateDaysLived(birthDate) {
	const oneDay = 1000 * 60 * 60 * 24;
	const now = Date.now();
	console.log(now);
	const timeLived = now - birthDate;

	return Math.floor(timeLived / oneDay);
}
// Ví dụ sử dụng:
const birthDate = new Date(1990, 0, 1); // 1 January 1990
console.log(calculateDaysLived(birthDate)); // Số ngày từ 1 January 1990 đến ngày hiện tại

console.log("Bai 6 : ");

function getDayOfWeek(date) {
	const day = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return day[date.getDay()];
}
// Ví dụ sử dụng:
const date5 = new Date(2026, 4, 12); // 15 January 2023
console.log(getDayOfWeek(date5)); // "Sunday"

console.log("Bai 7 : ");

function getDayOfYear(date) {
	const date1 = date;
	const date2 = new Date(date.getFullYear(), 0, 0);
	const oneDay = 1000 * 60 * 60 * 24;
	const miliSec = date1 - date2;

	return miliSec / oneDay;
}

// Ví dụ sử dụng:
const date7 = new Date(2023, 0, 15); // 15 January 2023
console.log(getDayOfYear(date7)); // 15

console.log("Bai 8 : ");

function getWeekNumber(date) {
	const date1 = date;
	const date2 = new Date(date.getFullYear(), 0, 0);
	const oneWeek = 1000 * 60 * 60 * 24 * 7;
	const miliSec = date1 - date2;

	return Math.ceil(miliSec / oneWeek);
}

// Ví dụ sử dụng:
const date8 = new Date(2023, 0, 15); // 15 January 2023
console.log(getWeekNumber(date8)); // 3

console.log("Bai 9 : ");

function getNextFriday13(year) {
	let result = [];
	for (let i = 0; i < 12; i++) {
		const date = new Date(year, i, 13);

		if (date.getDay() == 5) {
			result.push(`${year}-${i + 1}-13`);
		}
	}

	return result;
}

// Ví dụ sử dụng:
console.log(getNextFriday13(2023)); // ["2023-01-13", "2023-10-13"]
console.log(getNextFriday13(2026));

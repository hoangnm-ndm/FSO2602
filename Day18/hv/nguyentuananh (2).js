//#region Bai 1
function formatDate(date) {
	let month = date.getMonth();
	month = month < 9 ? `0${month + 1}` : `${month + 1}`;
	return `${date.getDate()}/${month}/${date.getFullYear()}`;
}
// Ví dụ sử dụng:
const date = new Date(2023, 0, 15); // 15 January 2023
console.log(formatDate(date)); // "15/01/2023"
//#endregion

//#region Bai 2
function addDays(date, days) {
	return new Date(date.setDate(date.getDate() + days));
}

// Ví dụ sử dụng:
const date2 = new Date(2023, 0, 15); // 15 January 2023
const newDate = addDays(date2, 10);
console.log(newDate); // 25 January 2023
//#endregion

//#region Bai 3
function daysBetween(date1, date2) {
	return Math.floor(
		(date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000),
	);
}
// Ví dụ sử dụng:
const d1 = new Date(2022, 8, 15); // 15 January 2023
const d2 = new Date(2023, 0, 25); // 25 January 2023
console.log(daysBetween(d1, d2)); // 10
//#endregion

//#region Bai 4
function isLeapYear(year) {
	return year % 4 === 0 || year % 400 === 0;

	// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
}
// Ví dụ sử dụng:
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(2000)); // false
console.log(isLeapYear(2024)); // false
//#endregion

//#region Bai 5
function calculateDaysLived(birthDate) {
	return Math.floor((Date.now() - birthDate.getTime()) / (24 * 60 * 60 * 1000));
}
const birthDate = new Date(1990, 0, 1); // 1 January 1990
console.log(calculateDaysLived(birthDate)); // Số ngày từ 1 January 1990 đến ngày hiện tại
//#endregion

//#region Bai 6
function getDayOfWeek(date) {
	let day = date.getDay();
	switch (day) {
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wenesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
		default:
			return "Sunday";
	}
}
// Ví dụ sử dụng:
const d6 = new Date(2023, 0, 15); // 15 January 2023
console.log(getDayOfWeek(d6)); // "Sunday"
const d7 = new Date(Date.now());
console.log(getDayOfWeek(d7));
//#endregion

//#region Bai 7
function getDayOfYear(date) {
	let year = date.getFullYear();
	let firstDate = new Date(year, 0, 0);
	return Math.floor(
		(date.getTime() - firstDate.getTime()) / (24 * 60 * 60 * 1000),
	);
}

// Ví dụ sử dụng:
const date7 = new Date(2023, 0, 15); // 15 January 2023
console.log(getDayOfYear(date7)); // 15
const date8 = new Date(2023, 6, 20);
console.log(getDayOfYear(date8));
//#endregion

//#region Bai 8
function getWeekNumber(date) {
	let year = date.getFullYear();
	let firstDate = new Date(year, 0, 0);
	return Math.ceil(
		(date.getTime() - firstDate.getTime()) / (7 * 24 * 60 * 60 * 1000),
	);
}
// Ví dụ sử dụng:
const d88 = new Date(2023, 0, 15); // 15 January 2023
console.log(getWeekNumber(d88)); // 3
//#endregion

//#region Bai 9
function getNextFriday13(year) {
	let result = [];
	for (let i = 0; i < 12; i++) {
		let testDate = new Date(year, i, 13);
		if (testDate.getDay() === 5) {
			let month = i < 9 ? `0${i + 1}` : `${i + 1}`;
			let format = `${year}-${month}-13`;
			result.push(format);
		}
	}
	return result;
}
// Ví dụ sử dụng:
console.log(getNextFriday13(2023)); // ["2023-01-13", "2023-10-13"]
//#endregion

// 28.1 
// Thư Viện Dayjs, MomentJS

// function formatDate(date) {
//     const targetDate = String(date.getDate());
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${targetDate}/${month}/${year}`;
// }

// // Ví dụ sử dụng:
// const date = new Date(2023, 0, 15); // 15 January 2023
// console.log(formatDate(date)); // "15/01/2023"

// 28.2
// function addDays(date, days) {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
//     const month = result.toLocaleString('default', { month: 'long' });
//     const year = result.getFullYear();
//     return `${result.getDate()} ${month} ${year}`;
// }

// // Ví dụ sử dụng:
// const date = new Date(2023, 0, 15); // 15 January 2023
// const newDate = addDays(date, 20);
// console.log(newDate); // 25 January 2023

// // 28.3
// function daysBetween(date1, date2) {
//     const result = date1.getDate() - date2.getDate();
//     return -result;
// }
// // Ví dụ sử dụng:
// const date1 = new Date(2023, 0, 29); // 15 January 2023
// const date2 = new Date(2023, 0, 25); // 25 January 2023
// console.log(daysBetween(date1, date2)); // 10

// // 28.4
// function isLeapYear(year) {
//     if(year<=0) return false
//     if(typeof year !=="number") return false

//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }
// // Ví dụ sử dụng:
// console.log(isLeapYear(2020)); // true
// console.log(isLeapYear(2021)); // false
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(-1)); // false
// console.log(isLeapYear(null)); // false
// console.log(isLeapYear(0)); // false


// // 28.5
// function calculateDaysLived(birthDate) {
//     const today = new Date().getTime();
//     const diff = today - birthDate.getTime();
//     const msPerDay = 1000 * 60 * 60 * 24;

//     return Math.floor(diff / msPerDay);
// }
// // Ví dụ sử dụng:
// const birthDate = new Date(1990, 0, 1); // 1 January 1990
// console.log(calculateDaysLived(birthDate)); // Số ngày từ 1 January 1990 đến ngày hiện tại

// 28.6
// function getDayOfWeek(date) {
//     const map = {
//         0: 'Sunday',
//         1: 'Monday',
//         2: 'Tuesday',
//         3: 'Wednesday',
//         4: 'Thursday',
//         5: 'Friday',
//         6: 'Saturday',
//     };

//     // return map[date.getDay()];
//     return date.toLocaleDateString('en-US', { month: 'long' })
// }
// Ví dụ sử dụng:
// const date = new Date(2026, 4, 6); // 15 January 2023
// console.log(getDayOfWeek(date)); // "Sunday"

// // 28.7
// function getDayOfYear(date) {
//     const start1 = new Date(date.getFullYear(), 0, 0)
//     const start = new Date(date.getFullYear(), 0, 0).getTime();
//     const now = date.getTime();

//     const diff = now - start;
//     const MS_PER_DAY = 1000 * 60 * 60 * 24;

//     return Math.floor(diff / MS_PER_DAY);
// }

// const date = new Date(2023, 1, 1); // 15 January 2023
// console.log(getDayOfYear(date)); // 15

// 28.8

// // check lại theo tuần thực tế của tháng
// function getWeekNumber(date) {
//     const yearInput = date.getFullYear();
//     const start = new Date(yearInput, 0, 0).getTime();
//     const end = date.getTime();
//     const diff = end - start;
//     const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000; // 604 800 000

//     return Math.ceil(diff / MS_PER_WEEK);
// }

// // Ví dụ sử dụng:
// const date = new Date(2026, 0, 4); // 15 January 2023
// console.log(getWeekNumber(date)); // 3

// // Ví dụ sử dụng:
// const date = new Date(2023, 0, 15); // 15 January 2023
// console.log(getDayOfYear(date)); // 15

// 28.9
function getNextFriday13(year) {
    const result = [];
    const fridayIndex = 5;
    for (let i = 0; i < 12; i++) {
        const d = new Date(year, i, 13);

        if (d.getDay() === 5) {
            const month = String(d.getMonth() + 1).padStart(2, '0');
            result.push(`${year}-${month}-${d.getDate()}`);
        }
    }

    return result;
}

// Ví dụ sử dụng:
console.log(getNextFriday13(2026)); // ["2023-01-13", "2023-10-13"]

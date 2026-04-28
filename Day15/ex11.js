const students = [
	{ id: 1, name: "Nguyen Minh Hoang", score: 4 },
	{ id: 2, name: "Nguyen Minh Chau", score: 9 },
	{ id: 3, name: "Nguyen Minh Khang", score: 5 },
	{ id: 4, name: "Nguyen Minh Tue", score: 10 },
];

/**
 * * 1. Hãy tạo ra mảng có đầy đủ thông tin sinh viên ban đầu + phân loại (level, type) để chia ra thành 3 nhóm:
 * - fail: < 4.
 * - trung bình: >= 4 -> < 7
 * - khá: >= 7 - < 8
 * - giỏi: >= 8 - <= 9
 * - xuất sắc: > 9.
 *
 * * Gợi ý: nên tách thành 2 hàm, hàm chuyên biệt có chức năng phân loại sinh viên.
 *
 * * 2. Tạo ra các mảng mới theo sự phân loại học lực của sinh viên. (không được tạo ra mảng rỗng.)
 */

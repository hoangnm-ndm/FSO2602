// Nguyen Ha Thanh

Array.prototype.reduce2 = function (callback, initialValue) {
	const length = this.length;

	let accumulator;
	const reduceLogic = () => {
    let i = 0
		while (i < length) {
			if (i in this) {
				accumulator = callback(accumulator, this[i], i, this);
			}
			i++;
		}
	};

	if (arguments.length > 1) {
		accumulator = initialValue;
		reduceLogic();
	} else {
		accumulator = this[0];
		reduceLogic();
	}

	return accumulator;
};

const array = [1, 2, 3, 5];
const result = array.reduce2((acc, item) => {
	acc = acc + item * 2;
	return acc;
});

console.log("result", result);

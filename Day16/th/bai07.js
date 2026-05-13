Array.prototype.reduce2 = function (callback, initValue) {
	const array = this;
	const length = array.length;

	if (!length && initValue === undefined) {
		throw new TypeError("array is empty");
	}
	let i = 0;
	let acc = initValue;

	if (initValue!==undefined) {
		acc = initValue;
		for (let i = 0; i < length; i++) {
			if (i in this) {
				acc = callback(acc, this[i], i, this);
			}
		}
	} else {
        acc=array[0]
		for (let i = 1; i < length; i++) {
			if (i in this) {
				acc = callback(acc, this[i], i, this);
			}
		}
	}

	return acc;
};

const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

const result = fruits.reduce2((acc, item)=>{
       acc[item] = (acc[item] || 0) +  1
       return acc
}, {})

console.log('result', result)
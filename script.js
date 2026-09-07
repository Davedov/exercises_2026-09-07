//#region exercise #1
console.log(canEnter(17));
console.log(canEnter(19));

function canEnter(age) {
	if (age < 18) {
		return "Go somewhere else";
	}

	return "Come on in";
}
//#endregion
//#region exercise #2
console.log(calculateAverage([8, 0, 1]));
console.log(calculateAverage([134, 2.3, 222, 4241.004]));
console.log(calculateAverage([]));

function calculateAverage(numbers) {
	if (numbers.length === 0) {
		return 0;
	}

	let sum = 0;
	let count = numbers.length;

	numbers.forEach((number) => {
		sum += number;
	});

	return sum / count;
}
//#endregion
//#region exercise #3
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(9.2));

function isEven(number) {
	return number % 2 === 0;
}
//#endregion
//#region exercise #4
console.log(sumTo(5));
console.log(sumTo(10));
console.log(sumTo(100));
function sumTo(n) {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += i;
	}

	return sum;

	//* better solutions:
	// return (n * (n + 1)) / 2
	// return (n ** 2 + n) / 2
}
//#endregion

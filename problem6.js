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

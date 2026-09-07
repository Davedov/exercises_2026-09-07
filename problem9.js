console.log(numberAnalyzer(10));
console.log(numberAnalyzer(-5));
console.log(numberAnalyzer(7));

function numberAnalyzer(num) {
	let result = {
		isPositive: num > 0,
		isEven: num % 2 === 0,
		isDivisibleByFive: num % 5 === 0,
	};
	return result;
}

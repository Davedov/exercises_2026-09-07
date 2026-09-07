console.log(orderCalculator(10, 3, 20)); // Expected output: 29
console.log(orderCalculator(20, 3, 10)); // Expected output: 59
console.log(orderCalculator(5, 10, 0)); // Expected output: 55
console.log(orderCalculator(10, 6, 110)); // Expected output: 35
console.log(orderCalculator(-10, 6, 100)); // Expected output: 35
console.log(orderCalculator(10, 6.5, 100)); // Expected output: 35

function orderCalculator(prize, quantity, discountPercent) {
	if (discountPercent < 0 || discountPercent > 100) {
		throw new Error("Discount percent must be between 0 and 100");
	}

	if (prize < 0 || quantity < 0) {
		throw new Error("Prize and quantity must be positive numbers");
	}

	if (quantity % 1 !== 0) {
		throw new Error("Quantity must be a whole number");
	}

	let shippingCost = 5;
	let discountMultiplier = 1 - discountPercent / 100;
	let subtotal = prize * quantity * discountMultiplier;

	if (subtotal > 50) {
		shippingCost = 0;
	}

	return subtotal + shippingCost;
}

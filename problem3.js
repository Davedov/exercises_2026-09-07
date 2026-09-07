console.log(calculateTotal(10, 3));
console.log(calculateTotal(20, 3));

function calculateTotal(price, quantity) {
	let shippingCost = 5;
	let subtotal = price * quantity;

	if (subtotal > 50) {
		shippingCost = 0;
	}

	return subtotal + shippingCost;
}

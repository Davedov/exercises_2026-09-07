console.log(canEnter(17));
console.log(canEnter(19));

function canEnter(age) {
	if (age < 18) {
		return "Go somewhere else";
	}

	return "Come on in";
}

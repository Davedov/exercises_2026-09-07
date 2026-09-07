const scores = [85, 92, 78, 90, 88];
console.log(getHightestScore(scores));
console.log(getLowestScore(scores));
console.log(getMedianScore(scores));

function getHighestScore(scores) {
	let highestScore = scores[0];

	scores.forEach((score) => {
		if (score > highestScore) {
			highestScore = score;
		}
	});

	return highestScore;
}

function getLowestScore(scores) {
	let lowestScore = scores[0];

	scores.forEach((score) => {
		if (score < lowestScore) {
			lowestScore = score;
		}
	});

	return lowestScore;
}

function getMedianScore(scores) {
	scores.sort((a, b) => a - b);

	const mid = Math.floor(scores.length / 2);

	if (scores.length % 2 === 0) {
		return (scores[mid - 1] + scores[mid]) / 2;
	} else {
		return scores[mid];
	}
}

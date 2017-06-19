function sumSquareDiff(x) {
	var sumSqr = sumOfSquares(x);
	var sqrSum = sum(x) * sum(x);
	return sqrSum - sumSqr;
}

function sumOfSquares(x) {
	if (x === 1) {
		return 1;
	} else {
		return (x * x) + sumOfSquares(x-1);
	}
}

function sum(x) {
	if (x === 1) {
		return x;
	} else {
		return x + sum(x-1);
	}
}

console.log(sumSquareDiff(100));

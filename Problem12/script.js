function getTriangleNumber(n) {
	if (n === 1) {
		return 1;
	} else {
		return n + getTriangleNumber(n-1);
	}
}

function getTriangleDivisors(x) {
	var divs = [];
	var step = 0;
	var triangleNumber = 0;
	while (divs.length < x) {
		divs = [];
		step++;
		triangleNumber = getTriangleNumber(step);
		for (var i = 1; i <= triangleNumber; i++) {
			if (triangleNumber % i === 0) {
				divs.push(i);
			}
		}
	}
	console.log(divs);
	return triangleNumber;
}

console.log(getTriangleDivisors(500));

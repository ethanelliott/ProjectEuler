function sumOfMultiples(upperLimit, multiples) {
	var sum = 0;
	var lastDigit = 0;
	for (var i = 0; i < upperLimit; i++) {
		for (var j = 0; j < multiples.length; j++) {
			if (i % multiples[j] === 0 && i != lastDigit) {
				sum += i;
				lastDigit = i;
			}
		}
	}
	return sum;
}

console.log(sumOfMultiples(1000, [3, 5]));

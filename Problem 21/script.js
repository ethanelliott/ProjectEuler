function sumOfProperDivisors(x) {
	var sum = 0;
	for (var i = 0; i < x; i++) {
		if (x % i === 0) {
			sum += i;
		}
	}
	return sum;
}

function amicableNumbers(x) {
	var sum = 0;
	for (var i = 1; i <= x; i++) {
		var dOfA = sumOfProperDivisors(i);
		var dOfB = sumOfProperDivisors(dOfA);
		if (i === dOfB && dOfA !== dOfB) {
			console.log(i + " | " + dOfA  + " <-> " + dOfB);
			sum += i;
		}
	}
	return sum;
}

console.log(amicableNumbers(10000));

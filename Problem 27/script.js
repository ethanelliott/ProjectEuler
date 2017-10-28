//Project Euler Problem #27

function isPrime(n) {
	if (n === 1) {
		return false;
	}
	if (n < 1) {
		return false;
	}
	var middle = Math.floor(n / 2);
	var count = 0;
	for (var i = 2; i <= middle; i++) {
		if (n % i === 0) {
			count++;
		}
	}
	if (count > 0) {
		return false;
	} else {
		return true;
	}
}

function quadratic($a, $b, $n) {
	return ($n * $n) + ($a * $n) + ($b);
}

function testFormula($a, $b) {
	let consecutivePrimeCounter = 0;
	let n = 0;
	let isStillPrime = true;
	while (isStillPrime) {
		if (isPrime(quadratic($a, $b, n))) {
			consecutivePrimeCounter++;
		} else {
			isStillPrime = false;
		}
		n++;
	}
	return consecutivePrimeCounter;
}

function main() {
	let maxPrimeNum = 0;
	let primeProduct = 0;
	const A_BOUND = 1000;
	const B_BOUND = 1001;
	for (let a = ((-A_BOUND) + 1); a < A_BOUND; a++) {
		for (let b = ((-B_BOUND) + 1); b < B_BOUND; b++) {
			let primeCount = testFormula(a, b);
			if (primeCount > maxPrimeNum) {
				maxPrimeNum = primeCount;
				primeProduct = a * b;
			}
		}
	}
	console.log(primeProduct);
}

main();

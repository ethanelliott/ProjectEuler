//Project Euler Problem #25

function FibonacciNDigits($nDigits) {
	var lastTerms = [bigInt(1), bigInt(1)];
	var index = 3;
	while (true) {
		var nextTerm = lastTerms[0].add(lastTerms[1]);
		if (nextTerm.toString().length === $nDigits) {
			break;
		}
		lastTerms.shift();
		lastTerms.push(nextTerm);
		index++;
	}
	console.log(index);
}

function main() {
	FibonacciNDigits(1000);
}

main();

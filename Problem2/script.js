function evenFibonacciSum(maxTermVal) {
	var lastTerms = [1,1];
	var sum = 0;
	while (lastTerms[0] < maxTermVal && lastTerms[1] < maxTermVal && lastTerms[0] + lastTerms[1] < maxTermVal) {
		var nextTerm = lastTerms[0] + lastTerms[1];
		if (nextTerm % 2 === 0) {
			sum += nextTerm;
		}
		lastTerms.shift();
		lastTerms.push(nextTerm);
	}
	return sum;
}

console.log(evenFibonacciSum(4000000));

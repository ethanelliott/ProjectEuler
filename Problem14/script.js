function collatzSequence(x) {
	var chainLength = 1;
	while (x > 1) {
		if (x % 2 === 0) {
			x = x/2;
		} else {
			x = (3 * x) + 1;
		}
		chainLength++;
	}
	return chainLength;
}

function longestCollatzSequence(x) {
	var longestChain = 0;
	var startNum = 0;
	for (var i = 1; i <= x; i++) {
		var newChain = collatzSequence(i);
		if (newChain > longestChain) {
			longestChain = newChain;
			startNum = i;
		}
	}
	return startNum;
}

console.log(longestCollatzSequence(1000000));

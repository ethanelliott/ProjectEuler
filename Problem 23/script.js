var LowerLimit = 12;
var UpperLimit = 28123;

function numberDivisorTest(x) {
	var sum = 0;
	for (var i = 1; i < x; i++) {
		if (x % i === 0) {
			sum += i;
		}
	}
	if (sum === x) {
		return 0;//Perfect
	} else if (sum < x) {
		return -1;//Deficient
	} else if (sum > x) {
		return 1;//Abundant
	}
}

function getAbundantNums() {
	var nums = [];
	for (var i = 1; i <= UpperLimit; i++) {
		if (numberDivisorTest(i) === 1) {
			nums.push(i);
		}
	}
	return nums;
}

function nonAbundantSums() {
	var sum = 0;
	var AbundantNumbers = getAbundantNums();
	for (var i = LowerLimit; i <= UpperLimit; i++) {
		var index = 0;
		while (AbundantNumbers[index] < i) {
			if ()
			index++;
		}
	}
	return sum;
}

console.log(nonAbundantSums());

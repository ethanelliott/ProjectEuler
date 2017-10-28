<<<<<<< HEAD
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
=======
//Project Euler Problem 23
//Non-Abundant Sums

function getAllAbundant($upper) {
	let arrOfAbundance = [];
	for (let i = 0; i <= $upper; i++) {
		let AbundantSum = 0;
		for (let j = 0; j < i; j++) {
			if (i % j === 0) {
				AbundantSum += j;
			}
		}
		if (AbundantSum > i) {
			arrOfAbundance.push(i);
		}
	}
	return arrOfAbundance;
}

function isAbundantSum(x, $allAbundant) {
	for (let i = 0; i < $allAbundant.length; i++) {
		for (let j = 0; j < $allAbundant.length; j++) {
			if ($allAbundant[i] + $allAbundant[j] === x) {
				return true;
			}
		}
	}
	return false;
}


function main() {
	const UPPERBOUND = 28123;
	let allAbundant = getAllAbundant(UPPERBOUND);
	let sum = 0;
	for (let i = 0; i <= UPPERBOUND; i++) {
		if (!isAbundantSum(i, allAbundant)) {
			sum += i;
		}
	}
	console.log(sum);
}

main();
>>>>>>> 199478b22ecd0d1ccaecc7b5f07afef5f0effe41

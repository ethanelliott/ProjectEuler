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

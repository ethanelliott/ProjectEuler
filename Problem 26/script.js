//Project Euler Problem #26

function arrayFindNum($num) {
	return (element) => {
		return element === $num;
	}
}

function lengthOfRecurring($num) {
	let sumLength = 2;
	let startingNum = 1 % $num;
	let currentNum = startingNum;
	let nums = [];
	nums.push(startingNum);
	while (true) {
		currentNum = (10 * currentNum) % $num;
		if (nums.find(arrayFindNum(currentNum)) != undefined) {
			break;
		}
		sumLength++;
		nums.push(currentNum);
	}
	return sumLength;
}

function main() {
	const UPPERBOUND = 1000;
	let largestRecurringLength = 0;
	for (let i = 2; i <= UPPERBOUND; i++) {
		let recurringAtI = lengthOfRecurring(i);
		//console.log(i, recurringAtI);
		if (recurringAtI > largestRecurringLength) {
			largestRecurringLength = recurringAtI;
		}
	}
	console.log("Largest", largestRecurringLength);
}

main();

//Project Euler Problem #29
bigInt = require('big-integer');

function bigPower($a, $b) {
	return bigInt($a).pow($b);
}

function main() {
	let powArray = [];
	const lowerBound = 2;
	const upperBound = 100;
	for (let i = lowerBound; i <= upperBound; i++) {
		for (let j = lowerBound; j <= upperBound; j++) {
			let num = bigPower(i, j);
			if (!powArray.includes(num.toString())) {
				powArray.push(num.toString());
			}
		}
	}
	console.log(powArray.length);
}

main();

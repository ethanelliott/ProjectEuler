//Project Euler Problem #30

function fP($a) {
	return Math.pow($a, 5);
}

function nC($a) {
	let str = $a.toString();
	let re = 0;
	for (let j = 0; j < str.length; j++) {
		re += fP(parseInt(str[j]));
	}
	return re;
}

function findFifthPowers() {
	let arrOfPow = [];
	const lowerBound = 0;
	const upperBound = 6 * fP(9);
	for (let i = lowerBound; i <= upperBound; i++) {
		let sum = nC(i);
		if (i === sum && (i != 1 && i != 0)) {
			arrOfPow.push(i);
			console.log(i, sum);
		}
	}
	return arrOfPow;
}

function main() {
	let x = findFifthPowers();
	console.log(x);
	let totalSum = 0;
	for (i = 0; i < x.length; i++) {
		totalSum += x[i];
	}
	console.log(totalSum);
}

main();

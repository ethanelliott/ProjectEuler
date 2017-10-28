//Project Euler Problem #28

function formula($n) {
	let sumOfLayer = 0;
	for (let i = 0; i < 4; i++) {
		let layer = ($n * $n) - (($n - 1) * i);
		sumOfLayer += layer;
	}
	return sumOfLayer;
}

function sumOfDiagonal($size) {
	$size = $size - (($size - 1) / 2);
	let sum = 1;
	for (let i = 1; i < $size; i++) {
		let la = (2 * i) + 1;
		let laSum = formula(la);
		sum += laSum;
	}
	return sum;
}

function main() {
	console.log(sumOfDiagonal(1001));
}

main();

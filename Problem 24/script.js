function factorial($x) {
	if ($x === 0) {
		return 1;
	}
	return $x * factorial($x - 1);
}

function generateNumberArray($num) {
	let arr = [];
	for (let i = 0; i < $num; i++) {
		arr.push(i);
	}
	return arr;
}

function generatePermutation(arr) {
	let len = arr.length;
	let perms = [];

	if (arr.length <= 1) {
		return arr;
	}
	for (let i = 0; i < arr.length; i++) {
		let rest = Object.create(arr);
		let picked = rest.splice(i, 1);
		let restPerms = generatePermutation(rest);

		for (let j = 0; j < restPerms.length; j++) {
			let next = picked.concat(restPerms[j]);
			perms.push(next);
		}
	}
	return perms;
}

function main() {
	let digits = 10;
	let numArr = generateNumberArray(digits);
	let numOfPermutation = factorial(digits);
	let digitPermArray = generatePermutation(numArr);
	let numPermArray = [];
	for (let i = 0; i < digitPermArray.length; i++) {
		let str = "";
		for (let j = 0; j < digitPermArray[i].length; j++) {
			str += digitPermArray[i][j];
		}
		numPermArray.push(parseInt(str));
	}
	numPermArray.sort((a, b) => {
		return a - b;
	});
	console.log(numPermArray[1000000 - 1])
}

main();

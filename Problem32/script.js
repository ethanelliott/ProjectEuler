//Project Euler Problem #32

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
	let productArr = [];
	let numArr = generateNumberArray(digits);
	let digitPermArray = generatePermutation(numArr);
	for (let i = 0; i < digitPermArray.length; i++) {
		for (let j = 0; j < 4; j++) {
			let product = 0;
			let cp = digitPermArray[i];
		}
	}
}

main();

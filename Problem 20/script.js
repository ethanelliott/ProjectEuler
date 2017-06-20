
function factorial(x) {
	if (x === 1) {
		return bigInt(x);
	} else {
		return bigInt(x).times(factorial(x-1));
	}
}

function factorialSum(x) {
	var sum = 0;
	var str = factorial(x).toString().split("");
	for (var i = 0; i < str.length; i++) {
		sum += parseInt(str[i]);
	}
	return sum;
}

console.log(factorialSum(100));

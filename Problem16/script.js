//This one requires the BigInteger.js library

function powerDigitSum(x, y) {
	var sum = 0;
	var pow = bigInt(x).pow(y).toString();
	for(var i = 0; i < pow.length; i++) {
		sum += parseInt(pow[i]);
	}
	return sum;
}

console.log(powerDigitSum(2, 1000));

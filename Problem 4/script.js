function largestPalindrome() {
	var largest = 0;
	for (var i = 1; i < 1000; i++) {
		for (var j = 1; j < 1000; j++) {
			var product = i * j;
			var prodStr = product.toString().split("").join('');
			var reverseStr = product.toString().split("").reverse().join('');
			if (prodStr == reverseStr && product > largest) {
				largest = product;
			}
		}
	}
	return largest;
}

console.log(largestPalindrome());

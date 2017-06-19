function smallestMultiple(x) {
	var num = 1;
	while (num >= 0) {
		var counter = 0;
		for (var i = 1; i <= x; i++) {
			if (num % i === 0) {
				counter++;
			}
		}
		if (counter === x) {
			return num;
		}
		num++;
	}
}

console.log(smallestMultiple(20));

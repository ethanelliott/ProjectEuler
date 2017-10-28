function specialPythTriplet(x) {
	for (var i = 1; i <= x; i++) {
		for (var j = i + 1; j <= x; j++) {
			if (i + j + Math.sqrt(i*i + j*j) == x && i < j && j < Math.sqrt(i*i + j*j)) {
				return i * j * Math.sqrt(i*i + j*j);
			}
		}
	}
}

console.log(specialPythTriplet(1000));

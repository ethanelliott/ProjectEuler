function sumOfPrimes(x) {
	var sum = 0;
	for (var i = 1; i < x; i++) {
		if (isPrime(i)) {
			sum += i;
		}
	}
	return sum;
}

function isPrime(n){
  if (n === 1) {return false;}
  var middle = Math.floor(n/2);
  var count = 0;
  for(var i = 2; i <= middle; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(sumOfPrimes(2000));

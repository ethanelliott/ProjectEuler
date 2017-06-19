function primeNumber(x) {
	var primes = [];
	var i = 1;
	while (primes.length < x) {
		if (isPrime(i)) {
			primes.push(i);
		}
		i++;
	}
	return primes[x-1];
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

console.log(primeNumber(10001));

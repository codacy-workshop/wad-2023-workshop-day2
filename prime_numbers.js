function isPrimeNumber(num) {
  if (num < 2) return false;

  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }

  return true;
}

function printPrimeNumbers(limit) {
  for (var i = 2; i <= limit; i++) if (isPrimeNumber(i)) console.log(i);
}

printPrimeNumbers(20);

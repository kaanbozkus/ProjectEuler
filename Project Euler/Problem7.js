let isPrime = function (number) {
  for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

let primeArray = [2];
let upperLimit = 10001;

for (let i = 3; i < Number.MAX_SAFE_INTEGER; i += 2) {
  if (isPrime(i)) {
    primeArray.push(i);
  }

  if (primeArray.length == upperLimit) {
    break;
  }
}

console.log(primeArray[upperLimit - 1]);

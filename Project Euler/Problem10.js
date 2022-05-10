let isPrime = function (number) {
  for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

let summation = 2;
let upperLimit = 2000000;

for (let i = 3; i < upperLimit; i += 2) {
  if (isPrime(i)) {
    summation += i;
  }
}

console.log(summation);

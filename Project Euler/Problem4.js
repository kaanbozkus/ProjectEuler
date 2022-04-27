/* A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

let palindrome = 1;

for (let i = 100; i <= 999; i++) {
  for (let j = 100; j <= 999; j++) {
    let product = i * j;
    let productArray = product.toString().split("");
    let reversedProductArray = [];
    for (k = productArray.length - 1; k >= 0; k--) {
      reversedProductArray.push(productArray[k]);
    }

    if (
      reversedProductArray.join("") == productArray.join("") &&
      product > palindrome
    ) {
      palindrome = product;
    }
  }
}

console.log(palindrome);

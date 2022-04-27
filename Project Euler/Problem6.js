/* The sum of the squares of the first ten natural numbers is 385,

The square of the sum of the first ten natural numbers is 3025,

Hence the difference between the sum of the squares of the 
first ten natural numbers and the square of the sum is 2640.

Find the difference between the sum of the squares of the 
first one hundred natural numbers and the square of the sum. */

let number = 100;

let sumOfTheSquares = (number * (number + 1) * (2 * number + 1)) / 6;
let squareOfTheSums = ((number * (number + 1)) / 2) ** 2;
console.log(squareOfTheSums - sumOfTheSquares);

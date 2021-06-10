console.log("Understanding algorithms");

// sum of numbers in an array
function sumNumbers(numbers) {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
}

console.log(sumNumbers([1, 2, 3, 4]));

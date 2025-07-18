// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.


function repeatedDigitSum(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

// Example usage:
let result1 = repeatedDigitSum(456);
console.log(result1); // Output: 6

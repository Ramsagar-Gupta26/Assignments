//4.  sum of number by the digit by product

function sumOfDigitProducts(n1, n2) {
  // Convert numbers to string and reverse for right-to-left alignment
  let str1 = n1.toString().split('').reverse();
  let str2 = n2.toString().split('').reverse();

  // Determine max length to align both numbers
  let maxLength = Math.max(str1.length, str2.length);

  // Pad shorter array with '0's
  while (str1.length < maxLength) str1.push('0');
  while (str2.length < maxLength) str2.push('0');

  let sum = 0;

  // Multiply corresponding digits and add
  for (let i = 0; i < maxLength; i++) {
    sum += parseInt(str1[i]) * parseInt(str2[i]);
  }

  return sum;
}

// Example usage:
console.log(sumOfDigitProducts(6, 34));      // Output: 24
console.log(sumOfDigitProducts(123, 456));   // Output: 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32
console.log(sumOfDigitProducts(89, 7));      // Output: 9*7 + 8*0 = 63 + 0 = 63

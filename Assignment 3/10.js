// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

// let newstr = 'Hello';
// let updatedstr1 = newStr.reverse();
// console.log(updatedstr1);

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example usage:
let input3 = "Hello";
let output3 = reverseString(input3);
console.log(output3); // Output: olleH

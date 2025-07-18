// 2.  calculater

function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error: Division by zero";
      }
      break;

    default:
      result = "Invalid operator";
  }

  return result;
}

// output
console.log("output are:");

console.log(calculate(10, 5, '+')); // Output: 15
console.log(calculate(10, 5, '-')); // Output: 5
console.log(calculate(10, 5, '*')); // Output: 50
console.log(calculate(10, 5, '/')); // Output: 2
console.log(calculate(10, 0, '/')); // Output: Error: Division by zero
console.log(calculate(10, 5, '%')); // Output:
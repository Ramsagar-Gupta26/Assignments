
const values = [10, 20, 30, 40];

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray(values)); // Output: 100

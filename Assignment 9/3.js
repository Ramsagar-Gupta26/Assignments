
function modifyArray(arr) {
  arr.push('New Element');    // Add to end
  arr.pop();                  // Remove last
  return arr;
}

console.log(modifyArray([1, 2, 3])); // Output: [1, 2, 3]

// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
  // Trim leading/trailing spaces and split by one or more whitespace
  let words = paragraph.trim().split(/\s+/);
  
  // If the paragraph is empty, return 0
  return paragraph.trim() === '' ? 0 : words.length;
}

// Example usage:
let para = "  This is a sample paragraph with   multiple spaces. ";
let result2 = countWords(para);
console.log(result2); // Output: 8


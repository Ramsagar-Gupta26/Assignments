//  Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(sentence, wrong, correct) {
 
  let regex = new RegExp("\\b" + wrong + "\\b", "g");
  return sentence.replace(regex, correct);
}

// Example usage:
let input = "I have a appl. That appl is red.";
let result = correctfn(input, "appl", "apple");
console.log(result); // Output: "I have a apple. That apple is red."

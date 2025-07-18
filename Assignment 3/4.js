
// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let againStr = "Programming is a creative process"; // more than 20 characters

// Convert to lowercase to simplify comparison
againStr = againStr.toLowerCase();

// Define vowels
let vowels = ['a', 'e', 'i', 'o', 'u'];

let vowelCount = 0;
let consonantCount = 0;

// Loop through each character
for (let i = 0; i < againStr.length; i++) {
  let ch = againStr[i];

  // Check if it is an alphabet character
  if (ch >= 'a' && ch <= 'z') {
    if (vowels.includes(ch)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);

// // question 1 Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

// Step 1: Create the array of Indian states
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Step 2: Filter out states that start with vowels
const consonantStates = states.filter(state => {
  // Convert first letter to lowercase for uniformity
  const firstChar = state.charAt(0).toLowerCase();
  // Return true if not a vowel
  return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

// Step 3: Print the result
console.log(consonantStates);
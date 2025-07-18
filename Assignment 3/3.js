// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let theStr = "INDIA";

let newStr = theStr.split('');
newStr.splice(3,0,'O','N','E','S');
// console.log(newStr);
let newString = newStr.join('');

console.log(newString);

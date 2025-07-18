
const person = {
  name: 'Alice',
  age: 25,
  occupation: 'Developer'
};

function greetPerson(obj) {
  console.log(`Hello, my name is ${obj.name}. I am a ${obj.occupation} and I am ${obj.age} years old.`);
}

greetPerson(person);
// Output: Hello, my name is Alice. I am a Developer and I am 25 years old.

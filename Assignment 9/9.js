
const obj1 = { name: 'John' };
const obj2 = { age: 30 };

function mergeObjects(o1, o2) {
  return Object.assign({}, o1, o2); // or use spread: {...o1, ...o2}
}

console.log(mergeObjects(obj1, obj2)); // Output: { name: 'John', age: 30 }

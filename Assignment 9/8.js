
const sampleObject = {
  id: 101,
  title: 'Book',
  price: 399
};

function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log(getObjectKeys(sampleObject)); // Output: ['id', 'title', 'price']

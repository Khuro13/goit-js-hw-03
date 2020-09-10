const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let array = [];
  for (let obj of arr) {
    // console.log(obj);
    for (let key in obj) {
      // console.log(key);
      if (key === prop) {
        // console.log(obj[key]);
        array.push(obj[key]);
      }
    }
  }

  return array;
};

console.log(getAllPropValues(products, 'name'));

console.log(getAllPropValues(products, 'quantity'));

console.log(getAllPropValues(products, 'category'));

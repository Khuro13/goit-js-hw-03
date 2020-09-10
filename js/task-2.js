const countProps = function (obj) {
  const array = Object.keys(obj);
  // console.log(array);
  const array2 = Object.values(obj);
  // console.log(array2);

  return array.length, array2.length;
};

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

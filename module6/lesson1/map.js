const array = [1, 4, 9, 16, 25];

const double = function(data) {
  let result = [];

  for(const dat of data) {
    result.push(dat * 2)
  }

  return result;
};

const doubleMapArrow = array.map(item => item * 2);

const doubleMap = function(data) {
  return data.map(function (item) {
    return item * 2
  })
};

// console.log(double(array));
// console.log(doubleMapArrow);
// console.log(doubleMap(array));

const users = [
  { name: 'Mango', isActive: true },
  { name: 'Poly', isActive: false },
  { name: 'Ajax', isActive: true },
];

// Для каждого элемента коллекции (user) вернем значение поля name
const names = users.map(user => user.name);

console.log(names); // ["Mango", "Poly", "Ajax"]
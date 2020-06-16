// TODO: Императивный и Декларативный подходы

const double = function(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i += 1) {
    result.push(arr[i] * 2)
  }

  return result;
};
const data = [1,2,3,4,5];

const double2 = function(arr) {
  return arr.map(item => item*2)
};

const double3 = function(arr) {
  return arr.map(function(item) {
    return item * 2;
  })
};

// console.log(double(data));
// console.log(double2(data));
// console.log(double3(data));

//TODO: clear functions

const sum = function(a, b) {
  return a + b;
};

const f = function(x) {
  return x + 1;
};


//TODO: dirty functions

const c = 23;

const sum2 = function(a, b) {
  return a + b + c;
};

const generateID = () => Math.floor(Math.random() * 10000);

const createUser = (name, age) => ({
  id: generateID(),
  name,
  age
});

// console.log(createUser('Peter', 23));
// console.log(createUser('Peter', 23));
// console.log(createUser('Peter', 23));

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers, 2);

// Произошла мутация исходных данных
// console.log(numbers); // [2, 4, 6, 8, 10]

// const pureMultiply = (array, value) => {
//   const result = [];
//
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * 2);
//   }
//
//   return result;
// };
//
// const doubledNumbers = pureMultiply(numbers, 2);
//
// console.log(doubledNumbers);
// console.log(numbers);
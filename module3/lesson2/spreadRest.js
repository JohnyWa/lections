const numbers = [1,2,3,4,5]; // (1,2,3,4,5)

//TODO: spread arguments.

// const max = Math.max(...numbers);
// const max2 = Math.max(1,2,3,4,5);
// console.log(max);
// console.log(max2);

//TODO: copy array

// const arr = ['test', 'something'];
// const arr2 = [...arr];
//
// console.log(arr);
// console.log(arr2);
// console.log(arr2 === arr);

//TODO: spread string

// const str = 'Hello';
// const array = [...str];
//
// console.log(array);

//TODO: spread arrays
//
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [7,8,9];
//
// const result = arr1.concat(arr2, arr3);
// const result2 = [...arr1, ...arr3, ...arr2];
//
// console.log(result);
// console.log(result2);

//TODO: spread objects

// const user1 = {name: 'Petro', height: 190};
// const user2 = {name: 'Sashko', weight: 80};
//
// const result = Object.assign({}, user1, user2); //old method...
// const result2 = {...user1, ...user2, test:555};
//
//
// console.log(result);
// console.log(result2);

//TODO: REST

// const sum = function(...rest){
//   let result = 0;
//   for(const res of rest) {
//     result += res;
//   }
//
//   return result;
// };
//
// const sum2 = (...rest) => rest.reduce((acc, curr) => acc + curr, 0);
//
// console.log(sum(1, 2, 3));
// console.log(sum2(1, 2, 3));\

// TODO: Остаткові параметри

// const customPow = function(degree, ...args) {
//   let result = [];
//
//   for(const arg of args) {
//     result.push(arg ** degree);
//   }
//
//   return result;
// };
//
// console.log(customPow(2, 2, 3, 4));

// TODO: Не можна так робити

// const customPow = function(...args, degree) {
//
// };
//
// const customPow = function(degree, ...args, ...args2) {
//
// };
// const numbers = [1,2,3,4,5];
//
// const arrayItemsLog = function(items) {
//   for(const item of items) {
//     console.log(item);
//   }
// };
//
// arrayItemsLog(numbers);




// const customMathPow = function(number, degree) {
//   return number ** degree;
// };
//
// console.log(customMathPow(2, 5));
// console.log(customMathPow(2, 3));


// const sum = function(...params) {
//   let result = 0;
//
//   for(const param of params){
//     result += param;
//   }
//
//   return result;
// };
//
// console.log(sum(1, 2, 3, 4, 20, 25));

// const st = "I fo yes superlongword function"

// const findBiggestWord = function(str) {
//   const splitString = str.split(' ');
//   let biggestWorld;
//
//   for(let i = 0; i < splitString.length; i += 1) {
//     if(i === 0) {
//       biggestWorld = splitString[i];
//     }
//     if(splitString[i].length > biggestWorld.length) biggestWorld = splitString[i];
//   }
//
//   return biggestWorld;
// };
//
// const findBiggestWord = function(str) {
//   const splitString = str.split(' ');
//
//   return splitString.reduce((acc, curr) => curr.length > acc.length ? curr: acc, "")
// };

// console.log(findBiggestWord(st));

// const numbers = [1, 25, 10, 2, 10, 3, 25, 7];
//
// const customSet = function(items) {
//   let result = [];
//
//   for(const item of items) {
//     if(!result.includes(item)) {
//       result.push(item);
//     }
//   }
//
//   return result;
// };
//
// console.log(customSet(numbers));


// const numbers = [1, 25, 10, 2, 10, 3, 25, 7]; // [1, 2, 3, 7]
//
// const getUniqNumbers = function(items){
//   let result = [];
//
//   for(const item of items) {
//     if(items.indexOf(item) === items.lastIndexOf(item)) {
//       result.push(item);
//     }
//   }
//
//   return result;
// };
// console.log(numbers.indexOf(25));
// console.log(numbers.lastIndexOf(25));

// console.log(getUniqNumbers(numbers));

// const formatString = function (string, cutLimit) {
//   const symbols = string.split('');
//
//   if (symbols.length <= cutLimit) {
//     return string;
//   } else {
//     symbols.length = cutLimit;
//     symbols.splice(cutLimit, 0, '...');
//     return symbols.join('');
//   }
// };
//
//
// console.log(
//   formatString('Puppies are among the cutest animals on earth. Many resemble small, stuffed toys more',
//     25)
// );
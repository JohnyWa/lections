//TODO: sum numbers

// const numbers = [1,2,3,4,5];
// const initValue = 0;
//
// const sum = numbers.reduce((acc, curr) => {
//   return acc + curr;
// }, initValue);

//1) (acc = initValue = 0) curr = 1 //0 + 1 = 1
//2) (acc = 0 + 1) curr = 2 // 1 + 2 = 3
//3) (acc = 3) curr = 3 // 3 + 3 // 6
//4) (acc = 6) curr = 4 // 10
//5) (acc = 10) curr = 5 // 15

// console.log(sum);

// const arr = [{x: 5}, {x: 10}, {x: 100}];
//
// //TODO: sum numbers in objects
//
// const sumX = arr.reduce(function(acc, curr){
//   return acc + curr.x;
// }, 0);
//
// console.log(sumX);
//
// // TODO flattened array
//
// const flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, curr) => {
//   return [...acc, ...curr]
// }, []);
//
// const flattened2 = [[0, 1], [2, 3], [4, 5]].reduce((acc, curr) => {
//   return acc.concat(curr)
// }, []);
//
// console.log(flattened);
// console.log(flattened2);
//
// const friends = [
//   {
//     name: 'Ira',
//     books: ['Колобок', 'Гарі Потер']
//   },
//   {
//     name: 'Peter',
//     books: ['Володор перстнів', 'Хобіт']
//   },
//   {
//     name: 'Pasha',
//     books: ['Енеїда', 'Кобзар']
//   },
// ];
//
// const allBooks = friends.reduce((acc, curr, i) => {
//     console.log('iteration', i);
//     console.log('acc', acc);
//     console.log('curr', curr);
//     return [...acc, ...curr.books];
//   }, ['Буквар']);

// console.log(allBooks);
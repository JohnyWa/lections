// TODO: Promise Simple example

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success!');
//   }, 2000);
// });
//
// console.log(promise);

// TODO: Promise then & catch

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.ceil(Math.random() * 10) % 2 === 0;
//
//     if(success) {
//       resolve('Success!!!!');
//     }
//
//     reject('Rejected!!!!')
//   }, 1000)
// });
//
// promise
//   .then(value => console.log(value))
//   .catch(error => console.warn(error));

// TODO: Promise finally

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function(){
//     resolve(10);
//   }, 2000);
// });
//
// promise.then(value => {
//   console.log('First then value: ', value);
//
//   return value ** 2;
// }).then(value => {
//   console.log('Second then value: ', value);
//   return value/2;
// }).then(value => {
//   console.log('Third then value: ', value);
//
//   return value + 5;
// }).then(value => {
//
//   console.log('Fourth then value: ', value);
// }).catch(error => console.warn('Error', error))
// .finally(() => console.log('Finally'));

// TODO: Promise all

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };
//
// const makeRejectedPromise = (text, delay) => {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => rejected(text), delay);
//   });
// };
//
// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 5000);
// const promiseC = makePromise('promiseC', 2000);
//
// console.log([promiseA, promiseB, promiseC]);
//
// Promise.all([promiseA, promiseB, promiseC])
//   .then(result => console.log(result)) //["promiseA", "promiseB"]
//   .catch(err => console.log(err));

// TODO: Promise race

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };
//
// const promiseA = makePromise('promiseA', 3000);
// const promiseB = makePromise('promiseB', 5000);
// const promiseC = makePromise('promiseC', 2000);
//
// Promise.race([promiseA, promiseB, promiseC])
//   .then(result => console.log(result)) // "promiseA"
//   .catch(err => console.log(err));
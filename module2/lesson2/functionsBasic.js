//TODO обявлення

// function func() {
//   console.log('Function');
// }

// const func = function () {
//   console.log('Function2');
// };
//

// const func3 = () => {}

// func();

//TODO Параметри и ретурн

// const sum = function(a, b) {
//   return a + b;
// };
//
// console.log(sum(2, 3));
//
// const sum2 = function(...params) {
//   console.log(params)
// };

// const sum3 = function(a, ...params) {
//   let result = [];
//
//   for(const param of params) {
//     result.push(a * param);
//   }
//
//   return result;
// };
//
// console.log(sum3(2, 2, 3, 4, 5, 6, 65, 65, 656, 5));
// console.log(sum3(5, 2, 3, 4, 5, 6, 65, 65, 656, 5));
// console.log(sum3(4, 2, 3, 4, 5, 6, 65, 65, 656, 5));

//TODO Параметри по замовчуваню

// const fioMaker = function(name = 'John', surname = 'Dou') {
//   console.log(`Hello, ${name} ${surname}`);
// };
//
// fioMaker('Petro', 'Petrov');
// fioMaker('Ivan');
// fioMaker();

//TODO Порядок виклику

// const fnA = function() {
//   console.log('Начала выполняться [fnA]');
//   fnB();
//   console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// };
//
// const fnB = function() {
//   console.log('Выполняется [fnB]');
// };
//
// console.log('Начал выполнение [main]');
// fnA();
// console.log('Продолжил выполняться [main] после выхода из [fnA]');

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */

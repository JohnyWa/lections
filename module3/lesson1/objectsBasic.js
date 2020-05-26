// TODO: Last lesson
// const formatString = function (string) {
//   const symbols = string.split('');
//
//   if (symbols.length <= 20) {
//     return string;
//   } else {
//     symbols.length = 20;
//     symbols.splice(20, 0, '...');
//     return symbols.join('');
//   }
// };

// const formatString2 = function(str){
//   return str.length <= 20 ? str : str.slice(0, 20) + '...';
// };

// console.log(
//   formatString2('Puppies are among the cutest animals on earth. Many resemble small, stuffed toys more')
// );
//
// console.log(
//   formatString2('Puppies are d')
// );

//TODO Объекты, создание через литерал

// let user = { name: 'John', age: 23, 'super variable': 45};

//TODO: add

// user.test = 'test';
// user['test2'] = 'test';

// console.log(user);
//TODO: get

// console.log(user['super variable']);
// console.log(user.age);


//TODO: key as variable

// const key = 'name';
// console.log(user[key]);
//TODO: delete

// delete user.age;
// console.log(user);

//TODO: short...

// const name = 'Petro';
// const age = 25;
//
// let user2 = {
//   name,
//   age,
//   job: 'Engineer'
// };
//
// console.log(user2);

//TODO:

// const key = 'person';
// const getKey = function() {
//   return 'age';
// };
//
// console.log(getKey());
// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };
//
// console.log(object); // {person: 'Mango', age: 2}

//TODO: методы объекта and 'this'

// const user = {
//   name: 'John',
//   surname: 'Wayne',
//   greeting() {
//     console.log(`Hello, ${this.name} ${this.surname}`);
//
//     this.greeting2();
//   },
//   greeting2: function() {
//     console.log(this.name)
//   }
// };
//
// user.greeting2();

//TODO: for...in

// const hero = {
//   name: 'Superman',
//   strength: 1000000,
//   speed: '300000 km/s',
//   title: 'super hero'
// };
//
// for(let key in hero) {
//   console.log(hero[key]);
// }

//TODO: Object.keys

// const keys = Object.keys(hero); //array of keys
//
// for(const key of keys) {
//   console.log(hero[key])
// }

// TODO: Object.values

// const values = Object.values(hero); //array of values
//
// console.log(values);


// let salaries = {
//   John: 400,
//   Kate: 300,
//   Jack: 259,
//   Petr: 200,
//   Jane: 278,
// };

// 1 way
// let result = 0;
//
// for(let key in salaries) {
//   result += salaries[key];
// }
//
// console.log(result);

// 2 way
// const values = Object.values(salaries);
//
// let result = 0;
//
// for(const value of values) {
//   result += value;
// }
//
// console.log(result);

// TODO: Object.entries

// const entries = Object.entries(salaries);
//
// for(const entrie of entries) {
//   console.log(`${entrie[0]} : ${entrie[1]}`)
// }

//TODO: isEmpty function examples

// function isEmpty(obj){
//   for(let key in obj) {
//     return false;
//   }
//
//   return true;
// }

// function isEmpty(obj){
//   return !Object.keys(obj).length > 0
// }


// console.log(isEmpty({}));
// console.log(isEmpty({name: 'John'}));
// console.log(isEmpty({1: 5, 2: 6}));

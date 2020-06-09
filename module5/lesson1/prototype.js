// TODO prototype

// const user = {
//   name: 'Peter',
//   power: 1000,
//   greeting() {
//     console.log('Hello world');
//   }
// };

// Object.prototype.saySomething = function() {
//   console.log('saySomething')
// };

// console.log(user);
// console.log(user.name);
// user.greeting();
// user.saySomething();
//
// console.log(user.toString());

// const a = {};
// a.saySomething();
// [1,2,3].saySomething();
// 'str'.saySomething();


// TODO Object.create()

// const user = {
//   name: 'Peter',
//   power: 1000,
//   greeting() {
//     console.log('Hello world');
//   }
// };
//
// const superUser = Object.create(user);
//
// console.log(superUser);
// // console.log(superUser.name);
// // superUser.greeting();
// console.log(superUser.__proto__ === user);
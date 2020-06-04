//TODO: bind

// const user = {
//   name: 'Peter',
//   showUserData(age, height) {
//     console.log(`User: ${this.name}, height: ${age}, height: ${height}`);
//   }
// };
//
// const user2 = {
//   name: 'Masha'
// };
//
// const user3 = {
//   name: 'Johny'
// };

// user.showUserData();

// const bindUser2Context = user.showUserData.bind(user2);
//
// bindUser2Context(20, 170);
// bindUser2Context(30, 180);
//
//
// function  multiple(a, b) {
//   return a * b;
// }
//
// let double = multiple.bind(null, 2);
//
// console.log(double(3));
// console.log(double(5));
// console.log(double(100));

// TODO: call

// const user = {
//   name: 'Peter',
//   showUserData(age, height) {
//     console.log(`User: ${this.name}, age: ${age}, height: ${height}`);
//   }
// };
//
// const user2 = {
//   name: 'Clark'
// };
//
// user.showUserData();
// user.showUserData.call(user2); // call
// user.showUserData.call(user2, 30, 190); // call with parameters
// user.showUserData.apply(user2, [30, 190]); // call with parameters
// const clarkInfo = user.showUserData.bind(user2);
// clarkInfo(200, 120);

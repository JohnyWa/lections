const validator = require('validator');
const _ = require('lodash');

// console.log(_.random(0, 100));

// const validateEmail = email => {
//   return validator.isEmail(email);
// };

// console.log(
//   'Is mango@mail.com a valid email?: ',
//   validateEmail('mango@mail.com'),
// );
//
// console.log(
//   'Is Mangozedog.com a valid email?: ',
//   validateEmail('Mangozedog.com'),
// );

const sum = (a, b) => a + b;

sum(10, 20);

class Animal{
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} can move!!!`);
  }
}
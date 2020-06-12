class ClassUser {
  static PI = 3.14;

  static sum(a, b) {
    return a + b;
  }

  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // changeAge(mewAge) {
  //   this.age = mewAge;
  // }

  getUserInfo() {
    console.log(`My name is ${this._name} and I am ${this.age} years old`);
  }
}


const User = function(name, age) {
  this.name = name;
  this.age = age;
};

User.PI = 3.14;

User.sum = function(a, b) {
  return a + b;
};

// User.prototype.changeAge = function(newAge) {
//   this.age = newAge;
// };

User.prototype.getUserInfo = function() {
  console.log(`My name is ${this.name} and I am ${this.age} years old`);
};

const classUser = new ClassUser('Pedro', 20);
const user = new User('Pedro', 20);

console.log(user.name);
user.name = 'Vasyl';
console.log(user);
// console.log(classUser);


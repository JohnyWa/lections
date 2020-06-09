const Hero = function(name, age, power) {
  this.name = name;
  this.age = age;
  this.power = power

  this.fight = function () {
  console.log('I can fight');
  }
};

const newHero = new Hero('Peter', 25, 1904340);

newHero.fight();
const newHero2 = new Hero('Peter', 45, 1923440);
const newHero3 = new Hero('Peter', 14, 1902220);
const newHero4 = new Hero('Peter', 100, 3434);

console.log(newHero);
console.log(newHero2);
console.log(newHero3);
console.log(newHero4);

// const Hero1 = function(name, age, power) {
//   // this = {}
//
//   this.name = name;
//   this.age = age;
//   this.power = power
//
//
//   return this;
// };
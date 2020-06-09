const Animal = function(name) {
  this.name = name;
};

Animal.prototype.move = function() {
  console.log(`My name is ${this.name} I can run`);
};

const newAnimal = new Animal('Kesha');
// console.log(newAnimal);
newAnimal.move();

const Bird = function(name, color, wingLength){
  Animal.call(this, name);

  this.color = color;
  this.wingLength = wingLength;
};

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function() {
  console.log(`My name is ${this.name} I can fly and i have ${this.color} color and wings length ${this.wingLength}`);
};

Bird.prototype.move = function() {
  console.log(`My name is ${this.name} I can run and fly`);
};

const anyBird = new Bird('Eagle', 'gray', 100);
// console.log(anyBird);
// anyBird.move();

const Fish = function(name, color, wingLength, swimLength){
  Bird.apply(this, [name, color, wingLength]);

  this.swimLength = swimLength;
};

Fish.prototype = Object.create(Bird.prototype);
Fish.prototype.constructor = Fish;

const newFish = new Fish('Som', 'black', null, 10);
console.log(newFish);
newFish.move();
newFish.fly();
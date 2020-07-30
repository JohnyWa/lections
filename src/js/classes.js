class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  greeting() {
    console.log(`It is ${this.name}, ${this.color} color`);
  }
}

const anyAnimal = new Animal('Peter', 'yellow');

console.log(anyAnimal);
anyAnimal.greeting();

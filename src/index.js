// TODO: Композиція vs наслідування(просто для ознайомлення)

const createProgrammer = function(name) {
  const programmer = {name};

  return {
    ...programmer,
    ...writeCode(programmer)
  }
};

const FrontedDev = function(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...knowReact(programmer)
  }
};

const BackendDev = function (name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...knowNode(programmer)
  }
};

const FullStack = function (name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...knowNode(programmer),
    ...knowReact(programmer),
    ...knowJava(programmer)
  }
};

const writeCode = function({name}) {
  return {
    code: () => console.log(`${name} can write code!...`)
  }
};

const knowReact = function ({name}) {
  return {
    react: () => console.log(`${name} can write code on React!...`)
  }
};

const knowNode = function ({name}) {
  return {
    node: () => console.log(`${name} can write code on Node JS!...`)
  }
};

const knowJava = function({name}) {
  return {
    java: () => console.log(`${name} can write code on Java!...`)
  }
};

const fullStackDev = new FullStack('Petro');
fullStackDev.code();
fullStackDev.node();
fullStackDev.react();
fullStackDev.java();


// class Programmer {
//   constructor(name) {
//     this.name = name;
//   }
//
//   coding() {
//     console.log(`${this.name} can write code!...`)
//   }
// }

//
// class Frontend extends Programmer{
//   react() {
//     console.log(`${this.name} can write code on React!...`)
//   }
// }
//
// class Backend extends Programmer{
//   nodeJS() {
//     console.log(`${this.name} can write code on NodeJS!...`)
//   }
// }
//
// class FullSTack extends Backend {
//   react() {
//     console.log(`${this.name} can write code on React!...`)
//   }
// }
//
// const front = new Frontend('Johnatan');
// front.react();
// front.coding();
//
// const fullStack = new FullSTack('Ivan');
// fullStack.nodeJS()
// fullStack.coding()
// fullStack.react()


// TODO: find, forEach, every & some
// const arr = [
//   {name: '1', age: 10},
//   {name: '2', age: 15},
//   {name: '3', age: 20},
//   {name: '4', age: 10},
//   {name: '5', age: 23},
// ];

// TODO: find

// Array.prototype.find = function (callback) {
//   for(let i = 0; i < this.length; i += 1) {
//     const passed = callback(this[i], i, this);
//
//     if(passed) {
//       return this[i]
//     }
//   }
// };
//
// console.log(arr.find(data => data.age === 23));

// TODO: forEach
// Array.prototype.forEach = function (callback) {
//   for(let i = 0; i < this.length; i += 1) {
//     callback(this[i], i, this)
//   }
// };

// const tempArr = [];
// arr.forEach(data => console.log(data.age));
// arr.forEach(data => tempArr.push(data.age));
// console.log(tempArr);

// TODO: every

// Array.prototype.every = function (callback) {
//   for(let i = 0; i < this.length; i += 1) {
//     const passed = callback(this[i], i, this);
//
//     if(!passed) {
//       return false;
//     }
//   }
//
//   return true;
// };

// console.log(arr.every(data => data.age > 5));
// console.log(arr.every(data => data.age > 10));

// TODO: some

// Array.prototype.some = function (callback) {
//   for(let i = 0; i < this.length; i += 1) {
//     const passed = callback(this[i], i, this);
//
//     if(passed) {
//       return true;
//     }
//   }
//
//   return false;
// };

// console.log(arr.some(data => data.age > 10));
// console.log(arr.some(data => data.age === 10));
// console.log(arr.some(data => data.age === 11));

// TODO: export, export default
// import { add, min, multiple } from './test.js';
//
// console.log(multiple(5,5));
// console.log(min(5, 5));
// console.log(multiple(5, 5));

// TODO: static methods

// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//
//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
//
//   static createTodays() {
//     // помним, что this = Article
//     return new this("Сегодняшний дайджест", new Date());
//   }
// }
//
// // использование
// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1))
// ];
//
//
// articles.sort(Article.compare);
//
// console.log(articles);
//
// let article = Article.createTodays();
//
// console.log(article); // Сегодняшний дайджест

// TODO: JSON

// const student = {
//   name: 'John',
//   age: 40,
//   wife: null,
//   skills: ['react', 'goland'],
//   test() {
//     console.log(this.name);
//   }
// };
//
// const json = JSON.stringify(student);
//
// console.log('JSON', json);
// console.log('JSON-Parse', JSON.parse(json));
// console.log('JSON-type', typeof json);
// console.log('JS', student);

// JSON.stringify
// JSON.parse

// async function postLoader(callback) {
//   const response = await fetch('http://jsonplaceholder.typicode.com/posts/1');
//   let post = await response.json();
//   callback(post);
// }
//
// function onPostLoaded(postData) {
//   console.log('Post was successfully loaded!');
//   console.log('Response:');
//   console.log(postData);
// }
//
// postLoader(onPostLoaded);

// TODO: destruct...

// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// // a =1, b = 2, c = 3
//
// const [a, b, c, ...d] = arr;
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
//
// const arr2 = ['color', 'height:200'];
//
// const [ , , width2 = 'random'] = arr2;
//
// const [first] = arr2;
//
// console.log(width2);

// const superHero = {
//   name: 'Superman',
//   realName: 'Clark',
//   stats: {
//     power: 1000000,
//     speed: 5000000,
//     agility:3000,
//     armor: 2000,
//     test: {
//       testValue: 666
//     }
//   }
// };
//
// const { realName: secretName, stats: { power, speed}, someProp = 'This is some prop' } = superHero;
//
// console.log(power);
// console.log(someProp);
//
// const greeting = ({name, surname}) => {
//   console.log(`Hello: ${name}-${surname}`);
// };
//
// greeting({name: 'Clark', surname: 'Kent'});

// TODO: get & set

// class Guest {
//   constructor(name, roomNumber) {
//     this._name = name;
//     this._roomNumber = roomNumber;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   getName() {
//     return this._name;
//   }
//
//   setName(name) {
//     this._name = name;
//   }
//
//   set name(value) {
//     this._name = value;
//   }
// }
//
// const mango = new Guest('Mango', 26);
//
// console.log(mango.name);
// console.log(mango.getName());
//
// mango.name = 'Mango the Fluffy';
// console.log(mango.name);
// mango.setName('Peter');
// console.log(mango.name);
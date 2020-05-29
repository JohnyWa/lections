//TODO: destruct... array

let myArray = [3, 5, 7, 6, 7, 25, 100];

// const [a, b, c] = myArray;
//
// const text = `First number of array: ${a}, second: ${b}, third: ${c}`;
// console.log(text);

// const [first] = myArray;
//
// console.log(first);

// const [, , third] = myArray;
//
// console.log(third);

// const [first, second, third, ...other] = myArray;
//
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(other);

// const heroes = ['Superman', 'Batman', 'Flash', 'Spiderman'];
//
// const [ hero1, hero2, hero3, hero4 = 'Chack Norris'] = heroes;
//
// console.log(hero1);
// console.log(hero2);
// console.log(hero3);
// console.log(hero4);

//TODO: destruct... object

// const obj = {a: 1, b: 2, c:3, d: 4};
//
// const {a, b, c} = obj;
//
// console.log(a);
// console.log(b);
// console.log(c);

// const heroes = {hero1: 'Superman', hero2: 'Batman', hero3: 'Flash', hero4: 'Spiderman'};
//
// const {hero1, test = 'test', ...otherHeroes} = heroes;
//
// console.log(hero1);
// console.log(otherHeroes);
// console.log(test)

// const heroes = {hero1: 'Superman', hero2: 'Batman', hero3: 'Flash'};
//
// const {hero1: superHero = 'Chack Noris', hero2, hero3 = 'Joker'} = heroes;
//
// console.log(superHero);
// console.log(hero2);
// console.log(hero3);

// const superHero = {
//   name: 'Superman',
//   realName: 'Clark',
//   stats: {
//     power: 1000000,
//     speed: 5000000,
//     agility: 3000,
//     armor: 2000,
//   }
// };
//
// const { name, realName: surname, stats: {agility = 666, armor, power, speed}} = superHero;
//
// console.log(name);
// console.log(surname);
// console.log(agility);
// console.log(armor);
// console.log(power);
// console.log(speed);
// TODO: foreach print data

// const data = [
//   {productTitle: "Яблоко", price: 30, availableWeight: 10},
//   {productTitle: "Апельсин", price: 40, availableWeight: 20},
//   {productTitle: "Груша", price: 50, availableWeight: 25}
// ];
//
// data.forEach(function (item, i) {
//   console.log(
//     `${++i}) 1 кг ${item.productTitle}, і коштує ${item.price} , доступно ${item.availableWeight} кг`
//   )
// });

//TODO: map degree function
//
// const numbers = [1,2,3,4,5];
//
// const arrayElementsDegree = function(degree, array) {
//   return array.map(function(item){
//     return item ** degree;
//   })
// };
//
// const arrayElementsDegreeArrow = (degree, array) => array.map(item => item ** degree);
//
// console.log(arrayElementsDegree(3, numbers));
// console.log(arrayElementsDegreeArrow(5, numbers));
// console.log(arrayElementsDegreeArrow(10, numbers));
// console.log(numbers);

//TODO: map HTML create function


// const heroes = [
//   {
//     name: 'Clark',
//     power: 10000000,
//     speed: 300000,
//     alterName: 'Superman'
//   },
//   {
//     name: 'Peter',
//     power: 1000,
//     speed: 100,
//     alterName: 'Spider man'
//   },
//   {
//     name: 'Batman',
//     power: 500,
//     speed: 300,
//     alterName: 'Bruce'
//   },
// ];
//
// const printHeroes = function(arr) {
//   const containerRef = document.getElementById('container');
//
//   const html = arr.map(function(hero){
//     return `
//       <div>
//         Hero name: ${hero.name} - ${hero.alterName}
//         Hero power: ${hero.power}
//         Hero speed: ${hero.speed}
//       </div>
//     `;
//   });
//
//   console.log(html.join(''));
//
//   containerRef.innerHTML = html.join('');
// };
//
// printHeroes(heroes);

//TODO: filter only unique data

// const numbers = [1,2,5,2,5,6,24,100,24]; // [1, 6, 100]
//
// const filtered = numbers.filter(function(item, i, arr){
//   return arr.indexOf(item) === arr.lastIndexOf(item)
// });
//
// console.log(filtered);

// const numbers = [1,2,5,2,5,6,24,100,24];
//
// console.log(numbers.indexOf(5));
// console.log(numbers.lastIndexOf(5));

//TODO: filter checkout cart

// const cart = [
//   {id: 1, brand: 'Samsung', title: 'Galaxy s20 ultra', price: 37000, isAvailable: true},
//   {id: 2, brand: 'Apple', title: 'Iphone 11 pro', price: 40000, isAvailable: true},
//   {id: 3, brand: 'Samsung', title: 'Galaxy Z Flip', price: 42000, isAvailable: false},
//   {id: 4, brand: 'Apple', title: 'Iphone 11', price: 25000, isAvailable: false},
//   {id: 5, brand: 'Samsung', title: 'Galaxy Note 10+', price: 29000, isAvailable: true},
//   {id: 6, brand: 'Huawei', title: 'P40 pro', price: 25000, isAvailable: true},
//   {id: 7, brand: 'OnePlus', title: 'OnePlus 8', price: 19000, isAvailable: true},
//   {id: 8, brand: 'OPPO', title: 'Reno3', price: 18000, isAvailable: false},
//   {id: 9, brand: 'Xiaomi', title: 'Mi 10', price: 23000, isAvailable: true},
//   {id: 10, brand: 'Xiaomi', title: 'Redmi Note 8 pro', price: 6700, isAvailable: true},
// ];
//
// const allAvailable = cart.filter(function(item){
//   return item.isAvailable;
// });
//
// const allNotAvailable = cart.filter(function(item){
//   return !item.isAvailable;
// });
//
// // console.table(allAvailable);
// // console.table(allNotAvailable);
//
// const allSamsung = cart.filter(function(item) {
//   return item.brand === 'Samsung'
// });
//
// const firstXiaomi = cart.find(function(item) {
//   return item.brand === 'Xiaomi';
// });
//
// const doublePrice = cart.map(function (item) {
//   return item.brand === 'Samsung' ? {...item, price: item.price * 0.9} : item;
// });
//
// const doublePrice2 = cart
//   .filter(data => data.brand === 'Samsung')
//   .map(data => ({...data, price: data.price * 0.9}));
//
// console.table(doublePrice2);


// let users = [
//   { name: 'Rinat', skills: ['JS', 'CSS', 'React'] },
//   { name: 'Borys', skills: ['JS', 'CSS', 'Angular'] },
//   { name: 'Pavlo', skills: ['JS', 'CSS', 'Vue'] }
// ];
//
// const angularUser = users.find(item => item.skills.some(item => item === 'Angular'));
// console.log(angularUser);

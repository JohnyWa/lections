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


// TODO: total price

// const totalPrice = cart.reduce((acc, curr) => {
//   return acc + curr.price;
// }, 0);
//
// console.log(totalPrice);
//
// // TODO: Every brand count
//
// const everyBrandsCount = cart.reduce((acc, curr) => {
//   return {...acc, [curr.brand]: (curr.brand in acc) ? acc[curr.brand] += 1 : 1}
// }, {});
//
// const everyBrandsCount2 = cart.reduce(function(acc, curr){
//   console.log('acc', acc);
//   if(curr.brand in acc) {
//     acc[curr.brand] += 1;
//   }else {
//     acc[curr.brand] = 1
//   }
//
//   return acc;
// }, {});


// console.log(everyBrandsCount);
// console.log(everyBrandsCount2);

const cart = [
  {id: 1, brand: 'Samsung', title: 'Galaxy s20 ultra', price: 37000, isAvailable: true},
  {id: 2, brand: 'Apple', title: 'Iphone 11 pro', price: 40000, isAvailable: true},
  {id: 3, brand: 'Samsung', title: 'Galaxy Z Flip', price: 42000, isAvailable: false},
  {id: 4, brand: 'Apple', title: 'Iphone 11', price: 25000, isAvailable: false},
  {id: 5, brand: 'Samsung', title: 'Galaxy Note 10+', price: 29000, isAvailable: true},
  {id: 6, brand: 'Huawei', title: 'P40 pro', price: 25000, isAvailable: true},
  {id: 7, brand: 'OnePlus', title: 'OnePlus 8', price: 19000, isAvailable: true},
  {id: 8, brand: 'OPPO', title: 'Reno3', price: 18000, isAvailable: false},
  {id: 9, brand: 'Xiaomi', title: 'Mi 10', price: 23000, isAvailable: true},
  {id: 10, brand: 'Xiaomi', title: 'Redmi Note 8 pro', price: 6700, isAvailable: true},
];

// TODO: Chaining

const allSamsungCost = cart
  .filter(data => data.brand === 'Samsung')
  .reduce((acc, curr) => acc + curr.price, 0);

console.log(allSamsungCost);

const allSamsungSortedData = cart
  .filter(data => data.brand === 'Samsung')
  .sort((a, b) => b.price - a.price);


console.table(allSamsungSortedData);
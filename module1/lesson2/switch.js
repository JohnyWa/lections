const fruit = prompt('What is your favorite fruit');

// if(fruit === 'Apple') {
//   console.log('Apple costs 2$');
// }else if(fruit === 'Lemon') {
//   console.log('Lemon costs 3$');
// }else if(fruit === 'Orange' || fruit === 'Banana' || fruit ==='Ananas') {
//   console.log('Orange, Banana, Ananas costs 4$');
// }else if(fruit ==='Mangoes') {
//   console.log('Mangoes costs 4$');
// }else {
//   console.log('Sorry, we are not have your fruit');
// }

let fruitPrice;

switch(fruit) {
  case 'Apple':
    fruitPrice = 2;
    break;
  case 'Lemon':
    fruitPrice = 3;
    break;
  case 'Orange':
  case 'Banana':
  case 'Ananas':
    fruitPrice = 4;
    break;
  case 'Mangoes':
    fruitPrice = 5;
    break;
  default:
    console.log('Sorry, we are not have your fruit');
}

console.log(`${fruit} price:`, fruitPrice);
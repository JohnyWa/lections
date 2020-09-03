const value = 0;

const result =  value ? value: 'Default'; // value || 'Default'

//Same
const result2 =  value != null ? value : 'Default';
const result3 = value ?? 'Default';

// console.log('Result: ', result);
// console.log('Result2: ', result2);
// console.log('Result3: ', result3);

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();
console.log(counter());
console.log(counter());
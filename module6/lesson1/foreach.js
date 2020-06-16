const numbers = [1,2,3,4];

for (let i = 0; i < numbers.length; i += 1) {
  // console.log('for: ', numbers[i]);
}

let sum = 0;
numbers.forEach(function (item, i, array) {
  console.log(`User number: ${item}`);
  sum += item;
});

const sumReduce = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumReduce);
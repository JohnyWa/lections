const areYouOnline = confirm('Are you online?');
let result2;

if(areYouOnline) {
  result2 = 'green'
} else {
  result2 = 'red'
}

const result = areYouOnline ? 'green': 'red';



console.log(result);
console.log(result2);
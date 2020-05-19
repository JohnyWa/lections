let index = 0;
let maxValue = 0;

const string = "test clients yes function hello";
const words = string.split(' ');

for(let i = 0; i < words.length; i += 1) {
  if(words[i].length > maxValue) {
    maxValue = words[i].length;
    index = i;
  }
}

console.log(words[index]);


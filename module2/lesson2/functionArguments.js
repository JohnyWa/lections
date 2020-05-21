//TODO: Pseudo Array arguments

const someFunction = function(...params) {
  console.log(arguments);// псевдомасив arguments
  console.log(Array.from(arguments));// Array.from
  console.log(params)
};

someFunction(1,2,3);
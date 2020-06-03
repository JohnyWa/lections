// TODO: callback functions

// const greeting = function(name){
//   alert(`Hello, ${name}`);
// };
//
// const printUser = function(callback) {
//   const name = prompt('What is your name?');
//
//   callback(name);
// };
//
// printUser(greeting);

// const someFunc = function () {
//   alert('Button has been clicked!!');
// };
//
// document.getElementById('btn-c').addEventListener('click', someFunc);

// TODO: callback async functions

// async function postLoader(callback) {
//   const response = await fetch('https://swapi.dev/api/people/1/');
//   let post = await response.json();
//   callback(post);
// }
//
//
// const onPostLoaded = function(postData) {
//   console.log('Post loaded success!!');
//   console.log('postData: ', postData);
// };
//
// postLoader(onPostLoaded);
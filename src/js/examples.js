// TODO: Промисификация функций

// const getPost = function (postId) {
//   const success = Math.ceil(Math.random() * 10) % 2 === 0;
//
//   const post = {id: postId, title: 'Random post', description: 'Random description'};
//   const error = `Post with id: ${postId} is not defined`;
//
//   return success ? post : error;
// };
//
// console.log(getPost(55555));

// TODO: callback version

// const getPost = function (postId, onSuccess, onError) {
//   setTimeout(() => {
//     const success = Math.ceil(Math.random() * 10) % 2 === 0;
//
//     if(success) {
//       const post = {id: postId, title: 'Random post', description: 'Random description'};
//       onSuccess(post);
//
//       return;
//     }
//
//
//     const error = `Post with id: ${postId} is not defined`;
//     onError(error);
//   }, 1000);
// };
//
// const onSuccess = post => {
//   console.log('Post: ', post)
// };
//
// const onError = error => {
//   console.log('Error: ', error);
// };
//
// getPost(55555, onSuccess, onError);

// TODO: promise version

// const getPost = function (postId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.ceil(Math.random() * 10) % 2 === 0;
//
//       if(success) {
//         const post = {id: postId, title: 'Random post', description: 'Random description'};
//         resolve(post);
//       }
//
//       const error = `Post with id: ${postId} is not defined`;
//       reject(error);
//     })
//   })
// };
//
// getPost(11111)
//   .then(post => console.log(post))
//   .catch(error => console.log(error));


// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
//
// xhr.responseType = 'json';
//
// xhr.send();
//
// xhr.onload = function () {
//   let responseObj = xhr.response;
//
//   console.log('Response data: ', responseObj);
// };

// function httpGet(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//
//     xhr.onload = function () {
//       if(this.status === 200) {
//         resolve(JSON.parse(this.response));
//       } else {
//         const error = new Error(this.statusText)
//
//         error.code = this.status;
//
//         reject(error)
//       }
//     };
//
//     xhr.onerror = function () {
//       reject(new Error('Network Error'))
//     };
//
//     xhr.send();
//   })
// }

// httpGet('https://jsonplaceholder.typicode.com/todos/1')
//   .then(post => console.log('Post: ', post))
//   .catch(error => console.log('Error: ', error));

// const urlsList = [
//   'https://jsonplaceholder.typicode.com/todos/1',
//   'https://jsonplaceholder.typicode.com/todos/4',
//   'https://jsonplaceholder.typicode.com/todos/3',
//   'https://jsonplaceholder.typicode.com/todos/2',
//   'https://jsonplaceholder.typicode.com/todos/5',
// ];
//
// const promisesArray = urlsList.map(url => httpGet(url));

// Promise.all(promisesArray)
//   .then(todos => console.log('todos: ', todos))
//   .catch(err => console.warn(err));

// Promise.race(promisesArray)
//   .then(todo => console.log('todo: ', todo))
//   .catch(err => console.warn(err));
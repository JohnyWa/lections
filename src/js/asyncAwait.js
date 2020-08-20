// const delay = ms => {
//   return new Promise(resolve => setTimeout(() => resolve(), ms));
// };
//
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
//
// function fetchData() {
//   return delay(3000)
//     .then(() => fetch(url))
//     .then(response => response.json())
//     .catch(e => console.warn(e));
// }
//
// fetchData().then(data => console.log(data)).catch(e => console.warn(e));
//
// async function fetchDataAsync() {
//   try{
//     await delay(3000);
//     const response = await fetch(url);
//     return await response.json()
//   } catch (e) {
//     throw new Error(e);
//   }
// }
//
// fetchDataAsync().then(data => console.log(data)).catch(e => console.warn(e));

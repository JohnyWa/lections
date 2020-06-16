const numbers = [1,2,-20,4,90,-45];

const positiveValues = numbers.filter(function (item) {
  return item > 0;
});
//
// console.log(numbers);
// console.log(positiveValues);


// const userList = [
//   {name: 'Peter', isOnline: true},
//   {name: 'Pasha', isOnline: false},
//   {name: 'Masha', isOnline: true},
//   {name: 'Sasha', isOnline: false},
//   {name: 'Lena', isOnline: true},
// ];
//
// const onlineUsers = userList.filter(function(user) {
//   return user.isOnline
// });
//
// const offlineUsers = userList.filter(function(user) {
//   return !user.isOnline
// });
//
// console.table(onlineUsers);
// console.table(offlineUsers);

// const userList = [
//   {name: 'Peter', isOnline: true},
//   {name: 'Pasha', isOnline: false},
//   {name: 'Masha', isOnline: true},
//   {name: 'Sasha', isOnline: false},
//   {name: 'Lena', isOnline: true},
// ];
//
// const fiveLettersName = userList.filter(function (user) {
//   return user.name.length === 5;
// });
//
// console.log(fiveLettersName);
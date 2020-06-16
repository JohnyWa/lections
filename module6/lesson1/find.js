const userList = [
  {id: 1, name: 'Peter', isOnline: true},
  {id: 2, name: 'Pasha', isOnline: false},
  {id: 3, name: 'Masha', isOnline: true},
  {id: 4, name: 'Sasha', isOnline: false},
  {id: 5, name: 'Lena', isOnline: true},
];

const masha = userList.find(function (item) {
  return item.id === 25;
});

console.log(masha);
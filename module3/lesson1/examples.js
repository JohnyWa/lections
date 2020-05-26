const users = [
  {name: 'Bill', surname: 'Gates', age: 64, job: 'Programmer', online: true, capital: 106},
  {name: 'Jeff', surname: 'Bezos', age: 56, job: 'Businessman', online: true, capital: 160},
  {name: 'Elon', surname: 'Musk', age: 48, job: 'Engineer', online: true, capital: 37},
  {name: 'Mark', surname: 'Zuckerberg', age: 36, job: 'Coder', online: false, capital: 87},
  {name: 'Warren', surname: 'Buffett', age: 89, job: 'Businessman', online: false, capital: 69},
];

const addFriendsCollection = function(items) {
  for(const item of items) {
    myFriendsList.addFriend(item);
  }
};

const myFriendsList = {
  friends: [],
  printFriends(arr) {
    if(arr) {
      console.table(arr);
      return;
    }
    console.table(this.friends)
  },
  addFriend(userData) {
    userData.id = `${userData.name}-${userData.age}`;
    this.friends.push(userData);
  },
  removeFriend(id) {
    for(let i = 0; i < this.friends.length; i += 1) {
      if(this.friends[i].id === id) {
        this.friends.splice(i, 1);
      }
    }
  },
  clearFriends() {
    this.friends = [];
  },
  printOnlineUsers() {
    let onlineUsers = [];

    for(const friend of this.friends) {
      if(friend.online) {
        onlineUsers.push(friend);
      }
    }

    this.printFriends(onlineUsers);
  },
  printOfflineUsers() {
    let offlineUsers = [];

    for(const friend of this.friends) {
      if(!friend.online) {
        offlineUsers.push(friend);
      }
    }

    this.printFriends(offlineUsers);
  },
  usersByAge(minAge, maxAge) {
    let result = [];

    for(const friend of this.friends) {
      if(friend.age >= minAge && friend.age <= maxAge) {
        result.push(friend);
      }
    }

    this.printFriends(result);
  },
  changeCapital(id, capital) {
    for(let i = 0; i < this.friends.length; i += 1){
      let currFriend = this.friends[i];
      if(currFriend.id === id) {
        currFriend.capital = capital
      }
    }
  },
  changeStatus(id) {
    for(let i = 0; i < this.friends.length; i += 1){
      let currFriend = this.friends[i];
      if(currFriend.id === id) {
        currFriend.online = !currFriend.online;
      }
    }
  }
};

addFriendsCollection(users);

// const btnRef = document.getElementById('btn_id');
// const btnClearRef = document.getElementById('btn_clear');
//
// btnRef.addEventListener("click", function(){
//   myFriendsList.printFriends();
// });
//
// btnClearRef.addEventListener("click", function(){
//   myFriendsList.clearFriends();
//   console.log('Cleared!!!');
// });

const btnRef = document.getElementById('btn-id');

const userInfo = {
  nameS: 'Peter',
  age: 20,
  greeting() {
    console.log(`Hello, I am ${this.nameS}, I am ${this.age} years old`);
  }
};


// btnRef.addEventListener('click', userInfo.greeting);
//
// btnRef.addEventListener('click', function() {
//   userInfo.greeting()
// });
// btnRef.addEventListener('click', userInfo.greeting.bind(userInfo));


const callUserInfo = function ({context, callback, id}) {
  const contextRef = document.getElementById(id);

  contextRef.addEventListener('click', callback.bind(context))
};

callUserInfo(
  {
    context: userInfo,
    callback: userInfo.greeting,
    id: 'btn-id'
  }
);

setTimeout(userInfo.greeting, 5000);
// TODO: this в глобальній та в об'єкті

// function fn() {
//   console.log('2', this);
// }
//
// fn();
//
// console.log(window.fn === fn);


// const user = {
//   name: 'Peter',
//   func() {
//     console.log('1', this); // user {}
//     fn(); // window
//   }
// };


// const a = user.func;

// console.log(user.func2());
// user.func();
// console.log(user.func());
// console.log(a());

//TODO: this callback functions

// const user = {
//   name: 'John',
//   showName() {
//     console.log(this)
//   }
// };
//
// const func = function(callback){
//   callback();
// };
//
// func(user.showName);
// console.log(user.showName());

// TODO: this arrow function

const person = {
  name: 'Superman',
  context: this,
  showThis() {
    console.log('showThis func context', this)
  },
  showThisArrow: () => {
    console.log('showThisArrow func context', this)
  },
  showThisArrowWrapper() {
    console.log('showThisArrowWrapper func context', this)
    const testArrow = () => {
      console.log('testArrow func context', this)
    };

    testArrow();
  }
};

person.showThis();
person.showThisArrow();
person.showThisArrowWrapper();
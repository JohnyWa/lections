//TODO: createCounter closure

// const createCounter = function() {
//   let privateValue = 0;
//   /*
//   createCounter env
//    Record: { privateValue: 0 }
//    Parent: Global env
//   */
//
//   const increment = function() {
//     /*
//   increment env
//    Record: { }
//    Parent: createCounter
//   */
//     privateValue += 1;
//     console.log(privateValue);
//   };
//
//
//   const decrement = function() {
//     if(privateValue > 0) {
//       privateValue -= 1;
//     }
//   };
//
//   const showPrivateValue = function() {
//     console.log('PrivateValue: ', privateValue)
//   };
//
//   const setPrivateValue = function(data) {
//     privateValue = data
//   };
//
//   return {
//     increment,
//     decrement,
//     showPrivateValue,
//     setPrivateValue
//   };
// };
//
// const counterA = createCounter();


// const makeShef = function(name) {
//   /*
//    * Параметр name это локальная переменная для функции makeShef.
//    * Это значит что она будет доступна функции makeDish через замыкание.
//    */
//   /*
//   makeShef env - створюється при виклиці функ
//     Record: { name: 'Mango' }
//     Parent: Global env
// */
//   // [[Environment]] makeShef env
//   return function makeDish(dish) {
//     /*
//     makeDish env - створюється при виклиці функ
//     Record: { dish: apple pie }
//     Parent: makeShef env
// */
//     console.log(`${name} is cooking ${dish}`);
//   };
// };
//
// const mango = makeShef('Mango');
// mango('apple pie'); // Mango is cooking apple pie
// mango('apple pie2'); // Mango is cooking apple pie
// mango('apple pie3'); // Mango is cooking apple pie


//TODO: closure memo example

/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/
// [[Environment]] global env
const memoSum = function() {
  let dataBase = {};
  /*
  memoSum env - створюється при виклиці функ
    Record: {dataBase: {}}
    Parent: global env
*/
  // [[Environment]] memoSum env
  return function(a, b){
    /*
     newMemoSum env - створюється при виклиці функ
       Record: {a: 2, b: 3}
       Parent: memoSum env
    */
    const generatedKey = `${a}-${b}`; // 2-3
    if(generatedKey in dataBase) {
      console.log('Get from cache');

      return dataBase[generatedKey];
    } else {
      console.log('New Data')

      return dataBase[generatedKey] = a + b;
    }
  }
};

const newMemoSum = memoSum();

newMemoSum(2,3);
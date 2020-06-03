/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/


const x = 200;

/*
  Global env - создается при исполнении файла скрипта
    Record: { x: 200 }
    Parent: null
*/

const y = 100;

/*
  Global env - создается при исполнении файла скрипта
    Record: { x: 200, y: 100 }
    Parent: null
*/

// [[Environment]](Global env)
const baz = function(z) {
  /*
  Baz env - створюється при виклиці функ
    Record: { z: 1000 }
    Parent: Global env
*/
  const x = 500;
  /*
  Baz env - створюється при виклиці функ
    Record: { z: 1000, x: 500 }
    Parent: Global env
*/


  return x + y + z; // 1600
};

/*
  Global env - создается при исполнении файла скрипта
    Record: { x: 200, y: 100, baz: func }
    Parent: null
*/


console.log(baz(1000));




//TODO: Сохранение

localStorage.setItem('isDarkTheme', 'true');
localStorage.setItem('isDarkTheme2', 'false');
localStorage.setItem('isDarkTheme3', 'true');

// TODO: Чтение
const isDarkTheme = localStorage.getItem('isDarkTheme');

// TODO: Удаление

// localStorage.removeItem('isDarkTheme');
//
//TODO: Очистка хранилища

// localStorage.clear();

// const formRef = document.querySelector('#main-form');
//
// formRef.addEventListener('submit', event => {
//   event.preventDefault();
//
//   const formData = new FormData(formRef);
//   const result = {};
//
//   formData.forEach((val, key) => {
//     result[key] = val;
//   });
//
//   localStorage.setItem('userData', JSON.stringify(result));
//   const data = localStorage.getItem('userData');
//   const user = JSON.parse(data);
//
//   console.log(user);
// });



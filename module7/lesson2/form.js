// const formRef = document.querySelector('#main-form');
// const linkRef = document.querySelector('#some-link');
// const nameRef = document.querySelector('#name');

// formRef.addEventListener('submit', event => {
//   event.preventDefault();
//
//   const formData = new FormData(event.target);
//
//   const result = {};
//
//   formData.forEach((value, key) => {
//     result[key] = value;
//   });
//
//   console.log(result);
// });

// linkRef.addEventListener('click', event => {
//   event.preventDefault();
//
//   console.log('Clicked link!!!')
// });
// });


// const inputRef = document.querySelector('#name');
// const btnRef = document.querySelector('#btn');
// const containerRef = document.querySelector('#container');

// inputRef.addEventListener('keypress', event => {
//   console.log(event);
// });

// inputRef.addEventListener('keydown', event => {
//   if(event.code === 'Escape') {
//     containerRef.innerHTML = '<h1>Ви нажали Escape!!!</h1>';
//   }
// });

// const selectorRef = document.querySelector('#main-selector');
// const containerRef = document.querySelector('#container');
// const checkboxRef = document.querySelector('#checkbox');
// const btnRef = document.querySelector('#dis-btn');
//
// // selectorRef.addEventListener('change', event => {
// //   containerRef.textContent = `We went to ${event.target.value}`;
// // });
//
// checkboxRef.addEventListener('change', event => {
//
//   btnRef.disabled = !event.target.checked;
// });

const inputRef = document.querySelector('#name');
const btnRef = document.querySelector('#btn');
const categoryRef = document.querySelector('#category');

btnRef.addEventListener('click', event => {
  event.preventDefault();

  categoryRef.insertAdjacentHTML('beforeend', htmlBuilder(inputRef.value));
});

const htmlBuilder = item => {
  return `<li>${item}</li>`
};

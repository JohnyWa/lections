// TODO: addEventListener && removeEventListener

const clickRef = document.querySelector('#click-js');

const func = function() {
  console.log('Clicked!!!!');
};

clickRef.addEventListener('click', func);

clickRef.removeEventListener('click', func);
const delContainerRef = document.getElementById('delegation-box');

const tableMaker = count => {
  const tempArr = Array(count).fill(0)

  const html = tempArr.map(item => htmlMaker(item))

  delContainerRef.append(...html);
};

const htmlMaker = data => {
  const customElem = document.createElement('div');
  customElem.textContent = data;
  customElem.classList.add('del-item');
  
  return customElem;
};

delContainerRef.addEventListener('click', event => {
  const activeItem = delContainerRef.querySelector('.through-text');
  const currTarget = event.target;

  if(activeItem) {
    activeItem.classList.remove('through-text');
  }

  currTarget.classList.add('through-text');
});


tableMaker(100);
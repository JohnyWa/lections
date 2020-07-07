const refs = {
  lvl1: document.querySelector('#lvl-1'),
  lvl2: document.querySelector('#lvl-2'),
  lvl3: document.querySelector('#lvl-3'),
  lvl4: document.querySelector('#lvl-4'),
};

const lvlOneHandler = event => {
  console.group('LVL1');
  console.log('Lvl 1 clicked!!!');
  console.log('event.target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
};

const lvlTwoHandler = event => {
  console.group('LVL2');
  console.log('Lvl 2 clicked!!!');
  console.log('event.target', event.target);
  console.log('currentTarget', event.currentTarget)
  console.groupEnd();
};

const lvlThreeHandler = event => {
  event.stopPropagation();
  console.group('LVL3');
  console.log('Lvl 3 clicked!!!');
  console.log('event.target', event.target);
  console.log('currentTarget', event.currentTarget)
  console.groupEnd();
};

const lvlFourHandler = event => {
  console.group('LVL4');
  console.log('Lvl 4 clicked!!!');
  console.log('event.target', event.target);
  console.log('currentTarget', event.currentTarget)
  console.groupEnd();
};

refs.lvl1.addEventListener('click', lvlOneHandler);
refs.lvl2.addEventListener('click', lvlTwoHandler);
refs.lvl3.addEventListener('click', lvlThreeHandler);
refs.lvl3.addEventListener('click', () => console.log('TTTTTTT'));
refs.lvl4.addEventListener('click', lvlFourHandler);

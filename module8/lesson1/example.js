import imagesData from './data.js';

const refs = {
  main: document.querySelector('#main-gallery'),
  line: document.querySelector('#gallery-line')
};

const galleryLineBuilder = ({ description, preview }, index) => {
  const lineItem = document.createElement('span');
  const smallImage = document.createElement('img');

  lineItem.classList.add('link-item');
  smallImage.classList.add('min-img');
  smallImage.alt = description;
  smallImage.src = preview;
  smallImage.dataset.index = index;

  if(index === 0) {
    smallImage.classList.add('active-img');
  }

  lineItem.appendChild(smallImage);
  return lineItem;
};

const mainImageBuilder = ({ description, original }) => {
  const imgBox = document.createElement('div');
  const img = document.createElement('img');

  imgBox.classList.add('main-img-box')
  img.classList.add('main-img');
  img.alt = description;
  img.src = original;

  imgBox.appendChild(img);
  refs.main.appendChild(imgBox);
};

const galleryBuilder = data => {
  const galleryLineHtml = data.map((item, i) => galleryLineBuilder(item, i));
  mainImageBuilder(data[0]);

  refs.line.append(...galleryLineHtml);
};

const mainImageHandler = ({ description, original }) => {
  const mainImage = refs.main.querySelector('img');

  mainImage.src = original;
  mainImage.alt = description;
};

refs.line.addEventListener('click', event => {
  const activeItem = refs.line.querySelector('.active-img')
  const currTarget = event.target;

  if(activeItem) {
    activeItem.classList.remove('active-img');
  }

  const currIndex = currTarget.dataset.index;

  currTarget.classList.add('active-img');

  mainImageHandler(imagesData[currIndex]);
});

galleryBuilder(imagesData);
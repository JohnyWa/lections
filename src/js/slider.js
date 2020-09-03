import EmblaCarousel from "embla-carousel";
import images from './data';

const carouselRef = document.querySelector('.embla__container');

const slideBuilder = ({original, title}) => {
  const container = document.createElement('div');
  container.classList.add('embla__slide');

  const picture = document.createElement('img');
  picture.classList.add('embla__slide__inner');
  picture.src = original;
  picture.alt = title;

  container.appendChild(picture);

  return container;
};

const sliderInit = pictures => {
  const html = pictures.map(picture => slideBuilder(picture));

  carouselRef.append(...html);
};

sliderInit(images);

const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
  prevBtn.addEventListener('click', embla.scrollPrev, false);
  nextBtn.addEventListener('click', embla.scrollNext, false);
};

const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
  return () => {
    if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
    else prevBtn.setAttribute('disabled', 'disabled');

    if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
    else nextBtn.setAttribute('disabled', 'disabled');
  };
};

const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const prevBtn = wrap.querySelector(".embla__button--prev");
const nextBtn = wrap.querySelector(".embla__button--next");
const embla = EmblaCarousel(viewPort, { loop: false });
const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

setupPrevNextBtns(prevBtn, nextBtn, embla);

embla.on("select", disablePrevAndNextBtns);
embla.on("init", disablePrevAndNextBtns);

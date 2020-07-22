// import EmblaCarousel from "embla-carousel";
// import imageData from './data';
//
// const carouselRef = document.querySelector('.embla__container');
//
// const singleSlideBuilder = ({original, title}) => {
//   const slideContainer = document.createElement('div');
//   const img = document.createElement('img');
//
//   slideContainer.classList.add('embla__slide');
//   img.classList.add('embla__slide__inner');
//   img.src = original;
//   img.alt = title;
//
//   slideContainer.appendChild(img);
//
//   return slideContainer;
// };
//
// const carouselSetup = images => {
//   const html = images.map(image => singleSlideBuilder(image));
//
//   carouselRef.append(...html);
// };
//
// carouselSetup(imageData);
//
// const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
//   prevBtn.addEventListener('click', embla.scrollPrev, false);
//   nextBtn.addEventListener('click', embla.scrollNext, false);
// };
//
// const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
//   return () => {
//     if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
//     else prevBtn.setAttribute('disabled', 'disabled');
//
//     if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
//     else nextBtn.setAttribute('disabled', 'disabled');
//   };
// };
//
// const wrap = document.querySelector(".embla");
// const viewPort = wrap.querySelector(".embla__viewport");
// const prevBtn = wrap.querySelector(".embla__button--prev");
// const nextBtn = wrap.querySelector(".embla__button--next");
// const embla = EmblaCarousel(viewPort, { loop: false });
// const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
//
// setupPrevNextBtns(prevBtn, nextBtn, embla);
//
// embla.on("select", disablePrevAndNextBtns);
// embla.on("init", disablePrevAndNextBtns);
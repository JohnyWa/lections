const images = document.querySelectorAll('.img-box img');

const callBackHandler = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const currImage = entry.target;

      currImage.src = currImage.dataset.image;

      observer.unobserve(currImage);
    }
  });
};

const io = new IntersectionObserver(callBackHandler);

images.forEach(img => io.observe(img));
// TODO: IntersectionObserver

const centerElemRef = document.querySelector('.center-elem');
const options = {
  threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
};

const observerHandler = (entries, observer) => {
  entries.forEach(entry => {
   if(entry.isIntersecting) {
     // console.log(`Пересікає: ${entry.target.textContent}`);
     console.log('threshold: ', entry.intersectionRatio);

     if(entry.intersectionRatio === 1) {
       observer.disconnect();
     }
   }
  });
};

const io = new IntersectionObserver(observerHandler, options);

io.observe(centerElemRef);
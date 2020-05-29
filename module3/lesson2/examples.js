const product = {
  title: 'Samsung Galaxy s20 Ultra',
  img: 'https://images.samsung.com/ua/smartphones/galaxy-s20/images/kv/galaxy-s20_highlights_kv_00.jpg',
  display: '3200 x 1440 (Quad HD+)',
  processor: '8-ядерний',
  camera: {
    main: '108mpx',
    front: '12mpx'
  },
  memory: {
    ozy: '12mpx',
    mainMemory: '128 gb'
  },
  connect: {
    usb: 'USB Type-C',
    wiFi: '802.11 a/b/g/n/ac/ax 2.4G+5GHz, HE80, MIMO, 1024-QAM',
    bluetooth: 'Bluetooth v5.0'
  },
  os: 'Android',
  battery: '5000 mAh',
};

const viewMaker = function(obj) {
  const containerRef = document.getElementById('container');
  const {
    img,
    display,
    processor,
    camera: {
      main,
      front
    },
    memory: {
      ozy,
      mainMemory
    },
    connect: {
      usb,
      wiFi,
      bluetooth
    },
    os,
    battery
  } = obj;

  let html = `
    <div class="product-card">
        <div class="product-card__img-box">
            <img class="product-card__img" src="${img}" />
        </div>
        <div class="product-card__info-box">
            <div class="product-card__info-item">
                <strong>Display: </strong> ${display}
            </div>
            <div class="product-card__info-item">
                <strong>Processor: </strong> ${processor}
            </div>
            <div class="product-card__info-item">
                <strong>Main camera: </strong> ${main}
            </div>
            <div class="product-card__info-item">
                <strong>Front camera: </strong> ${front}
            </div>
            <div class="product-card__info-item">
                <strong>Memory: </strong> ${mainMemory}
            </div>
            <div class="product-card__info-item">
                <strong>OZY memory: </strong> ${ozy}
            </div>

            <div class="product-card__info-item">
                <strong>Usb: </strong> ${usb}
            </div>
            <div class="product-card__info-item">
                <strong>Wi-Fi: </strong> ${wiFi}
            </div>
            <div class="product-card__info-item">
                <strong>Bluetooth: </strong> ${bluetooth}
            </div>
            <div class="product-card__info-item">
                <strong>OS: </strong> ${os}
            </div>
            <div class="product-card__info-item">
                <strong>Battery: </strong> ${battery}
            </div>
        </div>
    </div>
  `;

  containerRef.innerHTML = html;
};

viewMaker(product);


// const user = {
//   name: 'John',
//   surname: 'Week',
//   job: 'Programmer'
// };
//
// const greeting = function({ name, surname, job = 'killer'}) {
//   console.log(`Hello, ${name} ${surname}- ${job}!`);
// };
//
// greeting(user);
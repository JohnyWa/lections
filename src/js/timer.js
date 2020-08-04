class Timer {
  constructor(selector) {
    this.selector = selector;
    this.startDate = null;
    this.intervalId = null;
    this.isActive = false;
  }

  getTime(currentTime) {
    const hours = this.dataFormatter(Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = this.dataFormatter(Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.dataFormatter(Math.floor((currentTime % (1000 * 60)) / 1000));

    return `${hours} : ${minutes} : ${seconds}`;
  }

  timerStart() {
    if(this.isActive) {
      return;
    }
    this.isActive = true;
    this.startDate = Date.now();
    this.timerUpdate();
    if(this.isActive){
      this.intervalId = setInterval(this.timerUpdate.bind(this), 1000);
    }
  }

  timerReset() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.startDate = Date.now();
    this.isActive = false;
    this.timerUpdate();
  }

  timerUpdate() {
    const timerRef = document.querySelector(this.selector);
    const time = Date.now() - this.startDate;

    timerRef.innerHTML = this.getTime(time);
  }

  dataFormatter(value) {
    // const toStringValue = String(value);
    //
    // return toStringValue.length === 1
    //   ? `0${toStringValue}`
    //   : toStringValue;

    return String(value).padStart(2, '0');
  }
}

const startBtnRef = document.getElementById('timer-start-js');
const resetBtnRef = document.getElementById('timer-reset-js');

const timer = new Timer('#timer-js');

startBtnRef.addEventListener('click', function () {
  timer.timerStart();
});

resetBtnRef.addEventListener('click', function () {
  timer.timerReset();
});


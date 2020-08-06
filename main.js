let worker;

if(window.Worker) {
  worker = new Worker('worker.js');

  worker.postMessage('get count');

  // worker.addEventListener('message', function (event) {
  //   console.log(event.data)
  // })

  worker.onmessage = function (event) {
    console.log(event.data)
  }
}else {
  alert('Your browser is not support Web workers!');
}

alert('First Alert');

console.log('AFTER');
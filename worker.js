// self.addEventListener('message', function (event) {
//   if(event.data === 'get count') {
//     let count = 0;
//
//     for(let i = 0; i < 1000000000; i++) {
//       count += i
//     }
//
//     self.postMessage({ count });
//   }
// });

onmessage = function (event) {
  if(event.data === 'get count') {
    let count = 0;

    for(let i = 0; i < 1000000000; i++) {
      count += i
    }

    self.postMessage({ count });
  }
};
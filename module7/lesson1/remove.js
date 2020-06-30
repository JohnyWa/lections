const  allButtons = document.querySelectorAll('.btn');

allButtons.forEach(data => data.addEventListener('click', function () {
  this.parentNode.remove();

  // const superParent = document.querySelector('#test-box');
  // superParent.removeChild(this.parentNode);
}));
const user = {
  name: 'Peter',
  showThis() {
    console.log('Context: ', this)
  }
};

// user.showThis();



document.getElementById('container').addEventListener('click', user.showThis.bind(user));
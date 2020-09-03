import $ from 'jquery';

// const BtnRef = document.querySelector('#btn-id');
// BtnRef.addEventListener('click', () => console.log('VANILA CLICK!!'));

const btnId = $('#btn-id');

btnId.addClass('Petro');

btnId
  .closest("div")
  .css( "background-color", "green" );

btnId.on('click', () => {
  btnId.fadeOut( "slow", function() {
    // Animation complete.
  });
});


$('#h1').click(function () {

  btnId.fadeIn( "slow", function() {
    // Animation complete.
  });
})

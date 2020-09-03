import $ from 'jquery';

// Get an API key for your demos at https://unsplash.com/developers
const unsplashID = '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';

const $container = new InfiniteScroll( '.container', {
  path: function() {
    return 'https://api.unsplash.com/photos?client_id='
      + unsplashID + '&page=' + this.pageIndex;
  },
  // load response as flat text
  responseType: 'text',
  status: '.page-load-status',
  history: false,
});


$container.on( 'load', function( response ) {
  // parse response into JSON data
  const data = JSON.parse( response );
  // compile data into HTML
  const itemsHTML = data.map( htmlBuilder ).join('');
  // convert HTML string into elements
  const $items =  $( itemsHTML );
  // append item elements
  $container.appendItems($items);
});

// load initial page
$container.loadNextPage();

const htmlBuilder = ({ urls: { regular }, user: {name, links: {html}}} ) => {
  return `
    <div class="photo-item">
        <img class="photo-item__image" src="${regular}" alt="Photo by ${name}" />
        <p class="photo-item__caption">
            <a href="${html}">${name}</a>
        </p>
    </div>
  `;
};
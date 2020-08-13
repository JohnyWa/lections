import GetNews from './loadMore';

const refs = {
  loaderMoreBtn: document.getElementById('load-more-id'),
  container: document.getElementById('news-container'),
  loader: document.getElementById('loader')
};

const news = new GetNews({
  loadCount: 8,
  container: refs.container,
  loader: refs.loader
});

news.getNews();

// refs.loaderMoreBtn.addEventListener('click', news.getNews.bind(news));

function getScrollTop() {
  return (window.pageYOffset !== undefined)
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

function getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

window.addEventListener('scroll', function() {
  if(getScrollTop() < getDocumentHeight() - window.innerHeight) return;

  news.getNews();
});
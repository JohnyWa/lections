import articleTemplate from '../templates/article.hbs';

export default class GetNews{
  constructor({loadCount, container, loader}) {
    this.loadCount = loadCount;
    this.container = container;
    this.loader = loader;
    this.page = 1;
    this.enterPoint = 'https://newsapi.org/v2/everything';
  }

  getNews() {
    const options = {
      headers: {
        'Authorization': 'b00422785a784080b5bee0d0012e0b8a'
      }
    };

    const params = `?q=news&page=${this.page}&pageSize=${this.loadCount}`;
    this.loader.classList.add('show');

    return fetch(this.enterPoint + params, options)
      .then(response => response.json())
      .then(news => {
        this.page += 1;

        return this.showNews(news.articles);
      })
      .finally(() => this.loader.classList.remove('show'));
  }

  showNews(articles) {
    const htmlArticles = articleTemplate(articles);

    this.container.insertAdjacentHTML('beforeend', htmlArticles)
  }
}
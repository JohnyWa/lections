import articles from './data.js';

const articleBoxRef = document.querySelector('#articles-box');

const articleHtmlBuilder = ({original, title, description}) => {
  const articleBox = document.createElement('div');
  const descriptionBox = document.createElement('div');
  const titleBox = document.createElement('h2');
  const imgBox = document.createElement('div');
  const img = document.createElement('img');

  articleBox.classList.add('article-box');
  imgBox.classList.add('img-box');

  titleBox.textContent = title;
  descriptionBox.textContent = description;
  img.alt = title;
  img.dataset.image = original;

  imgBox.appendChild(img);
  articleBox.append(titleBox, descriptionBox, imgBox);

  return articleBox;
};

const articlesHtmlBuilder = articles => {
  const articlesHtml = articles.map(article => articleHtmlBuilder(article));

  articleBoxRef.append(...articlesHtml);
};

articlesHtmlBuilder(articles);
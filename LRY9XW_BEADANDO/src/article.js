const minsToRead = (article) => {
  const words = article.split(' ').length;
  const mins = Math.ceil(words / 200);
  return mins;
}

const displayMinsToRead = () => {
  const article = $('#article').text();
  const mins = minsToRead(article);

  $('#mins-to-read').text(`Approximately ${mins} minutes to read`);
}

const getArticleName = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const article = urlParams.get('article');
  return article;
}

const displayArticle = (article) => {
  $('.article-header > h1').text(article.title);
  $('.article-header').append(`<img class="article-image" src="${article.image}" alt="${article.title}">`);
  $('#article').text(article.description);
  document.title = `LRY9XW - ${article.title}`;

}


$(document).ready(function () {
  const articleName = getArticleName();

  $.getJSON(`./articles/${articleName}.json`, function (data) {
    displayArticle(data);
  });

  $.getJSON('./articles/articles.json', function (data) {
    for (const article of data.articles) {
      $('.other-articles')
        .append(`<li><a href="${article.link}">${article.title}</a></li>`);
    }
  });
});


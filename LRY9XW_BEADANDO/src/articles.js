const displayArticles = (articles) => {
  for (const article of articles) {
    $('main').append(`
      <section class="card" onclick="window.open('${article.link}', '_self');" onmouseenter="mouseEnter(this)" onmouseleave="mouseLeave(this)">
        <h2>${article.title}</h2>
        <img src="${article.image}" alt="${article.title}">
      </section>
    `)
  }
}

const mouseEnter = (element) => {
  $(element).animate({ opacity: 0.5 }, 500);
}

const mouseLeave = (element) => {
  $(element).animate({ opacity: 1 }, 500);
}

$(document).ready(function () {
  $.getJSON('./articles/articles.json', function (data) {
    displayArticles(data.articles);
  });
});
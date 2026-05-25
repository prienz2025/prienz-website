(function () {
  function initHomeNews() {
    var grid = document.getElementById('home-news-grid');
    if (!grid) return;
    var articles = (window.NEWS_ARTICLES || []).slice(0, 3);
    grid.innerHTML = articles.map(function (a) {
      return '<div class="reveal">' +
        '<a class="news-card" href="news-article.html?id=' + encodeURIComponent(a.id) + '">' +
          '<div class="news-meta">' +
            '<span class="news-date">' + a.date + '</span>' +
            '<span class="news-tag">' + a.tag + '</span>' +
          '</div>' +
          '<h3 class="news-title">' + a.title + '</h3>' +
          '<p class="news-excerpt">' + a.excerpt + '</p>' +
          '<span class="news-link">자세히 보기 <span class="news-arrow" aria-hidden="true">→</span></span>' +
        '</a>' +
      '</div>';
    }).join('');
    if (typeof window.initReveal === 'function') window.initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomeNews);
  } else {
    initHomeNews();
  }
})();

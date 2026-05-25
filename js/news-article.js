(function () {
  function renderBody(blocks) {
    return (blocks || []).map(function (b) {
      if (b.type === 'h2') {
        return '<h2 class="article-h2">' + b.text + '</h2>';
      }
      if (b.type === 'quote') {
        return '<figure class="article-quote">' +
            '<blockquote>' + b.text + '</blockquote>' +
            (b.cite ? '<figcaption>' + b.cite + '</figcaption>' : '') +
            '</figure>';
      }
      if (b.type === 'list') {
        return '<ul class="article-list">' +
            (b.items || []).map(function (it) {
              return '<li>' + it + '</li>';
            }).join('') +
            '</ul>';
      }
      return '<p class="article-p">' + b.text + '</p>';
    }).join('');
  }

  function initArticle() {
    const wrap = document.getElementById('article-root');
    if (!wrap) {
      return;
    }

    const all = window.NEWS_ARTICLES || [];
    const id = new URLSearchParams(window.location.search).get('id');
    const article = id ? all.find(function (a) {
      return a.id === id;
    }) : all[0];

    if (!article) {
      wrap.innerHTML =
          '<section class="article-missing"><div class="container">' +
          '<h1>아직 소식이 없습니다.</h1>' +
          '<a class="btn btn-secondary" href="news.html">전체 뉴스로 돌아가기 →</a>' +
          '</div></section>';
      return;
    }

    document.title = article.title + ' — PRIENZ';

    const related = all.filter(function (a) {
      return a.id !== article.id;
    }).slice(0, 2);

    let relatedHtml = '';
    if (related.length > 0) {
      relatedHtml =
          '<section class="article-related">' +
          '<div class="container">' +
          '<div class="article-related-head reveal">' +
          '<div class="eyebrow">More News</div>' +
          '<h2 class="article-related-title">다른 소식</h2>' +
          '</div>' +
          '<div class="news-grid">' +
          related.map(function (r) {
            return '<div class="reveal">' +
                '<a class="news-card" href="news-article.html?id='
                + encodeURIComponent(r.id) + '">' +
                '<div class="news-meta">' +
                '<span class="news-date">' + r.date + '</span>' +
                '<span class="news-tag">' + r.tag + '</span>' +
                '</div>' +
                '<h3 class="news-title">' + r.title + '</h3>' +
                '<p class="news-excerpt">' + r.excerpt + '</p>' +
                '<span class="news-link">자세히 보기 <span class="news-arrow" aria-hidden="true">→</span></span>'
                +
                '</a>' +
                '</div>';
          }).join('') +
          '</div>' +
          '</div>' +
          '</section>';
    }

    wrap.innerHTML =
        '<article class="article">' +
        '<div class="container article-container">' +
        '<div class="article-crumb reveal">' +
        '<a href="index.html">PRIENZ</a>' +
        '<span class="article-crumb-sep">/</span>' +
        '<a href="news.html">Newsroom</a>' +
        '<span class="article-crumb-sep">/</span>' +
        '<span>' + article.tag + '</span>' +
        '</div>' +
        '<div class="article-meta reveal">' +
        '<span class="news-tag">' + article.tag + '</span>' +
        '<span class="article-date">' + (article.dateLong || article.date)
        + '</span>' +
        (article.readTime
            ? '<span class="article-dot"></span><span class="article-read">읽는 시간 '
            + article.readTime + '</span>'
            : '') +
        '</div>' +
        '<h1 class="article-title reveal">' + article.title + '</h1>' +
        '<p class="article-lead reveal">' + article.excerpt + '</p>' +
        '<div class="article-divider reveal"></div>' +
        '<div class="reveal"><div class="article-body">' + renderBody(
            article.body) + '</div></div>' +
        '<div class="article-foot reveal">' +
        '<div class="article-foot-author">' +
        '<div class="article-foot-author-tag">By</div>' +
        '<div class="article-foot-author-name">' + (article.author
            || 'PRIENZ 편집팀') + '</div>' +
        '</div>' +
        '<a class="btn btn-secondary" href="news.html">' +
        '전체 뉴스로 돌아가기 <span class="btn-arrow" aria-hidden="true">→</span>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</article>' +
        relatedHtml;

    if (typeof window.initReveal === 'function') {
      window.initReveal();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArticle);
  } else {
    initArticle();
  }
})();

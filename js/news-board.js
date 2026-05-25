(function () {
  function initNewsBoard() {
    var filtersEl = document.getElementById('news-filters');
    var listEl    = document.getElementById('news-list');
    if (!listEl) return;

    var all = window.NEWS_ARTICLES || [];
    var currentFilter = 'all';

    function render() {
      if (filtersEl) {
        var tags = ['all'];
        all.forEach(function (a) { if (tags.indexOf(a.tag) === -1) tags.push(a.tag); });
        filtersEl.innerHTML = tags.map(function (t) {
          var count = t === 'all' ? all.length : all.filter(function (a) { return a.tag === t; }).length;
          var active = t === currentFilter ? ' is-active' : '';
          return '<button class="news-filter' + active + '" data-tag="' + t + '">' +
            (t === 'all' ? '전체' : t) +
            '<span class="news-filter-count">' + count + '</span>' +
          '</button>';
        }).join('');
        filtersEl.querySelectorAll('.news-filter').forEach(function (btn) {
          btn.addEventListener('click', function () {
            currentFilter = btn.dataset.tag;
            render();
          });
        });
      }

      var list = currentFilter === 'all' ? all : all.filter(function (a) { return a.tag === currentFilter; });
      if (list.length === 0) {
        listEl.innerHTML = '<div class="news-empty">해당 카테고리의 소식이 아직 없습니다.</div>';
      } else {
        listEl.innerHTML = list.map(function (a) {
          return '<a class="news-row reveal" href="news-article.html?id=' + encodeURIComponent(a.id) + '">' +
            '<div class="news-row-meta">' +
              '<span class="news-date">' + a.date + '</span>' +
              '<span class="news-tag">' + a.tag + '</span>' +
            '</div>' +
            '<div class="news-row-body">' +
              '<h3 class="news-row-title">' + a.title + '</h3>' +
              '<p class="news-row-excerpt">' + a.excerpt + '</p>' +
            '</div>' +
            '<span class="news-row-arrow" aria-hidden="true">→</span>' +
          '</a>';
        }).join('');
      }
      if (typeof window.initReveal === 'function') window.initReveal();
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNewsBoard);
  } else {
    initNewsBoard();
  }
})();

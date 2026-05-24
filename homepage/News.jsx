/** PRIENZ News — 3-card news preview, links to news article detail page. */
function NewsCard({ id, date, tag, title, excerpt }) {
  const href = id ? `PRIENZ News Article.html?id=${encodeURIComponent(id)}` : '#';
  return (
    <a className="news-card" href={href}>
      <div className="news-meta">
        <span className="news-date">{date}</span>
        <span className="news-tag">{tag}</span>
      </div>
      <h3 className="news-title">{title}</h3>
      <p className="news-excerpt">{excerpt}</p>
      <span className="news-link">
        자세히 보기
        <span className="news-arrow" aria-hidden="true">→</span>
      </span>
    </a>
  );
}

function News({ items, max }) {
  const all = items || (window.NEWS_ARTICLES || []);
  const limit = typeof max === 'number' ? max : 3;
  const list = all.slice(0, limit);
  return (
    <React.Fragment>
      <div className="news-grid">
        {list.map((n) => (
          <div key={n.id || n.title} className="reveal">
            <NewsCard {...n} />
          </div>
        ))}
      </div>
      {all.length >= limit && (
        <div className="news-cta reveal">
          <a className="btn btn-secondary" href="PRIENZ News.html">
            전체 뉴스 보기
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </React.Fragment>
  );
}

window.News = News;
window.NewsCard = NewsCard;

/** PRIENZ NewsBoardApp — full news board listing all articles. */
const { useState: useStateNB, useEffect: useEffectNB } = React;

function useRevealNB() {
  useEffectNB(() => {
    const els = document.querySelectorAll('.reveal');
    const showIfVisible = (el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-visible');
    };
    els.forEach(showIfVisible);
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    }, { threshold: 0.18 });
    els.forEach((el) => { if (!el.classList.contains('is-visible')) io.observe(el); });
    const t = setTimeout(() => { document.body.classList.add('reveal-fallback'); }, 2000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

function NewsBoardApp() {
  const [contactOpen, setContactOpen] = useStateNB(false);
  const [filter, setFilter] = useStateNB('all');
  useRevealNB();

  const links = [
    { id: 'about',   label: 'About',    href: 'PRIENZ Homepage.html#about' },
    { id: 'service', label: 'Service',  href: 'PRIENZ Homepage.html#service' },
    { id: 'partners',label: 'Partners', href: 'PRIENZ Homepage.html#partners' },
    { id: 'news',    label: 'News' },
    { id: 'team',    label: 'Team',     href: 'PRIENZ Team.html' },
    { id: 'contact', label: 'Contact',  href: 'PRIENZ Homepage.html#contact' },
  ];

  const all = window.NEWS_ARTICLES || [];
  const tags = ['all', ...Array.from(new Set(all.map((a) => a.tag)))];
  const list = filter === 'all' ? all : all.filter((a) => a.tag === filter);

  return (
    <React.Fragment>
      <Nav links={links} onCta={() => setContactOpen(true)} />

      <section className="page-hero" id="top">
        <div className="container">
          <div className="page-hero-eyebrow reveal">Newsroom</div>
          <h1 className="page-hero-title reveal">
            PRIENZ <span className="gradient">소식</span>
          </h1>
          <p className="page-hero-sub reveal">
            우리의 성장 이야기, 미디어 보도, 그리고 새로운 발걸음을 전합니다.
          </p>
        </div>
      </section>

      <section className="news-board">
        <div className="container">
          <div className="news-board-filters reveal">
            {tags.map((t) => (
              <button
                key={t}
                className={`news-filter${filter === t ? ' is-active' : ''}`}
                onClick={() => setFilter(t)}
              >
                {t === 'all' ? '전체' : t}
                <span className="news-filter-count">{t === 'all' ? all.length : all.filter((a) => a.tag === t).length}</span>
              </button>
            ))}
          </div>

          <div className="news-board-list">
            {list.map((article) => (
              <a
                key={article.id}
                className="news-row reveal"
                href={`PRIENZ News Article.html?id=${encodeURIComponent(article.id)}`}
              >
                <div className="news-row-meta">
                  <span className="news-date">{article.date}</span>
                  <span className="news-tag">{article.tag}</span>
                </div>
                <div className="news-row-body">
                  <h3 className="news-row-title">{article.title}</h3>
                  <p className="news-row-excerpt">{article.excerpt}</p>
                </div>
                <span className="news-row-arrow" aria-hidden="true">→</span>
              </a>
            ))}
            {list.length === 0 && (
              <div className="news-empty">해당 카테고리의 소식이 아직 없습니다.</div>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </React.Fragment>
  );
}

window.__pageId = 'news';
const newsBoardRoot = ReactDOM.createRoot(document.getElementById('root'));
newsBoardRoot.render(<NewsBoardApp />);

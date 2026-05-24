/** PRIENZ NewsArticleApp — single article view; ?id=... query selects article. */
const { useState: useStateNA, useEffect: useEffectNA } = React;

function useRevealNA() {
  useEffectNA(() => {
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

function ArticleBody({ blocks }) {
  return (
    <div className="article-body">
      {blocks.map((b, i) => {
        if (b.type === 'h2') return <h2 key={i} className="article-h2">{b.text}</h2>;
        if (b.type === 'quote') return (
          <figure key={i} className="article-quote">
            <blockquote>{b.text}</blockquote>
            {b.cite && <figcaption>{b.cite}</figcaption>}
          </figure>
        );
        if (b.type === 'list') return (
          <ul key={i} className="article-list">
            {(b.items || []).map((it, j) => (<li key={j}>{it}</li>))}
          </ul>
        );
        return <p key={i} className="article-p">{b.text}</p>;
      })}
    </div>
  );
}

function NewsArticleApp() {
  const [contactOpen, setContactOpen] = useStateNA(false);
  useRevealNA();

  const links = [
    { id: 'about',   label: 'About',    href: 'PRIENZ Homepage.html#about' },
    { id: 'service', label: 'Service',  href: 'PRIENZ Homepage.html#service' },
    { id: 'partners',label: 'Partners', href: 'PRIENZ Homepage.html#partners' },
    { id: 'news',    label: 'News',     href: 'PRIENZ News.html' },
    { id: 'team',    label: 'Team',     href: 'PRIENZ Team.html' },
    { id: 'contact', label: 'Contact',  href: 'PRIENZ Homepage.html#contact' },
  ];

  const all = window.NEWS_ARTICLES || [];
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const article = id ? all.find((a) => a.id === id) : all[0];

  // related = other articles
  const related = all.filter((a) => a.id !== article?.id).slice(0, 2);

  if (!article) {
    return (
      <React.Fragment>
        <Nav links={links} onCta={() => setContactOpen(true)} />
        <section className="article-missing">
          <div className="container">
            <h1>아직 소식이 없습니다.</h1>
            <a className="btn btn-secondary" href="PRIENZ News.html">전체 뉴스로 돌아가기 →</a>
          </div>
        </section>
        <Footer />
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Nav links={links} onCta={() => setContactOpen(true)} />

      <article className="article">
        <div className="container article-container">
          <div className="article-crumb reveal">
            <a href="PRIENZ Homepage.html">PRIENZ</a>
            <span className="article-crumb-sep">/</span>
            <a href="PRIENZ News.html">Newsroom</a>
            <span className="article-crumb-sep">/</span>
            <span>{article.tag}</span>
          </div>

          <div className="article-meta reveal">
            <span className="news-tag">{article.tag}</span>
            <span className="article-date">{article.dateLong || article.date}</span>
            {article.readTime && (
              <React.Fragment>
                <span className="article-dot" />
                <span className="article-read">읽는 시간 {article.readTime}</span>
              </React.Fragment>
            )}
          </div>

          <h1 className="article-title reveal">{article.title}</h1>
          <p className="article-lead reveal">{article.excerpt}</p>

          <div className="article-divider reveal" />

          <div className="reveal">
            <ArticleBody blocks={article.body || []} />
          </div>

          <div className="article-foot reveal">
            <div className="article-foot-author">
              <div className="article-foot-author-tag">By</div>
              <div className="article-foot-author-name">{article.author || 'PRIENZ 편집팀'}</div>
            </div>
            <a className="btn btn-secondary" href="PRIENZ News.html">
              전체 뉴스로 돌아가기
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="article-related">
          <div className="container">
            <div className="article-related-head reveal">
              <div className="eyebrow">More News</div>
              <h2 className="article-related-title">다른 소식</h2>
            </div>
            <div className="news-grid">
              {related.map((r) => (
                <div key={r.id} className="reveal">
                  <NewsCard {...r} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </React.Fragment>
  );
}

window.__pageId = 'news-article';
const newsArticleRoot = ReactDOM.createRoot(document.getElementById('root'));
newsArticleRoot.render(<NewsArticleApp />);

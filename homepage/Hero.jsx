/** PRIENZ Hero — choreographed entrance: eyebrow → headline (word stagger) → sub → CTA → visual. */
function Hero({ onPrimary, onSecondary }) {
  const line1 = ['Together', 'for', 'a'];
  const line2 = ['Greener', 'Future'];
  let i = 0;
  return (
    <section className="hero" id="top">
      <div className="container">
        <h1 className="hero-h1">
          <span className="hero-line">
            {line1.map((w) => (
              <span key={`l1-${w}`} className="hero-word" style={{ '--i': i++ }}>
                <span>{w}</span>
              </span>
            ))}
          </span>
          <span className="hero-line">
            {line2.map((w) => (
              <span key={`l2-${w}`} className="hero-word hero-word-gradient" style={{ '--i': i++ }}>
                <span className="gradient">{w}</span>
              </span>
            ))}
          </span>
        </h1>
        <p className="hero-sub hero-fade" style={{ '--d': '0.55s' }}>
          기술과 진심을 더해, 버려지는 옷에 새로운 생명을,<br />
          반려동물에게는 맞춤형 행복을 선사합니다.
        </p>
        <div className="btn-row hero-fade" style={{ '--d': '0.7s' }}>
          <button className="btn btn-primary" onClick={onPrimary}>회사 소개</button>
          <button className="btn btn-secondary" onClick={onSecondary}>문의하기</button>
        </div>

        <div className="hero-visual hero-fade" style={{ '--d': '0.85s' }} aria-hidden="true">
          <div className="hero-poster">
            <div className="hero-poster-frame">
              <span className="hero-poster-frame-mark">
                <span className="hero-poster-frame-dot" />
                PRIENZ · 2024
              </span>
              <img src={(window.__resources && window.__resources.logo) || "homepage/prienz-logo.png"} alt="" className="hero-poster-logo" />
              <div className="hero-poster-rule">
                <span className="hero-poster-rule-line" />
                <span className="hero-poster-rule-text">EST. 2024 — SEOUL</span>
                <span className="hero-poster-rule-line" />
              </div>
            </div>
            <div className="hero-poster-tagline">
              <span className="hero-poster-tagline-strong">Clother AI</span>
              <span className="hero-poster-tagline-dot" />
              <span>반려견 맞춤 옷</span>
              <span className="hero-poster-tagline-dot" />
              <span>업사이클링</span>
            </div>
          </div>

          <div className="hero-blob hero-blob-a" />
          <div className="hero-blob hero-blob-b" />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;

/** PRIENZ TeamApp — entry for the Team & History sub-page. */
const { useState: useStateTA, useEffect: useEffectTA } = React;

function useRevealTA() {
  useEffectTA(() => {
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

function TeamApp() {
  const [contactOpen, setContactOpen] = useStateTA(false);
  useRevealTA();

  const links = [
    { id: 'about',   label: 'About',    href: 'PRIENZ Homepage.html#about' },
    { id: 'service', label: 'Service',  href: 'PRIENZ Homepage.html#service' },
    { id: 'partners',label: 'Partners', href: 'PRIENZ Homepage.html#partners' },
    { id: 'news',    label: 'News',     href: 'PRIENZ Homepage.html#news' },
    { id: 'team',    label: 'Team' },
    { id: 'contact', label: 'Contact',  href: 'PRIENZ Homepage.html#contact' },
  ];

  return (
    <React.Fragment>
      <Nav links={links} onCta={() => setContactOpen(true)} />

      <section className="page-hero" id="top">
        <div className="container">
          <div className="page-hero-eyebrow reveal">Team & History</div>
          <h1 className="page-hero-title reveal">
            만드는 사람들과<br />
            <span className="gradient">우리의 여정</span>
          </h1>
          <p className="page-hero-sub reveal">
            세 사람의 다른 강점이 한 방향을 향해, PRIENZ는 자라고 있습니다.<br />
            지나온 길과 함께 만들 사람들을 소개합니다.
          </p>
        </div>
      </section>

      <Section
        id="team-detail"
        eyebrow="Team"
        title="공동 창업자"
        description="기술과 진심을 균형 있게 다루는 세 명의 공동 창업자가 PRIENZ의 출발선을 함께합니다."
      >
        <div className="team-detail-grid">
          <div className="reveal">
            <TeamDetail
              initials="MG"
              name="이명근"
              nameEn="Lee Myunggeun"
              role="Co-founder · CEO"
              bio={<React.Fragment>비전과 방향을 잡고 팀과 세상을 잇습니다.<br />반려동물과 사람이 함께 행복한 라이프스타일을 만드는 것이 미션입니다.</React.Fragment>}
              focus={['Vision & Strategy', 'Partnerships', 'Brand Direction']}
            />
          </div>
          <div className="reveal">
            <TeamDetail
              initials="WJ"
              name="김우주"
              nameEn="Kim Wooju"
              role="Co-founder · CTO"
              bio={<React.Fragment>AI 디자인 생성과 체형 측정 모델을 책임집니다.<br />차가운 기술을 따뜻한 경험으로 바꾸는 일을 합니다.</React.Fragment>}
              focus={['AI Design Generation', 'CV-based Body Measurement', 'ML Infrastructure']}
            />
          </div>
          <div className="reveal">
            <TeamDetail
              initials="KH"
              name="김기홍"
              nameEn="Kim Gihong"
              role="Co-founder · CDO"
              bio={<React.Fragment>브랜드와 제품 경험을 설계합니다.<br />PRIENZ가 'AI인데 따뜻하다'라고 느껴지는 모든 접점을 만듭니다.</React.Fragment>}
              focus={['Brand Design', 'Product Experience', 'Visual System']}
            />
          </div>
        </div>
      </Section>

      <Section
        id="history"
        variant="mint"
        eyebrow="History"
        title="우리의 여정"
        description="창업부터 지금까지, PRIENZ가 걸어온 길입니다."
      >
        <HistoryTimeline />
      </Section>

      <section className="join-cta">
        <div className="container">
          <div className="join-cta-inner reveal">
            <div className="join-cta-eyebrow">Join us</div>
            <h2>같은 방향을 보는<br /><span className="gradient">동료를 찾고 있습니다.</span></h2>
            <p>AI · 디자인 · 그리고 반려동물에 진심인 분이라면, 언제든 문을 두드려 주세요.</p>
            <div className="btn-row">
              <button className="btn btn-primary" onClick={() => setContactOpen(true)}>함께하기</button>
              <a className="btn btn-secondary" href="PRIENZ Homepage.html">
                홈으로 돌아가기
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </React.Fragment>
  );
}

window.__pageId = 'team';
const teamRoot = ReactDOM.createRoot(document.getElementById('root'));
teamRoot.render(<TeamApp />);

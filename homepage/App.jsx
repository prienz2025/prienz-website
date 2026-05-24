/** PRIENZ App — assembles all components into the homepage demo. */
const { useState: useStateApp, useEffect: useEffectApp } = React;

function useReveal() {
  useEffectApp(() => {
    const els = document.querySelectorAll('.reveal');
    // Immediate pass: anything already in viewport is shown right away.
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
    // Safety net: if IO is broken (sandboxes, etc), force-show after 2s
    const t = setTimeout(() => {
      document.body.classList.add('reveal-fallback');
    }, 2000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

function App() {
  const [contactOpen, setContactOpen] = useStateApp(false);
  useReveal();

  const links = [
    { id: 'about',   label: 'About' },
    { id: 'service', label: 'Service' },
    { id: 'partners',label: 'Partners' },
    { id: 'news',    label: 'News',    href: 'PRIENZ News.html' },
    { id: 'team',    label: 'Team',    href: 'PRIENZ Team.html' },
    { id: 'contact', label: 'Contact' },
  ];

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  }

  return (
    <React.Fragment>
      <Nav links={links} onCta={() => setContactOpen(true)} />

      <Hero
        onPrimary={() => scrollTo('about')}
        onSecondary={() => setContactOpen(true)}
      />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="marquee-row">
              <span>AI 디자인</span><span className="marquee-dot" />
              <span>AI 체형 측정</span><span className="marquee-dot" />
              <span>업사이클링</span><span className="marquee-dot" />
              <span>반려견 맞춤 옷</span><span className="marquee-dot" />
              <span>CLOTHER AI</span><span className="marquee-dot" />
              <span>Greener Future</span><span className="marquee-dot" />
              <span>PRIENZ</span><span className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>

      <Section
        id="about"
        variant="mint"
        eyebrow="About Us"
        title={<React.Fragment>함께하는 문화로 내일을 바꾸고,<br />공유하는 가치로 세상에 온기를 전합니다</React.Fragment>}
        description="PRIENZ는 AI 기술을 통해 자원의 선순환을 실천하며, 사람과 반려동물이 함께 행복한 지속 가능한 라이프스타일을 만들어갑니다."
      >
        <div className="card-grid">
          <div className="reveal"><Card icon="P" title="Passionate Together">최고의 팀워크가 최고의 결과물을 만든다고 믿습니다.<br />팀의 열정을 원동력 삼아 함께 성장합니다.</Card></div>
          <div className="reveal"><Card icon="S" title="Shared Impact">업사이클링은 '함께하는 문화'여야 합니다. 친환경 가치를 세상과 소통하며 선한 영향력을 퍼뜨립니다.</Card></div>
          <div className="reveal"><Card icon="H" title="Human-Tech Harmony">AI 체형 측정 기술은 반려동물을 향한 배려와<br />사랑을 완성하는 따뜻한 도구로서 존재합니다.</Card></div>
        </div>
      </Section>

      <Section
        id="service"
        eyebrow="Service"
        title="Clother AI"
        description="AI가 디자인하고, AI가 측정하고, 장인이 만드는 반려견 맞춤 옷. CLOTHE + TOGETHER = CLOTHER."
      >
        <div className="card-grid">
          <div className="reveal"><Card icon="AI" iconSize={16} title="AI 디자인 생성">세상에 하나뿐인 반려견 옷 디자인을 AI가 생성합니다. 견주의 취향과 강아지의 개성을 반영합니다.</Card></div>
          <div className="reveal"><Card icon="M" title="AI 신체 측정">사진 한 장으로 반려견의 정확한 신체 치수를 AI가 측정합니다. 완벽한 핏의 맞춤옷이 가능해집니다.</Card></div>
          <div className="reveal"><Card icon="Up" iconSize={15} title="업사이클링 제작">버려질 뻔한 옷이 반려견의 새 옷으로 다시 태어납니다. 지속 가능한 패션의 새로운 기준입니다.</Card></div>
        </div>
      </Section>

      <Section
        id="partners"
        variant="mint"
        eyebrow="Partners"
        title="함께 만들어가는 파트너"
        description="기술, 환경, 유통, 동물복지 등 다양한 분야의 파트너와 협력하며 지속 가능한 반려동물 패션 생태계를 만들어갑니다."
      >
        <Partners />
      </Section>

      <Section
        id="news"
        eyebrow="Newsroom"
        title="PRIENZ 소식"
        description="우리의 성장 이야기, 미디어 보도, 그리고 새로운 발걸음을 전합니다."
      >
        <News />
      </Section>

      <Section
        id="team"
        variant="sky"
        eyebrow="Team"
        title="만드는 사람들"
        description="열정과 기술, 그리고 반려동물에 대한 사랑으로 뭉친 팀입니다."
      >
        <div className="team-grid">
          <div className="reveal"><TeamCard initials="MG" name="이명근" role="Co-founder" /></div>
          <div className="reveal"><TeamCard initials="WJ" name="김우주" role="Co-founder" /></div>
          <div className="reveal"><TeamCard initials="KH" name="김기홍" role="Co-founder" /></div>
        </div>
        <div className="team-cta reveal">
          <a className="btn btn-secondary" href="PRIENZ Team.html">
            팀과 연혁 자세히 보기
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </Section>

      <Footer />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/** PRIENZ LegalApp — entry for legal sub-pages (사업자정보 / 개인정보처리방침 / 이용약관).
    Selects content based on window.__legalPage = 'business' | 'privacy' | 'terms'. */
const { useState: useStateLA, useEffect: useEffectLA } = React;

function useRevealLA() {
  useEffectLA(() => {
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

/* ── PAGE CONTENT ───────────────────────────────────────── */

function BusinessContent() {
  return (
    <div className="legal-body">
      <p className="legal-lead">
        PRIENZ는 공정거래위원회 사업자정보 공개 지침에 따라 다음과 같이 사업자 정보를 안내합니다.
      </p>
      <dl className="legal-keyval">
        <dt>상호</dt>           <dd>(주) 프리엔즈 · PRIENZ Co., Ltd.</dd>
        <dt>대표자</dt>         <dd>이명근, 김우주, 김기홍</dd>
        <dt>사업자 등록 번호</dt><dd>000-00-00000 <span className="legal-todo">(등록 후 기재)</span></dd>
        <dt>통신판매업 신고</dt><dd>제 0000-서울강남-00000호 <span className="legal-todo">(신고 후 기재)</span></dd>
        <dt>본사 소재지</dt>    <dd>서울특별시 강남구 ○○로 ○○, ○○호</dd>
        <dt>이메일</dt>         <dd><a href="mailto:contact@prienz.co.kr">contact@prienz.co.kr</a></dd>
        <dt>홈페이지</dt>       <dd><a href="https://prienz.co.kr" target="_blank" rel="noreferrer">prienz.co.kr</a></dd>
      </dl>
      <p className="legal-note">
        본 정보는 사업자 등록 절차 완료 후 공정거래위원회 공개 정보와 동일하게 갱신됩니다.
        등록 사업자 정보는 <a href="https://www.ftc.go.kr/bizCommPop.do" target="_blank" rel="noreferrer">공정거래위원회 사업자정보 확인</a>에서도 조회하실 수 있습니다.
      </p>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="legal-body">
      <p className="legal-lead">
        (주) 프리엔즈(이하 "회사")는 이용자의 개인정보를 중요시하며, 개인정보 보호법 및 관련 법령을 준수합니다.
        본 방침은 회사가 제공하는 모든 서비스에 적용됩니다.
      </p>

      <section className="legal-section">
        <h2>1. 개인정보의 수집 항목 및 방법</h2>
        <p>회사는 서비스 제공을 위해 다음의 개인정보를 수집합니다.</p>
        <ul>
          <li>필수: 이메일 주소, 이름</li>
          <li>선택: 연락처, 반려견 정보(품종 · 체형 측정 사진 등)</li>
          <li>자동 수집: 접속 IP, 쿠키, 서비스 이용 기록</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>2. 개인정보의 이용 목적</h2>
        <ul>
          <li>Clother AI 서비스 제공 및 맞춤 옷 제작</li>
          <li>이용자 식별 및 본인 확인</li>
          <li>고객 문의 응대 및 공지사항 전달</li>
          <li>서비스 개선을 위한 통계 분석</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. 개인정보의 보유 및 이용 기간</h2>
        <p>
          이용자의 개인정보는 수집 및 이용 목적이 달성되면 지체 없이 파기합니다.
          단, 관련 법령에 따라 보관이 필요한 경우 해당 기간 동안 보관됩니다.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. 개인정보의 제3자 제공</h2>
        <p>회사는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만 법령에 따른 경우는 예외로 합니다.</p>
      </section>

      <section className="legal-section">
        <h2>5. 이용자의 권리</h2>
        <p>이용자는 언제든 본인의 개인정보를 조회 · 수정 · 삭제 · 처리정지를 요청할 수 있습니다.</p>
      </section>

      <section className="legal-section">
        <h2>6. 개인정보 보호책임자</h2>
        <dl className="legal-keyval">
          <dt>책임자</dt><dd>김기홍 (CDO)</dd>
          <dt>이메일</dt><dd><a href="mailto:privacy@prienz.co.kr">privacy@prienz.co.kr</a></dd>
        </dl>
      </section>

      <p className="legal-note">본 방침은 2026년 1월 1일부터 시행되며, 변경 시 홈페이지를 통해 공지합니다.</p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="legal-body">
      <p className="legal-lead">
        본 약관은 (주) 프리엔즈(이하 "회사")가 제공하는 Clother AI 및 관련 서비스의 이용 조건과 절차,
        이용자와 회사 간의 권리 · 의무 및 책임 사항을 규정합니다.
      </p>

      <section className="legal-section">
        <h2>제 1조 (목적)</h2>
        <p>본 약관은 회사가 제공하는 서비스의 이용 조건과 절차에 관한 사항을 정함을 목적으로 합니다.</p>
      </section>

      <section className="legal-section">
        <h2>제 2조 (정의)</h2>
        <ul>
          <li>"서비스"란 회사가 제공하는 Clother AI 및 관련 부수 서비스 일체를 의미합니다.</li>
          <li>"이용자"란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>제 3조 (약관의 효력 및 변경)</h2>
        <p>본 약관은 서비스 화면에 게시함으로써 효력이 발생합니다. 회사는 합리적인 사유가 있을 경우 약관을 변경할 수 있으며, 변경된 약관은 적용일 7일 전부터 공지합니다.</p>
      </section>

      <section className="legal-section">
        <h2>제 4조 (서비스의 제공 및 변경)</h2>
        <p>회사는 안정적인 서비스 제공을 위해 노력하며, 운영상 · 기술상 필요에 따라 서비스의 일부 또는 전부를 변경할 수 있습니다.</p>
      </section>

      <section className="legal-section">
        <h2>제 5조 (이용자의 의무)</h2>
        <ul>
          <li>관계 법령, 본 약관, 회사가 공지하는 사항을 준수해야 합니다.</li>
          <li>타인의 권리를 침해하거나 서비스 운영을 방해하는 행위를 해서는 안 됩니다.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>제 6조 (면책 조항)</h2>
        <p>회사는 천재지변, 불가항력적 사유로 인한 서비스 제공의 일시 중단에 대해서는 책임을 지지 않습니다.</p>
      </section>

      <section className="legal-section">
        <h2>제 7조 (분쟁의 해결)</h2>
        <p>본 약관에 명시되지 않은 사항은 관계 법령 및 상관례에 따르며, 분쟁은 회사 본사 소재지를 관할하는 법원을 1심 관할 법원으로 합니다.</p>
      </section>

      <p className="legal-note">본 약관은 2026년 1월 1일부터 시행됩니다.</p>
    </div>
  );
}

/* ── PAGE SHELL ─────────────────────────────────────────── */

const LEGAL_PAGES = {
  business: { eyebrow: 'Business',   title: '사업자 정보',      Body: BusinessContent },
  privacy:  { eyebrow: 'Privacy',    title: '개인정보처리방침', Body: PrivacyContent  },
  terms:    { eyebrow: 'Terms',      title: '이용약관',         Body: TermsContent    },
};

function LegalApp() {
  const [contactOpen, setContactOpen] = useStateLA(false);
  useRevealLA();

  const cur = LEGAL_PAGES[window.__legalPage] || LEGAL_PAGES.business;
  const Body = cur.Body;

  const links = [
    { id: 'about',   label: 'About',    href: 'PRIENZ Homepage.html#about' },
    { id: 'service', label: 'Service',  href: 'PRIENZ Homepage.html#service' },
    { id: 'partners',label: 'Partners', href: 'PRIENZ Homepage.html#partners' },
    { id: 'news',    label: 'News',     href: 'PRIENZ Homepage.html#news' },
    { id: 'team',    label: 'Team',     href: 'PRIENZ Team.html' },
    { id: 'contact', label: 'Contact',  href: 'PRIENZ Homepage.html#contact' },
  ];

  return (
    <React.Fragment>
      <Nav links={links} onCta={() => setContactOpen(true)} />

      <section className="legal-hero" id="top">
        <div className="container">
          <div className="legal-hero-crumb reveal">
            <a href="PRIENZ Homepage.html">PRIENZ</a>
            <span className="legal-hero-crumb-sep">/</span>
            <span>{cur.title}</span>
          </div>
          <div className="legal-hero-eyebrow reveal">{cur.eyebrow}</div>
          <h1 className="legal-hero-title reveal">{cur.title}</h1>
        </div>
      </section>

      <article className="legal-page">
        <div className="container">
          <div className="reveal">
            <Body />
          </div>
        </div>
      </article>

      <Footer />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </React.Fragment>
  );
}

window.__pageId = 'legal';
const legalRoot = ReactDOM.createRoot(document.getElementById('root'));
legalRoot.render(<LegalApp />);

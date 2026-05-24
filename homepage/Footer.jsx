/** PRIENZ Footer — dark band: brand → links → corporate legal info → legal page links + copyright. */
/* TODO(prienz): replace placeholder corporate info (CEO, biz number, address) with actuals when registered. */
function Footer() {
  return (
    <footer id="contact">
      <div className="container cols">
        <div className="footer-brand">
          <img src={window.__resources && window.__resources.logoLight || "homepage/prienz-logo-light.png"} alt="PRIENZ" className="footer-logo" />
          <p className="footer-brand-tagline">기술과 진심을 더해, 반려동물에게 맞춤형 행복을 선사합니다.</p>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="PRIENZ Homepage.html#about">회사 소개</a>
          <a href="PRIENZ Homepage.html#service">서비스</a>
          <a href="PRIENZ Team.html">팀 · 연혁</a>
          <a href="PRIENZ Homepage.html#news">News</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:contact@prienz.co.kr">contact@prienz.co.kr</a>
          <a href="https://prienz.co.kr" target="_blank" rel="noreferrer">prienz.co.kr</a>
        </div>
      </div>

      <div className="container">
        <div className="footer-corp">
          <div className="footer-corp-name">(주) 프리엔즈</div>
          <dl className="footer-corp-info">
            <dt>대표</dt>
            <dd>이명근, 김우주, 김기홍</dd>

            <dt>사업자 등록 번호</dt>
            <dd>000-00-00000</dd>

            <dt>본사</dt>
            <dd>서울특별시 강남구 ○○로 ○○, ○○호</dd>

            <dt>이메일</dt>
            <dd>contact@prienz.co.kr</dd>
          </dl>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-copy">© 2026 PRIENZ Corp. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href="PRIENZ Business.html">사업자정보확인</a>
            <a href="PRIENZ Privacy.html" className="footer-bottom-strong">개인정보처리방침</a>
            <a href="PRIENZ Terms.html">이용약관</a>
          </div>
        </div>
      </div>
    </footer>);

}

window.Footer = Footer;

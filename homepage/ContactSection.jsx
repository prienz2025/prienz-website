/** PRIENZ ContactSection — dark band at bottom of Team page with contact + addresses + map slots. */
function ContactSection() {
  return (
    <section className="contact-section" id="locations">
      <div className="container contact-section-inner">
        <div className="contact-left reveal">
          <div className="contact-eyebrow">Contact Us</div>
          <h2 className="contact-title">주소 및 문의</h2>

          <dl className="contact-list">
            <dt>고객 · 제휴 문의</dt>
            <dd><a href="mailto:contact@prienz.co.kr">contact@prienz.co.kr</a></dd>

            <dt>채용 문의</dt>
            <dd><a href="mailto:careers@prienz.co.kr">careers@prienz.co.kr</a></dd>

            <dt>FAX</dt>
            <dd>02-0000-0000</dd>
          </dl>
        </div>

        <div className="contact-right">
          <div className="contact-location reveal">
            <div className="contact-location-label">본사</div>
            <div className="contact-location-address">
              서울특별시 강남구 ○○로 ○○, ○○호
            </div>
            <div className="contact-map">
              <image-slot
                id="prienz-map-hq"
                placeholder="본사 지도 이미지를 드래그해서 넣으세요"
                shape="rounded"
                style={{ width: '100%', height: '100%' }}
              ></image-slot>
              <div className="contact-pin">
                <span className="contact-pin-dot" />
                <span>(주) 프리엔즈 본사</span>
              </div>
            </div>
          </div>

          <div className="contact-location reveal">
            <div className="contact-location-label">기업부설연구소</div>
            <div className="contact-location-address">
              서울특별시 강남구 ○○로 ○○, ○○호
            </div>
            <div className="contact-map">
              <image-slot
                id="prienz-map-lab"
                placeholder="연구소 지도 이미지를 드래그해서 넣으세요"
                shape="rounded"
                style={{ width: '100%', height: '100%' }}
              ></image-slot>
              <div className="contact-pin">
                <span className="contact-pin-dot" />
                <span>(주) 프리엔즈 연구소</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ContactSection = ContactSection;

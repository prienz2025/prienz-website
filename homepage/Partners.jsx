/** PRIENZ Partners — placeholder partner slots. Replace each .partner with real logo when available. */
function Partners({ items }) {
  const defaults = [
    { label: '의류 브랜드', tag: 'Fashion' },
    { label: '원단 공급', tag: 'Material' },
    { label: '유통 채널', tag: 'Retail' },
    { label: '동물복지', tag: 'Welfare' },
    { label: 'ESG 인증', tag: 'ESG' },
    { label: '기술 협력', tag: 'Tech' },
  ];
  const list = items || defaults;
  return (
    <div className="partners-grid">
      {list.map((p, i) => (
        <div key={i} className="partner reveal">
          <span className="partner-tag">{p.tag}</span>
          <span className="partner-label">{p.label}</span>
        </div>
      ))}
    </div>
  );
}

window.Partners = Partners;

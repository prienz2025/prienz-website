/** PRIENZ HistoryTimeline — vertical timeline of company milestones, grouped by year. */
function HistoryTimeline({ entries }) {
  const data = entries || defaultHistory();
  return (
    <div className="history">
      {data.map((group, gi) => (
        <div key={gi} className="history-group reveal">
          <div className="history-year">{group.year}</div>
          <div className="history-events">
            {group.events.map((ev, i) => (
              <div key={i} className="history-event">
                <div className="history-event-dot" />
                <div className="history-event-month">{ev.month}</div>
                <div className="history-event-body">
                  <div className="history-event-title">{ev.title}</div>
                  {ev.note && <div className="history-event-note">{ev.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function defaultHistory() {
  return [
    {
      year: '2026',
      events: [
        { month: '03', title: 'Clother AI 베타 출시 예정', note: 'AI 디자인 · AI 체형 측정 · 업사이클링 제작' },
        { month: '01', title: '환경부 ESG 우수 스타트업 선정' },
      ],
    },
    {
      year: '2025',
      events: [
        { month: '12', title: '시드 라운드 클로징', note: 'AI 기반 반려동물 맞춤 패션 시장 개척' },
        { month: '06', title: '첫 업사이클링 의류 파트너십' },
        { month: '03', title: '환경부 그린뉴딜 스타트업 프로그램 참여' },
      ],
    },
    {
      year: '2024',
      events: [
        { month: '12', title: 'AI 체형 측정 모델 알파 완성' },
        { month: '09', title: 'AI 디자인 생성 프로토타입 공개' },
        { month: '06', title: 'Clother AI 기술 개발 시작' },
        { month: '03', title: 'PRIENZ 창업', note: '이명근 · 김우주 · 김기홍 공동 창업' },
      ],
    },
  ];
}

window.HistoryTimeline = HistoryTimeline;

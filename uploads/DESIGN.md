# Design System - PRIENZ

## Product Context
- **What this is:** PRIENZ 기업 소개 홈페이지 (Clother AI 반려견 맞춤 옷 제작 서비스를 만드는 AI 스타트업)
- **Who it's for:** 투자자, 파트너, 채용 후보, 언론, 일반 방문자
- **Space/industry:** AI 펫테크 스타트업
- **Project type:** Corporate homepage (정적 사이트)
- **Memorable thing:** "AI인데 따뜻하다"

## Page Structure
1. **Hero:** 회사 비전/슬로건 ("Together for a Greener Future") + 일러스트레이션
2. **About:** 회사 소개, 미션/비전, 핵심 가치 (Passionate Together, Shared Impact, Human-Tech Harmony)
3. **Service:** Clother AI 간략 소개 (기업 관점, 서비스 판매 아님)
4. **Team:** 이명근, 김우주, 김기홍
5. **Contact/Footer:** 연락처, SNS, 법적 정보

## Aesthetic Direction
- **Direction:** Modern Warm
- **Decoration level:** minimal (그라데이션이 장식 역할, 추가 텍스처 없음)
- **Mood:** 깨끗하고 현대적이지만 둥글고 부드러운 요소로 따뜻함 연출. broz.co.kr 스타일 기업 소개 페이지
- **Reference sites:** broz.co.kr, jasper.ai, channel.io

## Logo
- 굵은 기하학적 산세리프: "PRIEN" 블랙 + "Z" 시안 블루
- 상단 그라데이션 바: 그린(#00D4AA) → 블루(#00B4D8)
- 그라데이션이 브랜드 DNA: 친환경(그린) → 기술(블루)

## Typography
- **Display/Hero:** Plus Jakarta Sans (Bold/ExtraBold) — 로고의 기하학적 굵은 타입과 조화. 둥근 끝처리가 친근함
- **Body:** DM Sans (Regular/Medium) — 깨끗하고 가독성 좋은 본문체
- **UI/Labels:** DM Sans (Medium/SemiBold)
- **Data/Code:** Geist Mono — AI 기술 설명 섹션에만
- **Korean fallback:** Pretendard
- **Loading:** Google Fonts CDN
- **Scale:**
  - Hero: 48-64px (mobile: 32-40px)
  - H1: 36-48px (mobile: 28-32px)
  - H2: 28-36px (mobile: 24-28px)
  - H3: 20-24px (mobile: 18-20px)
  - Body: 16-18px
  - Small: 14px
  - Caption: 12px

## Color
- **Approach:** balanced (로고 기반 2색 + 뉴트럴)

### Core Palette
```css
:root {
  /* Background */
  --color-bg: #FAFBFC;
  --color-surface: #FFFFFF;
  --color-surface-alt: #F5F5F5;

  /* Text */
  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
  --color-text-muted: #9CA3AF;

  /* Brand - from logo */
  --color-accent-blue: #00B4D8;
  --color-accent-green: #00D4AA;
  --color-gradient: linear-gradient(135deg, #00D4AA, #00B4D8);

  /* Section backgrounds */
  --color-section-mint: #F0FAFA;
  --color-section-sky: #F0F7FF;
  --color-section-dark: #111827;

  /* Semantic */
  --color-success: #00D4AA;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #00B4D8;

  /* Border & Shadow */
  --color-border: #E5E7EB;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.10);
}
```

### Gradient Usage Rules
- CTA 버튼: 그라데이션 배경 허용
- Hero 섹션: 그라데이션 텍스트 또는 장식 요소
- 섹션 구분선: 얇은 그라데이션 라인
- 절제 원칙: 한 화면에 그라데이션 요소 최대 2개

### Dark Section
- Footer나 특별 섹션에 --color-section-dark 사용
- 다크 배경 위 텍스트: #FFFFFF (primary), #9CA3AF (secondary)

## Spacing
- **Base unit:** 8px
- **Density:** comfortable
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px) 4xl(96px)
- **Section padding:** 80-120px (vertical), max-width 1200px (horizontal)

## Layout
- **Approach:** grid-disciplined
- **Grid:** 12 columns (desktop), 4 columns (mobile)
- **Max content width:** 1200px
- **Gutter:** 24px (desktop), 16px (mobile)
- **Border radius:** sm(8px) md(12px) lg(16px) xl(24px) full(9999px)
- **Breakpoints:** mobile(0-767px) tablet(768-1023px) desktop(1024px+)

## Motion
- **Approach:** minimal-functional
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(100ms) short(200ms) medium(300ms) long(500ms)
- **Scroll animation:** fade-in-up on section enter (threshold: 0.2)
- **Hover:** card lift (translateY -4px + shadow-md)
- **No:** parallax, 3D transforms, particle effects

## "Warmth" Sources (AI인데 따뜻하다)
- 둥근 모서리 (border-radius 12-16px on cards)
- 부드러운 그림자 (box-shadow)
- 섹션별 파스텔 배경색 교차 (민트, 스카이, 화이트)
- 친근한 카피 톤
- 반려동물 일러스트레이션 활용

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-22 | Initial design system created | /design-consultation, 로고 기반 그린→블루 그라데이션 활용 |
| 2026-05-22 | Modern Warm aesthetic | "AI인데 따뜻하다" 메시지를 현대적 디자인 + 둥근 요소로 전달 |
| 2026-05-22 | Corporate homepage structure | broz.co.kr 참고. 서비스 중심이 아닌 회사 소개 중심 |
| 2026-05-22 | Plus Jakarta Sans + DM Sans | 로고의 기하학적 sans와 조화, 둥근 끝처리로 친근함 |

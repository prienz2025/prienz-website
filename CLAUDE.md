# prienz-website

프렌즈(prienz) 기업 소개 정적 웹사이트

Light GSD 채택: ✅

## 스택

- HTML + CSS + JS (프레임워크 없음, 빌드 도구 없음)
- GitHub Pages 정적 호스팅
- 커스텀 도메인: prienz.co.kr

## 구조

```
/
├── index.html              ← 메인 홈 (GitHub Pages 진입점)
├── team.html               ← 팀 & 연혁
├── news.html               ← 뉴스 보드
├── news-article.html       ← 기사 상세 (?id= 쿼리로 기사 선택)
├── privacy.html            ← 개인정보처리방침
├── terms.html              ← 이용약관
├── business.html           ← 사업자정보
├── CNAME
├── css/
│   ├── tokens.css          ← 디자인 토큰 (색상, 타이포그래피)
│   └── main.css            ← 전체 UI 스타일
├── js/
│   ├── reveal.js           ← IntersectionObserver 스크롤 애니메이션
│   ├── nav.js              ← 스크롤 스파이, 모바일 메뉴, progress bar
│   ├── contact-modal.js    ← 문의 모달 show/hide, 폼
│   ├── news-data.js        ← 뉴스 기사 데이터
│   ├── home.js             ← 홈 뉴스 그리드 렌더링
│   ├── news-board.js       ← 태그 필터 + 목록 렌더링
│   └── news-article.js     ← ?id= 읽어서 기사 DOM 렌더링
└── assets/
    ├── logo.png
    └── logo-light.png
```

## 배포

- GitHub Pages (main 브랜치)
- CNAME 파일로 커스텀 도메인 연결
- 빌드 단계 없음 — push 후 자동 배포

## 개발

- 로컬 확인: `python3 -m http.server 8000` 후 http://localhost:8000
- 브라우저에서 index.html 직접 열기도 가능 (단, JS 모듈 fetch는 서버 필요)

## JS 구조 규칙

- 각 JS 파일은 IIFE로 감쌈 (전역 오염 방지)
- 동적 콘텐츠 추가 후 반드시 `window.initReveal()` 호출
- 문의 모달 열기: `data-action="open-contact"` 속성 또는 `window.openContactModal()`

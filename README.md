# 26-04-20 · AI로 고퀄리티 이미지와 콘텐츠 생성하기

2026년 월요 AI 강의 시리즈 **2회차** (2026-04-20, 14:00-16:00).
대상 청중: 40-60대, 1회차(생성형 AI 이해) 참석 경험.

## 구조

| 파일 | 역할 |
|---|---|
| `lecture.md` | One Source. 책 형태의 풍성한 글. Pandoc article-html/pdf 렌더 대상. |
| `slides.md` | 발표용 Slidev 슬라이드 (파생). |
| `labs.md` | 실습 워크북. |
| `notes/` | Obsidian 호환 용어 노트. |
| `public/images/` | Slidev가 `/images/...` 절대경로로 참조. placeholder 파일명은 `{섹션}-{slug}[-before|after].png`. |
| `assets/` | Ref.md 등 강의 외 참고자료. |

## 실행

```bash
bun install              # 최초 1회
bun run dev              # http://localhost:3030 발표 미리보기
bun run build            # dist/ 정적 SPA
bun run export           # slides-export.pdf (Playwright 필요)
```

Pandoc article 렌더 (모노레포 루트):

```bash
make article-html LECTURE=lectures/26-04-20-ai-image
make article-pdf  LECTURE=lectures/26-04-20-ai-image
```

## 이미지 Placeholder 규약

`public/images/`에 `{섹션번호}-{내용-slug}[-before|after].png` 형식의 빈 경로.
실제 이미지는 Midjourney · Gemini · Nano Banana 등으로 생성하여 채워 넣는다.
`lecture.md`의 각 placeholder 아래에 생성 가이드(프롬프트 힌트)를 주석으로 둔다.

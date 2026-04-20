# Slidev 강의 슬라이드 폴리싱 워크플로우

> 26-04-20 강의 제작 과정에서 확립한 Polish 단계 절차.
> 이후 강의 자동화 참고용.

---

## 1. Polish 진입 조건

| 조건 | 내용 |
|---|---|
| lecture.md | 완성 (One Source) |
| slides.md | 초안 완성 (전체 슬라이드 구조·내용 확정) |
| public/images/ | 실제 이미지 파일 채워짐 (또는 placeholder 경로 확정) |
| 로컬 dev 서버 | `bun run dev` 정상 기동 확인 |

---

## 2. Polish 단계 체크리스트

### 2-1. 구조 검토
- [ ] 슬라이드 전체 수 확인 (`grep -c "^---$" slides.md`)
- [ ] 섹션 구분 슬라이드 위치·수 적절한가
- [ ] 각 파트 분량 비율 (이론 : 실습 : 기법 = 약 3:3:4)
- [ ] 슬라이드 번호·섹션 번호 노출 여부 (번호는 제거)

### 2-2. 레이아웃 검토
- [ ] `layout: image-right` 슬라이드 → 반드시 `backgroundSize: contain` frontmatter 추가
- [ ] `layout: image` (전면) 슬라이드 → 텍스트가 겹치는지 확인
- [ ] `layout: compare` (커스텀) → before/after 경로 모두 명시
- [ ] `two-cols` 슬라이드 → 양쪽 균형 확인
- [ ] cover 슬라이드 → `class: text-center cover-image` + 오버레이 확인

### 2-3. 이미지 검토
- [ ] 모든 이미지 경로 실제 파일 존재 확인
  ```bash
  grep -oP '/images/[^"]+' slides.md | sort -u | while read p; do
    [ -f "public$p" ] || echo "MISSING: $p"
  done
  ```
- [ ] `object-fit: contain` 적용 여부 (image-right는 frontmatter, img 태그는 inline style)
- [ ] 이미지 추가 필요한 자리 placeholder 채움 확인

### 2-4. Mermaid 다이어그램
- [ ] `setup/mermaid.ts` 존재 확인 (`defineMermaidSetup` 방식만 유효)
- [ ] 각 블록에 `{scale: N}` 명시 (0.65~0.85 범위)
- [ ] 한글 폰트: `setup/mermaid.ts`에서 `fontSize` + CSS에서 `font-family` 지정
- [ ] ⚠️ headmatter `mermaid:` 키는 **렌더링에 무효** (폰트/테마 적용 안 됨)

### 2-5. 텍스트·타이포그래피
- [ ] HTML div 블록 안 줄바꿈 → 문장 끝 `  ` (공백 2개) 또는 `<br>` 필요
- [ ] 강조 (`**bold**`) 남용 여부 (블루 강조 — 핵심 키워드만)
- [ ] H3 사용 (`###`) — 오렌지 왼쪽 바 자동 적용
- [ ] 인라인 코드(`` `code` ``) — 오렌지 배경 자동 적용
- [ ] 표 컬럼 수 ≤ 5 (슬라이드 폭 넘침 주의)

### 2-6. Speaker Notes
- [ ] 모든 슬라이드에 `<!-- ... -->` notes 존재
- [ ] 커버·섹션: 전환 멘트 / 콘텐츠: 강조 포인트·발화 힌트

### 2-7. 첫 슬라이드 → 마지막 슬라이드 순차 확인
브라우저에서 `→` 키로 슬라이드 넘기며 확인:
- [ ] 레이아웃 깨짐 없음
- [ ] 이미지 미노출 슬라이드 파악 (placeholder 여부)
- [ ] 텍스트 오버플로 없음 (슬라이드 밖으로 튀어나오는 텍스트)
- [ ] Mermaid 다이어그램 크기·색상 정상

---

## 3. 자주 발생한 트러블슈팅

| 증상 | 원인 | 해결 |
|---|---|---|
| Mermaid 테마 적용 안 됨 | headmatter `mermaid:` 키 무효 | `setup/mermaid.ts` + `defineMermaidSetup()` |
| Mermaid 다이어그램 너무 큼 | 기본 크기 = 슬라이드 전체 | 코드 블록에 `{scale: 0.75}` 등 추가 |
| image-right 이미지 잘림 (cover) | inline style이 CSS보다 우선 | frontmatter에 `backgroundSize: contain` |
| div 안 줄바꿈 무시 | Markdown 단락 규칙 | 행 끝 공백 2개 또는 `<br>` |
| cover 이미지 + 텍스트 가독성 | 배경 직접 노출 | `::before` 다크 오버레이 (`rgba` 0.6~0.7) |
| 커스텀 레이아웃 인식 안 됨 | `layouts/*.vue` 파일명 = 레이아웃 이름 | Vue SFC + `defineProps` + `<slot />` |
| bun install 누락 시 build 실패 | 새 폴더는 node_modules 없음 | `bun install` 먼저 |

---

## 4. 커스텀 에셋 파일 목록

| 파일 | 역할 |
|---|---|
| `styles/index.css` | 전역 디자인 토큰 + 레이아웃 스타일 |
| `setup/mermaid.ts` | Mermaid 테마·색상 (유일하게 유효한 방법) |
| `layouts/compare.vue` | Before/After 비교 레이아웃 (커스텀) |

---

## 5. 배포·PDF 워크플로우 (다음 단계)

```bash
# 모노레포 루트에서 실행
make slidev-html LECTURE=lectures/26-04-20-ai-image   # dist/ → out/ 복사
make slidev-pdf  LECTURE=lectures/26-04-20-ai-image   # Playwright PDF
make article-html LECTURE=lectures/26-04-20-ai-image  # lecture.md → HTML
make article-pdf  LECTURE=lectures/26-04-20-ai-image  # lecture.md → PDF
```

### GitHub Pages 배포 (강의별 repo)
```bash
cd lectures/26-04-20-ai-image
bun run build -- --base /ai-image/     # GitHub repo slug에 맞춰 --base 지정
# dist/ → gh-pages 브랜치 push
```

---

*최종 확인: 2026-04-20 / @ExpandSource*

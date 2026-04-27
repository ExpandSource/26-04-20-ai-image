# Slidev 강의 슬라이드 폴리싱 워크플로우

> 26-04-20 강의 제작 과정에서 확립한 Polish 단계 절차.
> 이후 강의 자동화 참고용.

---

## 1. Polish 진입 조건

| 조건 | 내용 |
|---|---|
| lecture.md | 완성 (One Source) |
| slides.md | 초안 완성 (전체 슬라이드 구조·내용 확정) |
| `assets/placeholders.md` | 자산 매니페스트 작성 완료 (§7 참조) |
| public/images/ · public/audio/ | 실제 파일 채워짐 (또는 placeholder 경로 확정) |
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

### 산출물 위치 (Makefile v0.4부터)

모든 산출물이 강의 폴더 안에 모임. 폴더가 self-contained:

```
lectures/<lecture-slug>/
├── dist/                ← Slidev SPA (slidev-html 빌드 결과)
└── out/
    ├── lecture.html         ← Pandoc article HTML
    ├── lecture.pdf          ← Pandoc article PDF
    └── slides.pdf           ← Slidev export PDF
```

`dist/` `out/` 모두 강의 폴더의 `.gitignore`에 들어감.

### 빌드 명령

```bash
# 모노레포 루트에서 실행 (Makefile은 루트에 있음)
make slidev-html  LECTURE=lectures/<lecture-slug>   # → $(LECTURE)/dist/
make slidev-pdf   LECTURE=lectures/<lecture-slug>   # → $(LECTURE)/out/slides.pdf
make article-html LECTURE=lectures/<lecture-slug>   # → $(LECTURE)/out/lecture.html
make article-pdf  LECTURE=lectures/<lecture-slug>   # → $(LECTURE)/out/lecture.pdf
make clean        LECTURE=lectures/<lecture-slug>   # dist/ + out/ 삭제
```

### GitHub Pages 배포 (강의별 repo)

```bash
cd lectures/<lecture-slug>
bun run build -- --base /<repo-slug>/     # GitHub repo slug에 맞춰 --base 지정
# dist/ + out/lecture.html + out/slides.pdf 를 gh-pages 브랜치로 push
# (3종 모두 같은 폴더에 있어 한 번에 묶기 쉬움)
```

---

## 6. Asset Manifest — `assets/placeholders.md` (3회차에서 도입)

각 강의 폴더 안에 `assets/placeholders.md`를 둔다. 이 파일은 **두 역할**을 한다.

1. **작업 가이드** — 작업자가 이미지·오디오·영상 placeholder를 채울 때 도구·프롬프트·캡처 시점을 안내.
2. **Source 목록** — `lecture.md`·`slides.md`가 의존하는 외부 자산을 한눈에 보여주고 누락 점검도 겸함.

### 작성 시점

- Phase 3 (`slides.md`) 초안 완성 직후. **빌드 검증 전**에 한 번 작성.
- 본문이 placeholder를 추가/제거할 때마다 갱신.

### 권장 구조

```
1. 진행 상황 체크박스 (이미지·오디오 각각 미체크 목록)
2. 카테고리별 정리
   - 이미지 카테고리 1. 다이어그램·콜라주 (AI 생성)
   - 이미지 카테고리 2. UI 스크린샷 (캡처)
   - 이미지 카테고리 3. 결과 캡처 (서비스 결과물)
   - 오디오 / 비디오 등
3. 항목별 정보 — 파일명 / 사용 위치 (lecture.md·slides.md 라인) / 권장 프롬프트 또는 캡처 가이드
4. 채운 후 검증 (grep으로 누락 점검 + 빌드 재실행 명령)
5. 시간 견적
```

### 자동 추출 한 줄

```bash
# 이미지·오디오·비디오 placeholder 경로 한꺼번에 추출 (강의 폴더 안에서)
grep -hoE "(/images|\./public/images|/audio|/videos?)/[a-z0-9.-]+\.(png|jpg|jpeg|webp|mp3|wav|m4a|mp4|webm)" \
  slides.md lecture.md | sort -u
```

이 결과를 placeholders.md의 진행 체크박스와 비교하면 누락·잉여 즉시 발견. (확장자 패턴에 숫자가 들어가는 `mp3`·`mp4`를 명시적으로 포함해야 함 — `[a-z]+`만 쓰면 `3`/`4`가 잘린다)

### 참조

- 2회차에는 placeholders.md가 없었음 (사후 도입).
- 3회차 `lectures/26-04-27-ai-music/assets/placeholders.md` 가 첫 적용 사례.

---

## 7. 오디오 embed 함정 (3회차에서 발견)

`<audio controls src="/audio/...">` 태그를 **lecture.md**에 두면 Pandoc article-html 빌드가 실패한다.
`--embed-resources` 옵션이 절대경로 `/audio/...`를 파일시스템 루트에서 찾기 때문.

### 회피 패턴

| 산출물 | 작성 방식 |
|---|---|
| `lecture.md` (Pandoc 대상) | 텍스트 안내만 — 예: `> 🎵 샘플 placeholder — public/audio/x.mp3` |
| `slides.md` (Slidev 대상) | `<audio controls src="/audio/x.mp3"></audio>` (Slidev SPA가 정상 처리) |

이 분리 원칙은 향후 비디오(`<video>`)·iframe 등 외부 자산 embed에도 동일하게 적용.

placeholders.md(§6)에 오디오·비디오 항목을 등재할 때, "lecture.md = 텍스트 안내 / slides.md = embed 태그" 분리를 작성 시점부터 명시하면 위 함정에 다시 빠지지 않는다.

---

*최종 확인: 2026-04-25 / @ExpandSource (3회차에서 v0.4 갱신, Asset Manifest §6 추가)*

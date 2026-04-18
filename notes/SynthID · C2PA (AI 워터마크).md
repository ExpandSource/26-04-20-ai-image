---
term: "SynthID / C2PA"
aliases: [신스아이디, 씨투피에이, AI 워터마크, 콘텐츠 출처 인증, 디지털 워터마크]
tags: [ai, safety, watermarking, authenticity, provenance]
created: "2026-04-18"
complexity: intermediate
domain: artificial-intelligence
---

# SynthID · C2PA (AI 워터마크 / 콘텐츠 출처 인증)

> [!summary]
> SynthID와 C2PA는 AI가 생성·수정한 이미지·음성·영상에 **사람 눈엔 안 보이지만 기계는 읽을 수 있는 표식**을 심어, 나중에 "이건 AI로 만들어졌다"는 사실을 검증할 수 있게 하는 기술이다. 딥페이크·가짜뉴스 대응의 핵심 인프라로 부상하고 있다.

## 핵심 개념
- **SynthID (Google DeepMind)**: 이미지·오디오·텍스트·영상에 **픽셀/신호 수준의 보이지 않는 워터마크**를 삽입. 편집·압축·캡처에도 상당한 수준까지 살아남는다. 전용 검증 도구로만 판별 가능.
- **C2PA (Coalition for Content Provenance and Authenticity)**: Adobe·Microsoft·OpenAI·Nikon·소니 등이 주도하는 **개방 표준**. 이미지 메타데이터에 "누가, 언제, 어떤 도구로, 어떻게 편집했는지" 이력을 **서명된 증명서** 형태로 붙인다.
- **차이점**:
  - SynthID = **신호 안에 숨긴 도장** (파일이 훼손돼도 살아남음)
  - C2PA = **신분증 스티커** (파일에 붙어 있지만 제거되면 무효)
  - 실무에서는 **둘을 병행**하는 것이 권장됨.
- **지원 현황 (2026-04 기준)**: Google Gemini·Imagen·[[Nano Banana]]는 SynthID 자동 삽입. OpenAI·Adobe Firefly·Microsoft Copilot·일부 카메라 제조사는 C2PA 지원.

## 상세 설명
"이 사진이 진짜인지 AI인지 어떻게 알지?"는 2025~2026년 사회적 핵심 질문이 됐다. 기존 대응책(이미지 분석 기반 AI 탐지기)은 정확도가 낮고 모델이 바뀌면 금세 무력해진다. SynthID·C2PA는 **생성·편집 시점에 표식을 심는** 접근이라 더 견고하다. 다만 한계도 있다:
- 오픈소스 [[Stable Diffusion]]을 로컬에서 돌리면 워터마크 없이 생성 가능. 악의적 사용자는 이 경로를 택한다.
- C2PA는 스크린샷·트리밍으로 메타데이터가 쉽게 날아간다.
- 그래서 "워터마크 있음 = AI"는 맞지만 "워터마크 없음 = 사람이 찍은 진짜"는 아니다.

공공기관·언론·기업 커뮤니케이션에서는 **발신 측이 C2PA 서명을 붙여 내보내는** 흐름이 표준이 되어가고 있다.

## 예시
- Gemini에서 생성한 이미지를 SynthID 검증 툴에 넣으면 "Google AI가 생성함" 확률이 나온다.
- Nikon Z9·Sony α1 같은 카메라가 촬영 순간 C2PA 서명을 이미지에 삽입. 언론사가 소스를 검증할 때 사용.
- 인스타그램·X(트위터)·YouTube가 C2PA 메타데이터를 읽어 "AI 생성" 라벨을 자동 부착하기 시작(2025~).

## 관련 개념
[[Nano Banana]] · [[Diffusion Model (확산 모델)]] · [[Stable Diffusion]]

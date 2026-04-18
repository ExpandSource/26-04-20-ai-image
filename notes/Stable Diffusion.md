---
term: "Stable Diffusion"
aliases: [스테이블 디퓨전, SD, SDXL, SD3]
tags: [ai, image-generation, open-source, diffusion]
created: "2026-04-18"
complexity: intermediate
domain: artificial-intelligence
---

# Stable Diffusion (스테이블 디퓨전)

> [!summary]
> Stable Diffusion은 Stability AI가 2022년 공개한 **오픈소스** 이미지 생성 모델로, 이미지 AI의 대중화를 일으킨 결정적 모델이다. 가중치가 공개되어 누구나 로컬 PC에서 돌릴 수 있고, 수많은 파생 모델·[[LoRA (경량 파인튜닝)]]·UI 생태계가 형성되어 있다.

## 핵심 개념
- **오픈소스**: 모델 파일(.safetensors)을 자유롭게 다운로드해 로컬 GPU에서 실행 가능. Civitai·Hugging Face에서 수만 개 커뮤니티 튜닝 버전을 구할 수 있다.
- **버전 계보**: SD 1.5(2022) → SDXL(2023) → SD 3 / Flux(2024~2025). 각 세대마다 품질·해상도·프롬프트 준수도 향상.
- **UI 생태계**:
  - **Automatic1111 (A1111)**: 웹 UI. 가장 대중적. 초보자 진입용.
  - **[[ComfyUI]]**: 노드 기반. 복잡한 워크플로우·자동화 강점.
  - **Forge·Fooocus**: 각각 성능·사용성 개선 포크.
- **커스터마이징**: [[LoRA (경량 파인튜닝)]], ControlNet(포즈/깊이/엣지 제어), IP-Adapter(이미지 참조), Inpainting 모델 등 풍부한 확장 기능.
- **비용**: 서버 구독 불필요. 하지만 RTX급 GPU(VRAM 8~24GB)가 사실상 필수. 클라우드 대여로도 가능.

## 상세 설명
Stable Diffusion 이전에는 DALL·E 2·Midjourney 같은 **폐쇄 서비스**만 실질적 선택지였다. 2022년 8월 가중치 공개로 판도가 바뀌어, 개인이 로컬에서 무제한 생성·커스터마이징이 가능해졌다. 이 생태계에서 [[LoRA (경량 파인튜닝)]]·[[ComfyUI]]·ControlNet 같은 실무 워크플로우가 자라났다. 2026년 현재 대중 소비자는 [[Midjourney]]·[[Nano Banana]] 같은 폐쇄형 서비스로 많이 이동했지만, **프로 아티스트·영상 스튜디오·NSFW 회피 필요 영역**에서는 여전히 Stable Diffusion 계열이 표준이다.

## 예시
- 로컬 PC에 A1111 설치 → 체크포인트 모델 + LoRA 3개 조합 → 자기만의 화풍으로 대량 생성
- ControlNet으로 막대 인물(stick figure) 포즈를 정확히 따라 그리기
- 영화 스튜디오가 수천 장의 컨셉 아트 시드를 SD + LoRA로 뽑은 뒤, 아트 디렉터가 고르는 워크플로우

## 관련 개념
[[Diffusion Model (확산 모델)]] · [[ComfyUI]] · [[LoRA (경량 파인튜닝)]] · [[Midjourney]] · [[Inpainting (인페인팅)]]

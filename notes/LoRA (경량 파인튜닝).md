---
term: "LoRA"
aliases: [Low-Rank Adaptation, 로라, 경량 파인튜닝, 저랭크 적응]
tags: [ai, fine-tuning, stable-diffusion, customization]
created: "2026-04-18"
complexity: advanced
domain: artificial-intelligence
---

# LoRA (Low-Rank Adaptation, 경량 파인튜닝)

> [!summary]
> LoRA는 거대한 AI 모델을 **전체 재학습하지 않고** 수백 MB 정도의 작은 추가 파일로 스타일·인물·개념을 학습시키는 기법이다. [[Stable Diffusion]] 생태계에서 "내가 원하는 화풍"·"특정 캐릭터"·"특정 얼굴"을 모델에 가르치는 표준 방법으로 자리잡았다.

## 핵심 개념
- **핵심 아이디어**: 원본 모델의 파라미터는 동결해 두고, 곁에 **작은 보조 행렬**(low-rank)만 학습시킨다. 결과적으로 학습 데이터·시간·GPU 부담이 수십~수백 배 줄어든다.
- **파일 크기**: 보통 10MB~200MB. 원본 모델(수 GB)에 얹어 쓴다.
- **활용**: 특정 화가 스타일, 특정 애니메이션 캐릭터, 내 얼굴, 특정 브랜드 로고 등을 학습시킬 수 있다.
- 기반 모델: 주로 [[Stable Diffusion]]·Flux 계열. 폐쇄형 서비스([[Midjourney]]·Gemini·ChatGPT)는 자체 내부 튜닝을 쓰고 LoRA를 직접 지원하지 않는다.
- Civitai·Hugging Face 같은 모델 허브에 사용자 제작 LoRA가 수만 개 공유되어 있다.

## 상세 설명
일반 사용자가 [[Stable Diffusion]]을 [[ComfyUI]]나 Automatic1111로 돌릴 때, 원본 체크포인트 + LoRA 여러 개를 조합해 원하는 결과를 만드는 것이 표준 워크플로우다. "이 배경에 + 이 캐릭터 LoRA를 + 이 화풍 LoRA 강도 0.6으로" 같은 조합이 가능하다. 저작권·초상권 민감 영역(특정 배우 얼굴, 특정 작가 화풍)의 회색지대이기도 해서, 공유 플랫폼들도 점점 심사 기준을 강화하고 있다.

## 예시
- "지브리풍 LoRA" + "밤하늘" 프롬프트 → 지브리 애니 스타일의 밤 풍경
- 내 얼굴 사진 20장으로 LoRA 학습 → 그 얼굴로 "우주비행사·탐정·사무라이" 같은 이미지 생성

## 관련 개념
[[Stable Diffusion]] · [[Diffusion Model (확산 모델)]] · [[ComfyUI]]

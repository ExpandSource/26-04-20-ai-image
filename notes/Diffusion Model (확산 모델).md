---
term: "Diffusion Model"
aliases: [확산 모델, Diffusion, 디퓨전 모델]
tags: [ai, image-generation, deep-learning, generative-model, diffusion]
created: "2026-04-18"
complexity: intermediate
domain: artificial-intelligence
---

# Diffusion Model (확산 모델)

> [!summary]
> 확산 모델은 이미지에 노이즈를 단계적으로 더했다가 다시 **되돌리는** 과정을 학습해, 무작위 노이즈로부터 점진적으로 선명한 이미지를 만들어내는 생성 모델이다. 2022년 [[Stable Diffusion]]·DALL·E 2 등장 이후 텍스트-이미지 생성의 주류가 되었다.

## 핵심 개념
- **기본 원리**: 학습 시 이미지에 노이즈를 점점 주입했다가, 역으로 노이즈를 제거하는 법을 배운다. 생성 시에는 순수 노이즈에서 출발해 수십 단계에 걸쳐 이미지를 복원한다.
- **장점**: 프롬프트 반영도가 높고, 한 모델로 다양한 주제·스타일을 커버한다. [[Inpainting (인페인팅)]] 같은 부분 편집에 강하다.
- **단점**: 여러 단계를 거치므로 [[GAN (적대적 생성 신경망)]]보다 생성 속도가 느리다. 다만 최근 수년간 속도 최적화가 크게 진전됐다.
- 대표 모델: [[Stable Diffusion]], DALL·E 2/3, Imagen, [[Midjourney]]의 대부분 버전, Flux.

## 상세 설명
확산 모델은 이미지 생성 AI의 **두 번째 계보**이자 현재의 주력이다. 오픈소스 [[Stable Diffusion]]의 공개(2022-08)는 개인 사용자가 로컬에서 이미지를 생성할 수 있게 만들어 커뮤니티 폭발을 가져왔다. [[ComfyUI]]·Automatic1111 같은 UI, [[LoRA (경량 파인튜닝)]] 같은 커스터마이징 기법이 모두 이 모델 생태계에서 발전했다. 2024년 이후 등장한 [[AutoRegressive Model (자기회귀 모델)]] 계열(GPT Image, Gemini [[Nano Banana]])은 일부 영역에서 확산 모델을 대체하고 있지만, 사진·회화 풍의 고품질 이미지 생성에서는 여전히 확산 모델이 지배적이다.

## 예시
- "A photo of a cat wearing a wizard hat, cinematic lighting": 순수 노이즈 → 20-40단계 디노이징 → 완성 이미지
- 사진의 일부를 마스크로 가리고 "이 부분을 해변으로 바꿔줘": 가려진 영역만 새로 디퓨전으로 생성 ([[Inpainting (인페인팅)]])

## 관련 개념
[[GAN (적대적 생성 신경망)]] · [[AutoRegressive Model (자기회귀 모델)]] · [[Stable Diffusion]] · [[Midjourney]] · [[LoRA (경량 파인튜닝)]] · [[Inpainting (인페인팅)]]

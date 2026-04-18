---
term: "AutoRegressive Model"
aliases: [자기회귀 모델, 오토리그레시브, AR Model, 자기회귀 이미지 모델]
tags: [ai, image-generation, deep-learning, generative-model, multimodal]
created: "2026-04-18"
complexity: advanced
domain: artificial-intelligence
---

# AutoRegressive Model (자기회귀 모델)

> [!summary]
> 자기회귀 모델은 이미지를 잘게 쪼갠 **토큰**을 한 개씩 순차적으로 예측해 생성하는 모델이다. [[LLM (대규모 언어 모델)]]이 다음 단어를 예측하는 방식을 이미지에 그대로 적용한 계열로, GPT Image·Gemini [[Nano Banana]] 같은 최신 멀티모달 모델이 여기에 속한다.

## 핵심 개념
- **동작 원리**: 이미지를 수천~수만 개의 시각 토큰(visual token)으로 분해하고, LLM처럼 "다음 토큰"을 하나씩 예측해 이미지를 구성한다.
- **장점**: 텍스트와 이미지를 **같은 모델** 안에서 이해·생성할 수 있다. 대화 맥락·참조 이미지를 자연스럽게 받아들여 편집·합성에 강하다.
- **장점 2**: 텍스트 렌더링(이미지 속 글자 쓰기)·정확한 레이아웃 반영에서 [[Diffusion Model (확산 모델)]]보다 우세한 경향.
- **단점**: 속도·비용이 상대적으로 높고, 고해상도 세부 디테일은 아직 디퓨전 계열이 우세한 경우가 많다.

## 상세 설명
이 계열이 주목받기 시작한 건 OpenAI가 **GPT Image**(2024-2025)를, Google이 **Gemini Image / [[Nano Banana]]**를 공개하면서부터다. 이전까지 이미지 생성의 주류는 [[Diffusion Model (확산 모델)]]이었지만, AutoRegressive 접근은 "대화 속에서 이미지를 만들고 고치는" 워크플로우에 훨씬 자연스럽게 녹아든다. 2026년 현재 **합성·편집·일관성 유지**가 중요한 작업에서 빠르게 표준이 되고 있다.

## 예시
- "이 사진에서 배경만 바닷가로 바꿔줘": 원본을 참조 토큰으로 받아들이고 배경 부분만 새 토큰으로 생성
- "방금 만든 캐릭터를 그대로 유지하고 표정만 웃는 얼굴로": [[Nano Banana]]의 캐릭터 일관성 활용

## 관련 개념
[[GAN (적대적 생성 신경망)]] · [[Diffusion Model (확산 모델)]] · [[Nano Banana]] · [[LLM (대규모 언어 모델)]]

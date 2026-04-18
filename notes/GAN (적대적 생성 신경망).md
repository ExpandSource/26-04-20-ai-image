---
term: "GAN"
aliases: [Generative Adversarial Network, 적대적 생성 신경망, 생성적 적대 신경망]
tags: [ai, image-generation, deep-learning, generative-model]
created: "2026-04-18"
complexity: intermediate
domain: artificial-intelligence
---

# GAN (Generative Adversarial Network, 적대적 생성 신경망)

> [!summary]
> GAN은 **생성자(Generator)**와 **판별자(Discriminator)**라는 두 신경망이 서로 경쟁하며 학습하는 이미지 생성 모델이다. 2014년 이안 굿펠로우가 제안했고, 한때 "이 얼굴은 실존하지 않는다" 같은 초고화질 얼굴 생성으로 이미지 AI 붐의 시작점을 만들었다.

## 핵심 개념
- **경쟁 학습 구조**: 생성자는 가짜 이미지를 만들어내고, 판별자는 그것이 진짜인지 가짜인지 맞힌다. 두 쪽이 번갈아 성장하며 점점 진짜 같은 이미지가 만들어진다.
- **장점**: 이미지 생성 속도가 빠르고, 특정 도메인(얼굴·풍경 등)에서 극사실적 결과를 만든다.
- **한계**: 학습이 불안정하고, 다양한 주제를 한 모델로 커버하기 어렵다. 텍스트 프롬프트 기반 생성은 약하다.
- [[Diffusion Model (확산 모델)]]이 등장한 2021-2022년 이후 주류에서 밀려났다. 하지만 속도가 필요한 특수 용도(실시간 변환 등)에는 여전히 사용된다.

## 상세 설명
GAN은 이미지 생성 AI의 **첫 번째 계보**다. StyleGAN·BigGAN·Pix2Pix 등 수많은 변형이 만들어졌고, 얼굴 합성·이미지 변환·해상도 복원 등에 활용되었다. 다만 프롬프트(텍스트)로 이미지를 만드는 **텍스트-to-이미지** 작업에는 약해서, 2022년 [[Stable Diffusion]]·DALL·E 2 등장 이후 대중 서비스에서는 빠르게 [[Diffusion Model (확산 모델)]]에 자리를 내주었다.

## 예시
- **ThisPersonDoesNotExist.com**: StyleGAN으로 생성된 가짜 얼굴 사이트
- 저해상도 사진의 해상도 복원, 흑백 사진 컬러화 같은 이미지 변환 작업

## 관련 개념
[[Diffusion Model (확산 모델)]] · [[AutoRegressive Model (자기회귀 모델)]] · [[Stable Diffusion]]

---
term: "Midjourney"
aliases: [미드저니, MJ]
tags: [ai, image-generation, art, subscription]
created: "2026-04-18"
complexity: beginner
domain: artificial-intelligence
---

# Midjourney (미드저니)

> [!summary]
> Midjourney는 독립 연구 랩이 개발·운영하는 이미지 생성 서비스로, 초기부터 지금까지 **예술성 높은 스타일 표현**에서 업계 최고 평판을 유지해왔다. Discord 봇으로 시작해 현재는 웹 UI도 제공하며, 월 구독 모델로 운영된다.

## 핵심 개념
- **강점**: "그냥 예쁘다". 같은 프롬프트를 넣어도 기본 출력의 미적 완성도가 경쟁 모델 대비 높다는 평이 지배적이다. 컨셉 아트·포스터·일러스트 계열에 특히 강하다.
- **모델**: 내부적으로 [[Diffusion Model (확산 모델)]] 계열을 고도로 튜닝한 독자 모델. 버전이 올라갈수록(v5 → v6 → v7) 사진 사실성·프롬프트 준수도가 개선되어왔다.
- **요금제**: 무료 없음. Basic(약 $10/월) ~ Pro($60/월) ~ Mega($120/월). 이미지 생성량·동시 실행·리믹스 모드에 따라 차등.
- **조작**: `/imagine` 슬래시 커맨드 + 프롬프트. `--ar 16:9`(비율), `--s 750`(스타일화 강도), `--chaos 30`(변동성) 등 파라미터로 미세 조정.
- **약점**: 텍스트 렌더링·정확한 객체 수·편집 기능이 대화형 경쟁자([[Nano Banana]], GPT Image)보다 약하다.

## 상세 설명
Midjourney는 "AI로 예쁜 그림을 뽑고 싶다"는 사용자 요구에 가장 먼저, 가장 잘 답한 서비스다. [[Stable Diffusion]]이 오픈소스·커스터마이징 축을 대표한다면, Midjourney는 **폐쇄형이지만 기본 품질이 높은** 축을 대표한다. 2025년 이후 웹 UI·V7 릴리스를 통해 초심자 진입 장벽을 낮췄지만, 여전히 "대화하면서 고치기"는 약점으로 남아 있어 편집 중심 작업은 [[Nano Banana]]·GPT Image와 병행하는 것이 실전 패턴이다.

## 예시
- "cinematic portrait of an old Korean fisherman, golden hour, shallow depth of field --ar 3:2 --s 400" → Midjourney 특유의 영화적 톤
- 포스터 컨셉 30장을 빠르게 뽑고, 그 중 고른 한 장을 [[Nano Banana]]로 문구 삽입·편집

## 관련 개념
[[Stable Diffusion]] · [[Nano Banana]] · [[Diffusion Model (확산 모델)]] · [[Seedream]]

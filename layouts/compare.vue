<script setup lang="ts">
defineProps({
  before: { type: String, default: '' },
  after: { type: String, default: '' },
  beforeLabel: { type: String, default: 'Before' },
  afterLabel: { type: String, default: 'After' },
})
</script>

<!--
  Split layout:
  ┌──────────────┬──────────────┐
  │ text content │              │
  │  (slot)      │  after image │
  ├──────────────│  (tall)      │
  │ before image │              │
  └──────────────┴──────────────┘
-->
<template>
  <div class="slidev-layout compare">
    <!-- left: content (top) + before (bottom) -->
    <div class="cmp-left">
      <div class="cmp-content">
        <slot />
      </div>
      <div class="cmp-before-area">
        <span class="cmp-badge cmp-badge-before">{{ beforeLabel }}</span>
        <img v-if="before" :src="before" class="cmp-img" alt="before" />
        <div v-else class="cmp-empty">이미지 준비 중</div>
      </div>
    </div>
    <!-- right: after image full height -->
    <div class="cmp-right">
      <span class="cmp-badge cmp-badge-after">{{ afterLabel }}</span>
      <img v-if="after" :src="after" class="cmp-img" alt="after" />
      <div v-else class="cmp-empty">이미지 준비 중</div>
    </div>
  </div>
</template>

<style scoped>
.compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
  padding: 0.8rem 2rem 0.8rem !important;
  height: 100%;
  box-sizing: border-box;
}

.cmp-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 0;
  overflow: hidden;
}

.cmp-content {
  flex-shrink: 0;
}

.cmp-before-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-height: 0;
}

.cmp-right {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-height: 0;
}

.cmp-badge {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.18em 0.6em;
  border-radius: 3px;
  flex-shrink: 0;
  font-family: 'D2Coding', monospace;
}

.cmp-badge-before {
  background: #64748b;
  color: #fff;
}

.cmp-badge-after {
  background: #2563eb;
  color: #fff;
}

.cmp-img {
  width: 100%;
  flex: 1;
  object-fit: contain;
  border-radius: 6px;
  min-height: 0;
  max-height: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
}

.cmp-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  border-radius: 6px;
  color: #94a3b8;
  font-size: 0.8rem;
  border: 2px dashed #cbd5e1;
  min-height: 50px;
}
</style>

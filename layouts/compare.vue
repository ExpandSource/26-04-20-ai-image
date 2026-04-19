<script setup lang="ts">
defineProps({
  before: { type: String, default: '' },
  after: { type: String, default: '' },
  beforeLabel: { type: String, default: 'Before' },
  afterLabel: { type: String, default: 'After' },
})
</script>

<template>
  <div class="slidev-layout compare">
    <div class="cmp-body">
      <slot />
    </div>
    <div class="cmp-panels">
      <div class="cmp-panel">
        <span class="cmp-badge cmp-before">{{ beforeLabel }}</span>
        <img v-if="before" :src="before" class="cmp-img" alt="before" />
        <div v-else class="cmp-empty">이미지 준비 중</div>
      </div>
      <div class="cmp-panel">
        <span class="cmp-badge cmp-after">{{ afterLabel }}</span>
        <img v-if="after" :src="after" class="cmp-img" alt="after" />
        <div v-else class="cmp-empty">이미지 준비 중</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.compare {
  display: flex;
  flex-direction: column;
  padding: 0.8rem 2.2rem 0.8rem !important;
  height: 100%;
  box-sizing: border-box;
  gap: 0.5rem;
}

.cmp-body {
  flex-shrink: 0;
}

.cmp-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  flex: 1;
  min-height: 0;
}

.cmp-panel {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
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

.cmp-before {
  background: #64748b;
  color: #fff;
}

.cmp-after {
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
}
</style>

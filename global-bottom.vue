<template>
  <div class="lecture-footer">
    <span class="footer-title">AI로 고퀄리티 이미지와 콘텐츠 생성하기</span>
    <span class="footer-sep">·</span>
    <span>2026-04-20</span>
    <span class="footer-sep">·</span>
    <span>ExpandSource</span>
    <span class="footer-page">{{ currentPage }} / {{ total }}</span>
  </div>
</template>

<script setup lang="ts">
import { useNav } from '@slidev/client'
const { currentPage, total } = useNav()
</script>

<style scoped>
.lecture-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 22px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 1.4em;
  font-size: 10px;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  letter-spacing: -0.01em;
  color: rgba(100, 116, 139, 0.55);
  border-top: 1px solid rgba(100, 116, 139, 0.13);
  pointer-events: none;
  z-index: 200;
}

.footer-sep {
  opacity: 0.4;
}

.footer-page {
  margin-left: auto;
}
</style>

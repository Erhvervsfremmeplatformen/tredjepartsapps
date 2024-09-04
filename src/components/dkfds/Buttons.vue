<template>
  <div>
    <h4>Primærknap</h4>
    <div class="d-md-flex">
      <button class="button button-primary">knap</button>
      <button class="button button-primary disabled">knap</button>
    </div>
    <h4>Sekundærknapper</h4>
    <div class="d-md-flex">
      <button class="button button-secondary">knap</button>
      <button class="button button-secondary disabled">knap</button>
    </div>
    <h4>Tertiærknapper</h4>
    <div>Anvendes ikke</div>
    <h4>Tilbage-knap</h4>
    <div>
      <a href="" class="back-button">
        <div class="back-button-content"><VgIcon icon="arrowLeft" class="back-icon" />Tilbage</div>
      </a>
    </div>
    <h4>Knap med ikon</h4>
    <button class="button button-secondary">
      <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#home"></use></svg>
      knap
    </button>
  </div>
</template>
<script setup lang="ts">
import VgIcon from '../VgIcon.vue';
</script>

<style lang="scss" scoped></style>

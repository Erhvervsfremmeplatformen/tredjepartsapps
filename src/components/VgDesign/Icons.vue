<template>
  <div class="mt-8">
    <h3>Ikoner</h3>
    <p>
      Med komponentet VgIcon er det muligt at vise alle Virksomhedsguidens ikoner i SVG. <br />
      Såfremt at applikationen skal have sine egne ikoner, skal disse provides i Applikation.vue.
    </p>
    <div v-for="(icon, index) in icons" :key="index">
      <VgIcon :icon="icon" class="mr-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VgIcon } from '@erst-vg/vg-design-wrapper';
import { computed } from 'vue';

// TODO: Skal kunne vise ikoner fra VG, og ikke kun lokalt provided ikoner
const icons = computed((): string[] => ['highlightArrow', 'anchorlink', 'arrowRight', 'xla-share']);
</script>

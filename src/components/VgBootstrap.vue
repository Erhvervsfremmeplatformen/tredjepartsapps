<template>
  <div class="applikation-container"><slot /></div>
</template>

<script setup lang="ts">
// Komponent som bootstrapper Virksomhedsguidens design. Hvis muligt bør den ligge i @erst-vg/dkfds NPM
import { onMounted } from 'vue';

const emit = defineEmits(['icon-list']);

onMounted(() => {
  // Hvilke ikoner den skal bruge fra Virksomhedsguiden. Overvej om applikation bare skal have den fulde liste fremfor der skal spørges efter.
  emit('icon-list', ['highlightArrow', 'accordionOpen', 'accordionClose']);
});
</script>

<style lang="scss">
// Bør indeholde alle variabler som bruger til VG styling af DKFDS komponenter
@import '@erst-vg/dkfds/src/styles/variable.scss';
.applikation-container {
  // Importer de forskellige komponenter, så leverandøren ikke selv skal gøre det.
  @import '@erst-vg/dkfds/src/styles/pagination/vg-pagination.scss';
  @import '@erst-vg/dkfds/src/styles/accordion/vg-accordion.scss';
  @import '@erst-vg/dkfds/src/styles/buttons/vg-buttons.scss';
}
</style>

<template>
  <div class="applikation-container"><slot /></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['icon-list']);

onMounted(() => {
  // TODO: AJP - er det dyrt at lave require for hvet eneste ikon eller kan det pakkes in
  emit('icon-list', ['highlightArrow', 'accordionOpen', 'accordionClose']);
});
</script>

<style lang="scss">
@import '@erst-vg/vg-dkfds/src/styles/variable.scss';
.applikation-container {
  @import '@erst-vg/vg-dkfds/src/styles/pagination/vg-pagination.scss';
  @import '@erst-vg/vg-dkfds/src/styles/accordion/vg-accordion.scss';
  @import '@erst-vg/vg-dkfds/src/styles/buttons/vg-buttons.scss';
}
</style>

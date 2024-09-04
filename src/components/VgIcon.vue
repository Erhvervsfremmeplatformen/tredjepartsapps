<template>
  <InlineSvg :src="getIcon" class="icon icon-svg" />
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import InlineSvg from 'vue-inline-svg';

// Ansvarlig for at hente ikon som enten er site specifikt eller fra @erst-vg/dkfds NPM biblioteket

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
});

const iconsMap = inject('iconsMap');
const getIcon = computed(() => (iconsMap as any)[props.icon] ?? require(`@erst-vg/dkfds/src/assets/icons/${props.icon}.svg`));
</script>

<style lang="scss" scoped>
.icon {
  fill: currentColor;
}
</style>

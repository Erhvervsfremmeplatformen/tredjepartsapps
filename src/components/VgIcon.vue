<template>
  <div>
    <InlineSvg :src="getIcon" class="icon" />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import InlineSvg from 'vue-inline-svg';

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
});

const iconMap = inject('iconMap');
const getIcon = computed(() => {
  console.log('## XXX ', iconMap);
  return (iconMap as any)[props.icon] ?? require(`@erst-vg/vg-dkfds/src/assets/icons/${props.icon}.svg`);
});
</script>

<style lang="scss" scoped></style>

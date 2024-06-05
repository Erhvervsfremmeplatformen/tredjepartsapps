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

const iconsMap = inject('iconsMap');
const getIcon = computed(() => (iconsMap as any)[props.icon] ?? require(`@erst-vg/dkfds/src/assets/icons/${props.icon}.svg`));
</script>

<style lang="scss" scoped></style>

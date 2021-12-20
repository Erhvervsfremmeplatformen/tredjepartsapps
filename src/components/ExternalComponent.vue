<!-- Example of a Vue component that is located in a separated file -->
<template>
  <div>
    <div class="external">{{ title }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ExternalApplikation',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../styles/components/_external.scss';
</style>

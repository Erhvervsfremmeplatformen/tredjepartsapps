<!-- Vuex underkomponent, som bruger den injected 'reactivyKey' til at vise reaktiv state fra Vuex store  -->
<template>
  <div>
    <div class="mt-5">
      <h2 class="h1">{{ counter }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: 'PiniaCounter',
  beforeCreate() {
    this.$pinia = this.pinia;
  },
  computed: {
    ...mapState(useCounterStore, ['counter'])
  },
  inject: ['pinia']
};
</script>

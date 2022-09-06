<!-- Vuex underkomponent, som bruger den injected 'reactivyKey' til at vise reaktiv state fra Vuex store  -->
<template>
  <div>
    <div class="mt-5">
      <h2 class="h1">{{ count }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { store } from '../store';

export default {
  name: 'Counter',
  computed: {
    count() {
      return this.$store.getters['count'];
    }
  },
  beforeCreate() {
    this.$store = store;
  }
};
</script>

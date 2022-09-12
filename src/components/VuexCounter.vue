<template>
  <div>
    <div class="mt-5">
      <h2 class="h1">{{ count }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { store } from '../store';

export default {
  name: 'Counter',
  computed: {
    ...mapGetters(['count'])
  },
  beforeCreate() {
    this.$store = store;
  }
};
</script>

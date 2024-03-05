<template>
  <div>
    <h3>Pinia</h3>
    <div class="mt-5">
      Se <strong>src/components/PiniaCounter.vue</strong> vedr. registrering og anvendelse. Forneden vises en simpel tæller, hvis værdi gemmes i en
      <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a> store, og kan opdateres ved at klikke på knappen.
    </div>
    <div class="mt-5">
      <h2 class="displayheading-1">{{ counter }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/counter';
import { createPinia, setActivePinia } from 'pinia';
import { computed } from 'vue';

const counterStore = useCounterStore();
setActivePinia(createPinia());
const counter = computed(() => counterStore.counter);
</script>

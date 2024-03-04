<template>
  <div>
    <h3>Pinia</h3>
    <div class="mt-5">
      Se <strong>{{ componentPath() }}</strong> vedr. registrering og anvendelse. Forneden vises en simpel tæller, hvis værdi gemmes i en
      <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a> store, og kan opdateres ved klik på knappen.
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

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PiniaCounter',
  methods: {
    componentPath() {
      /* eslint no-underscore-dangle: ["error", { "allow": ["__file"] }]*/
      return this.$options.__file;
    }
  }
});
</script>

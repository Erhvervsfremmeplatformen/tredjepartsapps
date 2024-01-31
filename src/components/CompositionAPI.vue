<script setup lang="ts">
import { ref } from 'vue';

const msg = ref(0);

function onClick() {
  msg.value++;
}
</script>

<template>
  <div>
    <h3>Composition API</h3>
    <p>Eksempel på simpel tæller som opdateres via Composition API script setup</p>
    <div class="mt-5 displayheading-1">{{ msg }}</div>
    <button class="button button-primary mt-5" @click="onClick">Opdater tæller</button>
  </div>
</template>

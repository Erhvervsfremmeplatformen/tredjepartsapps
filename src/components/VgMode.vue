<template>
  <div>
    <h2 class="mt-5">Mode:</h2>
    <p>
      Entry point komponent <strong>src/components/Applikation.vue</strong> modtager en prop <em>is-virksomhedsguiden</em> som kan bruges til at finde
      ud af om applikationen kører selvstændig (false) eller om den er indlejret i Virksomhedsguiden (true)
    </p>
    <div class="alert alert-info">
      <div class="alert-body">
        <p class="alert-heading">Mode</p>
        <div class="alert-text">
          <p v-if="isVirksomhedsguiden">Applikationen kører inden i Virksomhedsguiden</p>
          <p v-else>Applikationen kører udenfor Virksomhedsguiden</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  isVirksomhedsguiden: {
    type: Boolean,
    required: true
  }
});
</script>

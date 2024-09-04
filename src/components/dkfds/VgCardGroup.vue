<template>
  <div class="udvidet-cardgruppe">
    <h2 class="udvidet-cardgruppe__titel mt-0 mb-6">{{ titel }}</h2>
    <div class="row cardrow">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  titel: {
    type: String,
    required: false,
    default: undefined
  }
});
</script>

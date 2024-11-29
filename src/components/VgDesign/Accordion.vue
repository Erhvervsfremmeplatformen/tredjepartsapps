<template>
  <VgAccordion id="vg-accordion" :accordions="elementer" :bulk="true" />
</template>

<script setup lang="ts">
import { VgAccordion } from '@erst-vg/vg-design-wrapper';
import { computed } from 'vue';
import { Accordion } from '../../models/accordion.model';

const elementer = computed((): Accordion[] => [
  {
    titel: 'Accordion #1',
    indhold: 'Indholdet af en accordion'
  },
  {
    titel: 'Accordion #2',
    indhold: 'Indholdet af en accordion'
  }
]);
</script>

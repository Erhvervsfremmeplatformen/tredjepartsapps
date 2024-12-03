<template>
  <div class="mt-8">
    <h3>Accordion</h3>
    <p>
      Komponentet VgAccordion er baseret på <a href="https://designsystem.dk/komponenter/accordions/" target="_blank">Designsystemets accordion</a>,
      men vist i Virksomhedsguidens design. <br />
      Der er mulighed for at bruge prop'en bulk (Åben/luk alle), samt hvilken heading overskriften i accordion header skal vises som. Se eksempel
      nedenfor.
    </p>
    <VgAccordion id="vg-accordion" :accordions="elementer" :bulk="true" />
  </div>
</template>

<script setup lang="ts">
import { VgAccordion } from '@erst-vg/vg-design-wrapper';
import { computed } from 'vue';
import { AccordionElementModel } from '../../models/accordion.model';

const elementer = computed((): AccordionElementModel[] => [
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

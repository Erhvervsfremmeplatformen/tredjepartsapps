<template>
  <div>
    <h3>Liste</h3>
    <VgListe :antal="10" :data-slice="cards" :use-spinner="true" @load-slice="onLoadSlice">
      <div v-for="(card, index) in cards" :key="index" class="col-12">
        <VgListeCard label="Artikel" :titel="card.titel" @click="onListeCard(index)">Manchettekst for cardet</VgListeCard>
      </div>
    </VgListe>
  </div>
</template>

<script setup lang="ts">
import { VgListe, VgListeCard } from '@erst-vg/vg-design-wrapper';
import { ref } from 'vue';

const cards = ref(
  [...Array(5).keys()].map(index => ({
    titel: `card #${index}`
  }))
);

const onListeCard = (index: number): void => {
  // eslint-disable-next-line no-console
  console.log(`Liste card klik for position ${index}`);
};

const onLoadSlice = (): void => {
  const offset = cards.value.length;
  // Simulér async operation som tager tid
  setTimeout(() => {
    cards.value = cards.value.concat(
      [...Array(5).keys()].map(index => ({
        titel: `card #${index + offset}`
      }))
    );
  }, 500);
};
</script>

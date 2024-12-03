<template>
  <div class="mt-8">
    <h3>Cards</h3>
    <VgCardGroup>
      <div v-for="(card, index) in elementer" :key="index" class="mb-4 mb-sm-6 col-md-4 col-6">
        <VgCard
          :titel="card.titel"
          :header="card.header"
          :billede="card.billede"
          :label="card.label"
          :link-text="card.linkText"
          :external="card.external"
          @click="onCardClick(index)"
        >
          <template #text>Manchettekst for cardet</template>
        </VgCard>
      </div>
    </VgCardGroup>
  </div>
</template>

<script setup lang="ts">
import { VgCard, VgCardGroup } from '@erst-vg/vg-design-wrapper';
import { computed } from 'vue';
import { CardElementModel } from '../../models/card.model';

const elementer = computed((): CardElementModel[] => [
  {
    titel: 'Card #1',
    header: 'Test: Fra idé til succesfuld virksomhed',
    billede: {
      url: 'https://virksomhedsguiden.dk/api/media/userfiles/10150817/billeder/Diverse/NF.jpg',
      label: 'Billede som hører til card #1'
    },
    label: 'Card #1',
    linkText: 'Læse mere'
  },
  {
    titel: 'Card #2',
    header: 'Din forretningsidé',
    billede: {
      url: 'https://virksomhedsguiden.dk/api/media//userfiles/10150817/billeder/Alle fotos/_NJ07197.webp',
      label: 'Billede som hører til card #2'
    },
    label: 'Card #2',
    linkText: 'Læs mere på ekstern side',
    external: true
  },
  {
    titel: 'Card #3',
    header: 'Et card uden billede',
    billede: undefined,
    label: 'Card #3',
    linkText: 'Læse mere'
  }
]);

const onCardClick = (index: number): void => {
  // eslint-disable-next-line no-console
  console.log(`Card klik #${index}`);
};
</script>

<template>
  <div>
    <h2 class="mt-5">Det Fælles Designsystem (DKFDS)</h2>

    <h3>VG ikoner</h3>
    <div>
      <p>TODO - Forklar hvordan man bruger ikoner fra VG og forskellen på custom ikoner</p>
      <VgIcon icon="highlightArrow" />
    </div>

    <!-- <Accordions /> -->

    <h3>Accordions</h3>

    <VgAccordion :accordions="accordions" />

    <h4>Mere kontrol</h4>

    <VgAccordion id="accordion-123" :accordions="accordions" :bulk="true" @toggle="onToggle">
      <template #titel="{ data }">
        {{ data.titel }}
      </template>
      <template #indhold="{ data }">
        {{ data.indhold }}
      </template>
    </VgAccordion>

    <h3>Cards</h3>

    <VgCardGroup titel="Some cards">
      <div class="mb-4 mb-sm-6 col-6">
        <VgCard
          titel="Tre ukrainske iværksættere"
          billede-url="https://virksomhedsguiden.dk/api/media/userfiles/10150817/billeder/Diverse/NF.jpg"
          label="Artikel"
          header="Drømmen om at blive iværksætter udleves nu i Danmark"
          link-text="Læs mere her"
          @click="onClick"
        >
          <template #header> Header </template>
          <template #text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </template>
        </VgCard>
      </div>
      <div class="mb-4 mb-sm-6 col-6">
        <VgCard
          titel="Tre ukrainske iværksættere"
          header="Drømmen om at blive iværksætter udleves nu i Danmark"
          link-text="Læs mere her"
          :external="true"
          @click="onClick"
        >
          <template #header> Header </template>
          <template #text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </template>
        </VgCard>
      </div>
      <div class="mb-4 mb-sm-6 col-12 one-card">
        <VgCard
          titel="Tre ukrainske iværksættere"
          billede-url="https://virksomhedsguiden.dk/api/media/userfiles/10150817/billeder/Diverse/NF.jpg"
          label="Artikel"
          header="Drømmen om at blive iværksætter udleves nu i Danmark"
          @click="onClick"
        >
          <template #header> Header </template>
          <template #text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </template>
        </VgCard>
      </div>
    </VgCardGroup>

    <h3>Liste med cards</h3>
    <p>Denne er ikke en del af DKFDS, men ....</p>

    <VgListe :antal="10" :data-slice="cards" :use-spinner="true" @load-slice="onLoadSlice">
      <div v-for="card in cards" :key="card.titel">
        <VgListeCard label="Artikel!" titel="Vild titel!" class="col-12">
          Har du en momsregistreret virksomhed, skal du føre et regnskab over køb og salg af varer og ydelser. Ved udgangen af hver momsperiode skal
          du opgøre den moms, du skal indberette til Skattestyrelsen. Det er en fordel at bruge et regnskabsprogram, der også kan håndtere
          momsregnskabet. Få overblik over, hvordan du laver din virksomheds momsregnskab.
        </VgListeCard>
      </div>
    </VgListe>

    <h3>Knapper</h3>
    <Buttons />

    <h3>Paginering</h3>
    <VgPagination :current-page="1" :page-count="23" @to-page="onPage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VgIcon from './VgIcon.vue';
import Buttons from './dkfds/Buttons.vue';
import VgAccordion from './dkfds/VgAccordion.vue';
import VgCard from './dkfds/VgCard.vue';
import VgCardGroup from './dkfds/VgCardGroup.vue';
import VgListe from './dkfds/VgListe.vue';
import VgListeCard from './dkfds/VgListeCard.vue';
import VgPagination from './dkfds/VgPagination.vue';

// TODO: ERF-9652 - type
const accordions = ref([
  {
    titel: 'Foo',
    indhold: 'Lorem ipsum'
  },
  {
    titel: 'Bar',
    indhold: 'Ipsum lorem'
  }
]);

const cards = ref(
  [...Array(1).keys()].map(index => ({
    titel: `card #${index}`
  }))
);

const onToggle = (status: boolean, accordionId: string, index: number): void => {
  console.log('Eventx ', accordionId, ' at ', index, ' - status: ', status);
};

const onClick = (): void => {
  console.log('Card clicked');
};

const onPage = (page: number): void => {
  console.log('To page ', page);
};

const onLoadSlice = (): void => {
  const offset = cards.value.length;
  cards.value = cards.value.concat(
    [...Array(3).keys()].map(index => ({
      titel: `card #${index + offset}`
    }))
  );
  console.log('Loading slice ... ', cards.value.length);
};
</script>

<style lang="scss" scoped></style>

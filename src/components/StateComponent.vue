<!-- Eksempel på komponent som bruger Vuex -->
<template>
  <div>
    <h2 class="mt-5">Vuex:</h2>
    <div class="mt-5">
      Det er tilladt at bruge Vue plugin <strong><a href="https://vuex.vuejs.org/" target="_blank">Vuex</a></strong> til state management i
      leverandør-applikationen. Der er dog nogle begrænsninger når leverandør-applikationen afvikles i Virksomhedsguiden.
      <ul>
        <li class="ml-5">Der kan ikke anvendes <i>...mapGetters</i> helper, så anvend computed property som alternativ</li>
      </ul>
      Forneden ses en simpel tæller, hvis værdi gemmes i Vuex store, og opdateres ved klik på knappen. Se koden i
      <strong>src/components/Applikation.vue</strong>, <strong>/components/StateComponent.vue</strong> og
      <strong>src/components/Counter.vue</strong> for detaljer om håndtering af manglende support af mapGetters.
    </div>
    <VuexCounter />
    <div class="mt-5">
      <button class="button button-primary" @click="increment">Vuex test</button>
    </div>
    <PiniaCounter />
    <div class="mt-5">
      <button class="button button-primary" @click="incrementPinia">Pinia test</button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { mapMutations } from 'vuex';
import { store } from '../store';
import { useCounterStore } from '../stores/counter';
import PiniaCounter from './PiniaCounter.vue';
import VuexCounter from './VuexCounter.vue';

export default {
  components: { VuexCounter, PiniaCounter },
  name: 'StateComponent',
  created() {
    this.$pinia = this.pinia;
    this.$store = store;
  },
  methods: {
    ...mapActions(useCounterStore, ['incrementPinia']),
    ...mapMutations(['increment'])
  },
  inject: ['pinia']
};
</script>

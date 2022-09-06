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

    Pinia: {{ count }}

    <Counter />
    <div class="mt-5">
      <button class="button button-primary" @click="increment">Pinia test</button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { store } from '../store';
import { useCounterStore } from '../stores/counter';
import Counter from './Counter.vue';

export default {
  components: { Counter },
  name: 'StateComponent',
  beforeCreate() {
    /*
    const pinia = createPinia();
    this.$pinia = pinia;
    */
    this.$store = store;
    console.log('A ', this.$store);
    this.$store.commit('increment');
  },
  computed: {
    ...mapState(useCounterStore, ['count']),
    ...mapActions(useCounterStore, ['increment'])
  }
};
</script>

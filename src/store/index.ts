// Simpel Vuex store med en tæller som state
import { createStore } from 'vuex';

export const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    count: state => state.count
  }
});

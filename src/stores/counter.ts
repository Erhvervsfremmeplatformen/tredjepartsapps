import { createPinia, defineStore } from 'pinia';

export const useCounterStore = defineStore('piniaCounter', {
  state: () => ({ count: 10 }),
  getters: {
    counter: state => state.count
  },
  actions: {
    incrementPinia() {
      this.count++;
    }
  }
});

const store = createPinia();

export default store;

/*

måske kan den injectes således ...

export const install = (app: App) => {
  const pinia = createPinia();

  const persitedState = createPersistedStatePlugin({
    // persist all store by default (can be override in each store)
    persist: true,
  });

  pinia.use(persitedState);

  app.use(pinia);
};


*/

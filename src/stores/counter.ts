import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 10, name: 'Eduardo' }),
  getters: {
    doubleCount: state => state.count * 2,
    foo: state => 'bar'
  },
  actions: {
    increment() {
      console.log('#INCREASE');
      this.count++;
    }
  }
});

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

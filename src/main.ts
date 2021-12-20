import 'dkfds/dist/css/dkfds.min.css';
import Vue from 'vue';

const App = () => import(/* webpackPreload: true */ './App.vue');

Vue.config.productionTip = false;

const vue = new Vue({
  render: (h: any) => h(App)
});

vue.$mount('#app');

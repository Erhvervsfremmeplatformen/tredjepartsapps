import 'dkfds/dist/css/dkfds.min.css';
import Vue from 'vue';
import textmanagerPlugin from './plugins/textmanager-plugin';
// INFO: Bemærk ændringer til denne fil, vil ikke blive inkluderet i den endelige applikation
const App = () => import(/* webpackPreload: true */ './App.vue');

Vue.config.productionTip = false;
Vue.use(textmanagerPlugin);

const vue = new Vue({
  render: (h: any) => h(App)
});

vue.$mount('#app');

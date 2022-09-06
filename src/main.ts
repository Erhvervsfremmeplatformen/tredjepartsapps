import 'dkfds/dist/css/dkfds.min.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

// INFO: Bemærk ændringer til denne fil, vil ikke blive inkluderet i den endelige applikation
//const App = () => import(/* webpackPreload: true */ './App.vue');
import App from './App.vue';
const pinia = createPinia();

/*
Vue.config.productionTip = false;

const vue = new Vue({
  render: (h: any) => h(App)
});

vue.$mount('#app');
*/

const app = createApp(App);
//app.use(pinia);
//app.use(store);
app.mount('#app');

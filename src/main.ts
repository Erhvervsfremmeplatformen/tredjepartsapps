import 'dkfds/dist/css/dkfds.min.css';
import { createApp } from 'vue';
// INFO: Bemærk ændringer til denne fil, vil ikke blive inkluderet i den endelige applikation
//const App = () => import(/* webpackPreload: true */ './App.vue');
import App from './App.vue';
import { store } from './store';

/*
Vue.config.productionTip = false;

const vue = new Vue({
  render: (h: any) => h(App)
});

vue.$mount('#app');
*/

const app = createApp(App);
app.use(store);
app.mount('#app');

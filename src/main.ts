import 'dkfds/dist/css/dkfds.min.css';
import { createApp } from 'vue';

// INFO: Bemærk ændringer til denne fil, vil ikke blive inkluderet i den endelige applikation
//const App = () => import(/* webpackPreload: true */ './App.vue');
import App from './App.vue';
import { store } from './store';
const app = createApp(App);
app.use(store);
app.mount('#app');

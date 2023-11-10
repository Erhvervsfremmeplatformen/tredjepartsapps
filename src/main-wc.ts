import 'dkfds/dist/css/dkfds.min.css';

import { defineCustomElement } from 'vue';
import Applikation from './components/Applikation.vue';

// convert into custom element constructor
const ExampleElement = defineCustomElement(Applikation);

// register
customElements.define('xvg-example', ExampleElement);

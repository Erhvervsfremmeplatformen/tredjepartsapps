<!-- Indgangspunktet for leverandør-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div class="applikation-container">
    <SvgIcons />
    <h1>Demo leverandør-applikation</h1>
    <div class="my-5">
      Denne applikation kan bruges som skabelon til udvikling af leverandør-applikation, der kan integreres i
      <a href="https://www.virksomhedsguiden.dk" target="_blank">Virksomhedsguiden</a> som Vue 3 komponenter. Siden indeholder desuden teknisk
      information om forskellige aspekter af en leverandør-applikation. Se <strong>README.md</strong> for instruktioner. Der henvises desuden til den
      tekniske vejledning og design-vejledningen, som er blevet udleveret, for yderligere information.
    </div>
    <hr />
    <VgMode :is-virksomhedsguiden="isVirksomhedsguiden" />
    <hr />
    <LoginDemo :token="token" :bruger="bruger" :is-logged-in="isLoggedIn" @requestToken="$emit('requestToken')" />
    <hr />
    <Navigation :step="step" :max-step="maxStep" @decreaseStep="decreaseStep" @increaseStep="increaseStep" />
    <hr />
    <LoginComponent />
    <hr />
    <ExternalAPI />
    <hr />
    <ParameterVariant :variant="variant" />
    <hr />
    <Responsive />
    <hr />
    <Icons />
    <hr />
    <DKFDSComponent />
    <hr />
    <CustomMultiselect />
    <hr />
    <StateComponent />
    <hr />
    <DataCollector />
    <footer>
      <div class="footer">
        <div class="container">
          <ul class="align-text-left unstyled-list inline-list">
            <li class=""><strong class="weight-semibold">Erhvervsstyrelsen</strong></li>
            <li class="">
              <a href="mailto:support@myndighed.dk" class="function-link" title="Skriv til Erhvervsstyrelsen">support@erst.dk</a>
            </li>
            <li class=""><a href="tel:+4512345678" class="function-link" title="Ring til Digitaliseringsstyrelsen">(+45) 12 34 56 78</a></li>
            <li class="d-print-none">
              <a href="#" class="function-link icon-link"
                >Tilgængelighedserklæring<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg
              ></a>
            </li>
            <li class="d-print-none"><a href="#" class="function-link">Privatlivspolitik (cookies)</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { createPinia } from 'pinia';
import { ref, onUnmounted } from 'vue';
import { Bruger } from '../models/bruger.model';
import { Variant } from '../models/variant.model';
import CustomMultiselect from './CustomMultiselect.vue';
import DataCollector from './DataCollector.vue';
import DKFDSComponent from './DKFDSComponent.vue';
import ExternalAPI from './ExternalAPI.vue';
import Icons from './Icons.vue';
import LoginComponent from './LoginComponent.vue';
import LoginDemo from './LoginDemo.vue';
import Navigation from './Navigation.vue';
import VgMode from './VgMode.vue';
import ParameterVariant from './ParameterVariant.vue';
import Responsive from './Responsive.vue';
import StateComponent from './StateComponent.vue';
import SvgIcons from './SvgIcons.vue';
import * as slugUtil from '../utils/slug.util';
import { DataEvents, piwikService } from '@erst-vg/piwik-event-wrapper';

const props = defineProps({
  variant: {
    type: Object as () => Variant,
    default: null,
    required: false
  },
  token: {
    type: String,
    default: '',
    required: false
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
    required: false
  },
  bruger: {
    type: Object as () => Bruger,
    default: null,
    required: false
  },
  isVirksomhedsguiden: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits([
  DataEvents.PAGE_VIEW,
  DataEvents.DOWNLOAD_EVENT,
  DataEvents.CTA_CLICK_EVENT,
  DataEvents.START_EVENT,
  DataEvents.SLUT_EVENT
]);

const step = ref(1);
const maxStep = ref(3);
/**
 * Initialiserer Piwik service med entry-point komponentens emits, så der kan emittes ud af leverandør-applikationen
 * uanset fra hvilket komponent niveau Piwik service kaldes
 */
piwikService.init(emit);

onUnmounted(() => {
  window.removeEventListener('hashchange', updateStepFromHash);
});

const decreaseStep = () => {
  if (window.location.hash !== '#1') {
    const { hash } = window.location;
    const previousHash = String(parseInt(removeHash(hash), 10) - 1);
    window.location.hash = slugUtil.slugify(previousHash);
  }
};

const increaseStep = () => {
  if (window.location.hash !== '#' + maxStep.value) {
    const { hash } = window.location;
    const previousHash = String(parseInt(removeHash(hash), 10) + 1);
    window.location.hash = slugUtil.slugify(previousHash);
  }
};

const updateStepFromHash = () => {
  const { hash } = window.location;
  step.value = hash ? parseInt(removeHash(hash), 10) : 1;
  piwikService.emitPageViewEvent();
};

const removeHash = (hash: string) => hash.replaceAll('#', '');

const emitRequestToken = () => {
  emit('requestToken');
};

window.location.hash = '1';
window.addEventListener('hashchange', updateStepFromHash);
</script>

<style lang="scss" scoped>
@import '../styles/components/_applikation.scss';
</style>

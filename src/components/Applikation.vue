<!-- Indgangspunktet for leverandør-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <VgBootstrap @icon-list="emit('icon-list', $event)">
    <div class="row">
      <div class="col-12 col-md-10">
        <SvgIcons />
        <h1>Demo leverandør-applikation</h1>
        <DKFDSComponent />
      </div>
    </div>
  </VgBootstrap>
</template>

<script setup lang="ts">
import { DataEvents, piwikService } from '@erst-vg/piwik-event-wrapper';
import { DataEmits } from '@erst-vg/piwik-event-wrapper/lib/models/emits.model';
import { PropType, onMounted, onUnmounted, provide, ref } from 'vue';
import { Bruger } from '../models/bruger.model';
import { Variant } from '../models/variant.model';
import * as slugUtil from '../utils/slug.util';
import DKFDSComponent from './DKFDSComponent.vue';
import SvgIcons from './SvgIcons.vue';
import VgBootstrap from './VgBootstrap.vue';

const props = defineProps({
  variant: {
    type: Object as PropType<Variant>,
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
    type: Object as PropType<Bruger | null>,
    default: null,
    required: false
  },
  isVirksomhedsguiden: {
    type: Boolean,
    default: true
  },
  tekstnoegleBundtId: {
    type: String,
    default: ''
  },
  tekstnoegleCvrNummer: {
    type: String,
    default: ''
  }
});

provide('isVirksomhedsguiden', props.isVirksomhedsguiden);

const emit = defineEmits([
  DataEvents.PAGE_VIEW,
  DataEvents.DOWNLOAD_EVENT,
  DataEvents.CTA_CLICK_EVENT,
  DataEvents.START_EVENT,
  DataEvents.SLUT_EVENT,
  'requestToken',
  'icon-list'
]);

const step = ref(1);
const maxStep = ref(3);

/**
 * Initialiserer Piwik service med entry-point komponentens emits, så der kan emittes ud af leverandør-applikationen
 * uanset fra hvilket komponent niveau Piwik service kaldes
 */
piwikService.init(emit as DataEmits);

onUnmounted(() => {
  window.removeEventListener('hashchange', updateStepFromHash);
});

onMounted(() => {});

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

window.location.hash = '1';
window.addEventListener('hashchange', updateStepFromHash);
</script>

<style lang="scss" scoped>
@import '../styles/components/_applikation.scss';
</style>

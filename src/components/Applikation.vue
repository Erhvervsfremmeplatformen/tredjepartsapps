<!-- Indgangspunktet for sandkasse-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div class="applikation-container">
    <h1>Leverandør-applikation Sandkasse Miljø!!</h1>
    hej
  </div>
</template>

<script lang="ts">
import SvgIcons from './SvgIcons.vue';
import CustomMultiselect from './CustomMultiselect.vue';
import StateComponent from './StateComponent.vue';
import LoginComponent from './LoginComponent.vue';
import LoginDemo from './LoginDemo.vue';
import Navigation from './Navigation.vue';
import ParameterVariant from './ParameterVariant.vue';
import Responsive from './Responsive.vue';
import Icons from './Icons.vue';
import API from './API.vue';
import { Bruger } from '../models/bruger.model';
import { Variant } from '../models/variant.model';
import * as DKFDS from 'dkfds';
import DKFDSComponent from './DKFDSComponent.vue';
import DataCollector from './DataCollector.vue';
import * as DataEvent from '@erst-vg/piwik-event-wrapper';
import { store } from '../store/';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Applikation'
});
</script>
<style lang="scss" scoped>
@import '../styles/components/_applikation.scss';
</style>

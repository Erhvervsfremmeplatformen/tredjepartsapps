<!-- Indgangspunktet for sandkasse-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div class="applikation-container">
    <div v-if="!loaded" class="spinner" />
    <!-- GUIDEMOTOR INDHOLD-->
    <div id="gm-afvikler" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { opretAfvikler } from '../../public/script/1.3.87/afvikler.js';
import { Variant } from '../models/variant.model.js';
import { designService } from '../services/design.service';

/**
 * Denne applikation kan bruges til at vise "rejser" fra Virks Guidemotor. Design justeres efterfølgende, så det matcher Virksomhedsguidens design.
 * https://jira.erst.dk/browse/ERF-9555
 */

const APP_CONTAINER_CLASS = '.applikation-container';
const props = defineProps({
  variant: {
    type: Object as () => Variant,
    default: null,
    required: false
  },
  embedded: {
    type: Boolean,
    default: false
  }
});

const loaded = ref(false);

const changeDesign = () => {
  setInterval(() => {
    designService.applyDesign(props.embedded);
  }, 1);
};

const loadGuidemotorRejse = async () => {
  const rejseSlug = props.variant?.parametre[0].parametervaerdi;
  if (!rejseSlug) {
    // eslint-disable-next-line no-console
    console.error('Missing variant "rejse" with slug');
  } else {
    loaded.value = false;
    const afvikler = await opretAfvikler({
      rejse: rejseSlug,
      authCallback() {
        return null;
      }
    });
    afvikler.mount('#gm-afvikler');
    changeDesign();
  }
  loaded.value = true;
};

watch(
  () => props.variant,
  async () => {
    loadGuidemotorRejse();
  },
  {
    immediate: true
  }
);
</script>

<style lang="scss">
// Ikke muligt at bruge deep selector til angivelse af CSS root variabler
@import '../styles/components/_virk_variables.scss';
</style>

<style lang="scss" scoped>
.applikation-container {
  :deep() {
    @import '../styles/components/_virk.scss';
  }
}
@import '../styles/components/_applikation.scss';
</style>

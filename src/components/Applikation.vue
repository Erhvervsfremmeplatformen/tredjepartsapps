<!-- Indgangspunktet for sandkasse-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div id="app-root">
    <div id="hr-on"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Variant } from '../models/variant.model.js';

/**
 * TODO: AJP - forklar
 */

const APP_CONTAINER_CLASS = '.applikation-container';
const props = defineProps({
  variant: {
    type: Object as () => Variant,
    default: null,
    required: false
  },
  isIndholdselement: {
    type: Boolean,
    default: false
  }
});

onMounted(() => {
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src', 'https://recruit.hr-on.com/frame-api/hr.js');
  //scriptTag.setAttribute('integrity', 'sha384-lIdgifsjgNS+G9ZtJ9zQjrBXYKIuMJqkx2DDrBGGjaitNFa/ctBkIgq2XO7JKF3d');
  scriptTag.setAttribute('crossorigin', 'anonymous');
  scriptTag.addEventListener('error', () => {
    console.log('# Error');
  });
  scriptTag.addEventListener('load', () => {
    console.log('# Loaded');

    var scriptTag2 = document.createElement('script');
    scriptTag2.setAttribute('src', 'https://recruit.hr-on.com/frame-api/customers/erhvervshusmidtjyllandsi.js');
    //scriptTag2.setAttribute('integrity', 'sha384-lIdgifsjgNS+G9ZtJ9zQjrBXYKIuMJqkx2DDrBGGjaitNFa/ctBkIgq2XO7JKF3d');
    scriptTag2.setAttribute('crossorigin', 'anonymous');
    scriptTag2.addEventListener('error', () => {
      console.log('# Error');
    });
    scriptTag2.addEventListener('load', () => {
      console.log('# Loaded 2');

      /*
      var iframe = document.getElementById('the-iframe');
      var style = document.createElement('style');
      style.textContent = '.some-class-name {' + '  some-style-name: some-value;' + '}';
      iframe.contentDocument.head.appendChild(style);
      */
    });
    document.querySelector('#app-root')!.appendChild(scriptTag2);
  });
  document.querySelector('#app-root')!.appendChild(scriptTag);
});
</script>

<style lang="scss" scoped>
@import '../styles/components/_applikation.scss';
</style>

<style lang="scss" scoped>
#app-root {
  :deep() {
    h1 {
      color: red !important;
    }
  }
}
</style>

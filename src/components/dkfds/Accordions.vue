<template>
  <div>
    <h3>Accordion</h3>
    <div>
      <button class="accordion-bulk-button" data-accordion-bulk-expand="true">Åbn alle</button>
      <ul class="accordion vg-accordion">
        <li>
          <h2>
            <button class="accordion-button" :aria-expanded="false" aria-controls="a1">
              <span class="accordion-title h4">Lorem ipsum dolor sit amet</span>
              <VgIcon class="open" icon="accordionOpen" />
              <VgIcon class="close" icon="accordionClose" />
            </button>
          </h2>
          <div id="a1" :aria-hidden="true" class="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </li>
        <li>
          <h2>
            <button class="accordion-button" :aria-expanded="false" aria-controls="a2">
              <span class="accordion-title h4">Lorem ipsum dolor sit amet</span>
              <VgIcon class="open" icon="accordionOpen" />
              <VgIcon class="close" icon="accordionClose" />
            </button>
          </h2>
          <div id="a2" :aria-hidden="true" class="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as DKFDS from 'dkfds';
import { onMounted } from 'vue';
import VgIcon from '../VgIcon.vue';

onMounted(() => {
  new DKFDS.Accordion(document.querySelector('.applikation-container .accordion')).init();
});
</script>

<template>
  <div id="vgdesign">
    <h2>VG design</h2>
    <h3>Design wrapper</h3>
    <p>For at bruge VG design, skal applikationens indhold wrappes i VgDesignWrapper. Se hvordan det er gjort i Applikation.vue.</p>
    <Accordion />
    <Icons />
    <div class="mt-8">
      <h3>Knapper</h3>
      <p>
        I VgButtons vises styling for de forskellige eksempler på styling af kanpper og link. For at vise et enkelt ikon, bruges komponenetet
        VgButton.
      </p>
      <VgButtons />
    </div>
    <Cards />
    <Liste />
  </div>
</template>

<script setup lang="ts">
import { VgButtons } from '@erst-vg/vg-design-wrapper';
import Accordion from './VgDesign/Accordion.vue';
import Icons from './VgDesign/Icons.vue';
import Cards from './VgDesign/Cards.vue';
import Liste from './VgDesign/Liste.vue';
</script>

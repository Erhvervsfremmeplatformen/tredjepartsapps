<template>
  <div class="forside col-lg-7">
    <h2 id="title" class="h1">{{ $t(title) }}</h2>
    <div class="mt-8" v-html="$t('vaelg-virksomhedsform.forside.manchet')" />
    <div class="mt-4">
      <button class="button button-primary" data-testid="start-button" @click="$emit('start')">
        {{ $t('vaelg-virksomhedsform.forside.button') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { GuideStep } from '../../enums/guideStep.enum';
import { titles } from '../../utils/title.util';

export default {
  name: 'Forside',

  data() {
    return {
      title: titles[GuideStep.FORSIDE]
    };
  },

  mounted(): void {
    document.getElementById('title')?.scrollIntoView();
  }
};
</script>

<template>
  <div class="reultat col-lg-7">
    <a href="javascript:;" @click="$emit('reset')">
      <svg class="icon-svg">
        <use xlink:href="#arrow-left" /></svg
      >{{ $t('vaelg-virksomhedsform.sporgsmaal.resultat.forfra') }}</a
    >
    <div>
      <h2 class="h1 my-8" data-testid="title">{{ $t(content.title) }}</h2>
      <div data-testid="text" v-html="$t(content.text)" />
    </div>
    <button class="mt-8 button button-tertiary" data-testid="reset-button" @click="$emit('reset')">
      {{ $t('vaelg-virksomhedsform.sporgsmaal.resultat.forfra') }}
    </button>
  </div>
</template>

<script lang="ts">
import { GuideAnswer } from '../../enums/guideAnswer.enum';
import { PropType } from 'vue';

export default {
  name: 'Resultat',

  props: {
    answers: {
      type: Object as PropType<GuideAnswer[]>,
      required: true
    }
  },

  computed: {
    content(): { title: string; text: string } {
      switch (JSON.stringify(this.answers)) {
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.FIRST, GuideAnswer.FIRST]):
          return this.getTextKeys('enkeltmand');
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.FIRST, GuideAnswer.SECOND]):
          return this.getTextKeys('pmv');
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.SECOND, GuideAnswer.FIRST]):
          return this.getTextKeys('aps');
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.SECOND, GuideAnswer.SECOND]):
          return this.getTextKeys('as');
        case JSON.stringify([GuideAnswer.SECOND, GuideAnswer.FIRST]):
          return this.getTextKeys('is');
        case JSON.stringify([GuideAnswer.SECOND, GuideAnswer.SECOND, GuideAnswer.FIRST]):
          return this.getTextKeys('aps');
        case JSON.stringify([GuideAnswer.SECOND, GuideAnswer.SECOND, GuideAnswer.SECOND]):
          return this.getTextKeys('as');
        default:
          return this.getTextKeys('enkeltmand');
      }
    }
  },

  created(): void {
    this.$emit('emitPiwikEvent', this.$t(this.content.title));
  },

  methods: {
    getTextKeys(resultType: string): { title: string; text: string } {
      return {
        title: `vaelg-virksomhedsform.sporgsmaal.resultat.${resultType}.title`,
        text: `vaelg-virksomhedsform.sporgsmaal.resultat.${resultType}.text`
      };
    }
  }
};
</script>

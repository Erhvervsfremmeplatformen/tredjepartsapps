<template>
  <div class="reultat col-lg-7">
    <a href="" @click="$emit('reset')">
      <svg class="icon-svg">
        <use xlink:href="#arrow-left" /></svg
      >{{ $t('vaelg-virksomhedsform.sporgsmaal.resultat.forfra') }}</a
    >
    <div>
      <h2 class="h1 mb-8">{{ $t(content.title) }}</h2>
      <div v-html="$t(content.text)" />
    </div>
    <button class="mt-8 button button-tertiary" @click="$emit('reset')">{{ $t('vaelg-virksomhedsform.sporgsmaal.resultat.forfra') }}</button>
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
    content() {
      switch (JSON.stringify(this.answers)) {
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.FIRST, GuideAnswer.FIRST]):
          return {
            title: 'vaelg-virksomhedsform.sporgsmaal.resultat.emkeltmand.title',
            text: 'vaelg-virksomhedsform.sporgsmaal.resultat.emkeltmand.text'
          };
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.FIRST, GuideAnswer.SECOND]):
          return { title: 'vaelg-virksomhedsform.sporgsmaal.resultat.pmv.title', text: 'vaelg-virksomhedsform.sporgsmaal.resultat.pmv.text' };
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.SECOND, GuideAnswer.FIRST]):
          return { title: 'vaelg-virksomhedsform.sporgsmaal.resultat.aps.title', text: 'vaelg-virksomhedsform.sporgsmaal.resultat.aps.text' };
        case JSON.stringify([GuideAnswer.FIRST, GuideAnswer.SECOND, GuideAnswer.SECOND]):
          return { title: 'vaelg-virksomhedsform.sporgsmaal.resultat.as.title', text: 'vaelg-virksomhedsform.sporgsmaal.resultat.as.text' };
        case JSON.stringify([GuideAnswer.SECOND, GuideAnswer.FIRST]):
          return { title: 'vaelg-virksomhedsform.sporgsmaal.resultat.is.title', text: 'vaelg-virksomhedsform.sporgsmaal.resultat.is.text' };
        case JSON.stringify([GuideAnswer.SECOND, GuideAnswer.SECOND, GuideAnswer.FIRST]):
          return { title: 'vaelg-virksomhedsform.sporgsmaal.resultat.aps.title', text: 'vaelg-virksomhedsform.sporgsmaal.resultat.aps.text' };
        case JSON.stringify([GuideAnswer.SECOND, GuideAnswer.SECOND, GuideAnswer.SECOND]):
          return { title: 'vaelg-virksomhedsform.sporgsmaal.resultat.as.title', text: 'vaelg-virksomhedsform.sporgsmaal.resultat.as.text' };
        default:
          return {
            title: 'vaelg-virksomhedsform.sporgsmaal.resultat.emkeltmand.title',
            text: 'vaelg-virksomhedsform.sporgsmaal.resultat.emkeltmand.text'
          };
      }
    }
  },

  created() {
    this.$emit('emitPiwikEvent', this.$t(this.content.title));
  }
};
</script>

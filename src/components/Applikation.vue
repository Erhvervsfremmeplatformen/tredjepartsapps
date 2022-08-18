<template>
  <div id="scroll-anker" class="row">
    <Forside v-if="currentStep === guideStep.FORSIDE" @start="start" />
    <Resultat v-else-if="currentStep === guideStep.RESULTAT" :answers="answers" @reset="reset" @emitPiwikEvent="emitPiwikEvent" />
    <Step v-else :key="currentStep" :step="currentStep" @back="stepBack" @forward="stepForward" />
    <input v-model="waitingTime" type="text" />
  </div>
</template>

<script lang="ts">
import { emitPageViewEvent } from '@erst-vg/piwik-event-wrapper';
import Forside from './content/Forside.vue';
import Resultat from './content/Resultat.vue';
import Step from './content/Step.vue';
import { GuideStep } from '../enums/guideStep.enum';
import { GuideAnswer } from '../enums/guideAnswer.enum';
import { titles } from '../utils/title.util';
import Vue from 'vue';

export default {
  name: 'Applikation',
  components: {
    Forside,
    Resultat,
    Step
  },

  data() {
    return {
      currentStep: GuideStep.FORSIDE,
      guideStep: GuideStep,
      steps: [],
      answers: [],
      stepGraph: {
        [GuideStep.STEP_1]: { [GuideAnswer.FIRST]: GuideStep.STEP_2_EN, [GuideAnswer.SECOND]: GuideStep.STEP_2_FLERE },
        [GuideStep.STEP_2_EN]: { [GuideAnswer.FIRST]: GuideStep.STEP_3_JA, [GuideAnswer.SECOND]: GuideStep.STEP_3_NEJ },
        [GuideStep.STEP_2_FLERE]: { [GuideAnswer.FIRST]: GuideStep.RESULTAT, [GuideAnswer.SECOND]: GuideStep.STEP_3_NEJ },
        [GuideStep.STEP_3_JA]: { [GuideAnswer.FIRST]: GuideStep.RESULTAT, [GuideAnswer.SECOND]: GuideStep.RESULTAT },
        [GuideStep.STEP_3_NEJ]: { [GuideAnswer.FIRST]: GuideStep.RESULTAT, [GuideAnswer.SECOND]: GuideStep.RESULTAT }
      },
      titles,
      waitingTime: '3000'
    };
  },

  created(): void {
    window.location.hash = this.$t(titles[GuideStep.FORSIDE]);
  },

  methods: {
    start(): void {
      this.steps.push(GuideStep.FORSIDE);
      this.currentStep = GuideStep.STEP_1;
      this.handlePiwikEvent();
    },
    stepBack(): void {
      this.currentStep = (this.steps as GuideStep[]).pop() ?? GuideStep.FORSIDE;
      (this.answers as GuideAnswer[]).pop();
      this.handlePiwikEvent();
    },
    stepForward(answer: GuideAnswer): void {
      (this.steps as GuideStep[]).push(this.currentStep);
      (this.answers as GuideAnswer[]).push(answer);
      this.currentStep = this.stepGraph[this.currentStep][answer];
      this.handlePiwikEvent();
    },
    reset(): void {
      this.currentStep = GuideStep.FORSIDE;
      this.steps = [];
      this.answers = [];
      this.handlePiwikEvent();
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, parseInt(this.waitingTime, 10));
    },
    handlePiwikEvent(): void {
      const title = this.$t(titles[this.currentStep as GuideStep]);
      if (title) {
        this.emitPiwikEvent(title);
      }
    },
    async emitPiwikEvent(title: string): Promise<void> {
      window.location.hash = title;
      await Vue.nextTick();
      emitPageViewEvent(this);
    }
  }
};
</script>

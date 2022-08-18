<template>
  <div class="step col-lg-7">
    <h2 class="h1">{{ $t(titles[step]) }}</h2>
    <div class="form-group mt-8">
      <fieldset>
        <ul class="nobullet-list">
          <li v-for="answer in guideAnswer" :id="`li-${answer}`" :key="answer" class="mt-3">
            <div class="form-group-radio" data-testid="form-group-radio">
              <input
                :id="`radio-${answer}`"
                type="radio"
                name="radio"
                :value="answer"
                class="form-radio radio-large"
                :data-testid="`radio-${answer}`"
                @click="chosen = answer"
              />
              <label :for="`radio-${answer}`">{{ $t(answers[step][answer]) }}</label>
              <div v-if="alerts[step][answer] && chosen === answer" role="alert" class="alert alert-info">
                <div class="alert-body" data-testid="alert-body">
                  <p class="alert-text">{{ $t(alerts[step][answer]) }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </fieldset>
    </div>
    <div class="mt-4">
      <button class="button button-tertiary" data-testid="back-button" @click="$emit('back')">
        {{ $t('vaelg-virksomhedsform.sporgsmaal.step.tilbage') }}
      </button>
      <button class="button button-primary" :disabled="!chosen" data-testid="forward-button" @click="$emit('forward', chosen)">
        {{ $t('vaelg-virksomhedsform.sporgsmaal.step.frem') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { GuideAnswer } from '../../enums/guideAnswer.enum';
import { GuideStep } from '../../enums/guideStep.enum';
import { titles } from '../../utils/title.util';

export default {
  name: 'Step',

  props: {
    step: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      chosen: null,
      guideAnswer: GuideAnswer,
      titles,
      answers: {
        [GuideStep.STEP_1]: {
          [GuideAnswer.FIRST]: 'vaelg-virksomhedsform.sporgsmaal.step-1.svar-a',
          [GuideAnswer.SECOND]: 'vaelg-virksomhedsform.sporgsmaal.step-1.svar-b'
        },
        [GuideStep.STEP_2_EN]: {
          [GuideAnswer.FIRST]: 'vaelg-virksomhedsform.sporgsmaal.step-2-en.svar-a',
          [GuideAnswer.SECOND]: 'vaelg-virksomhedsform.sporgsmaal.step-2-en.svar-b'
        },
        [GuideStep.STEP_2_FLERE]: {
          [GuideAnswer.FIRST]: 'vaelg-virksomhedsform.sporgsmaal.step-2-flere.svar-a',
          [GuideAnswer.SECOND]: 'vaelg-virksomhedsform.sporgsmaal.step-2-flere.svar-b'
        },
        [GuideStep.STEP_3_JA]: {
          [GuideAnswer.FIRST]: 'vaelg-virksomhedsform.sporgsmaal.step-3-en.svar-a',
          [GuideAnswer.SECOND]: 'vaelg-virksomhedsform.sporgsmaal.step-3-en.svar-b'
        },
        [GuideStep.STEP_3_NEJ]: {
          [GuideAnswer.FIRST]: 'vaelg-virksomhedsform.sporgsmaal.step-3-flere.svar-a',
          [GuideAnswer.SECOND]: 'vaelg-virksomhedsform.sporgsmaal.step-3-flere.svar-b'
        }
      },
      alerts: {
        [GuideStep.STEP_1]: {
          [GuideAnswer.FIRST]: '',
          [GuideAnswer.SECOND]: ''
        },
        [GuideStep.STEP_2_EN]: {
          [GuideAnswer.FIRST]: 'vaelg-virksomhedsform.sporgsmaal.step-2-en.alert-a',
          [GuideAnswer.SECOND]: 'vaelg-virksomhedsform.sporgsmaal.step-2-en.alert-b'
        },
        [GuideStep.STEP_2_FLERE]: {
          [GuideAnswer.FIRST]: 'vaelg-virksomhedsform.sporgsmaal.step-2-flere.alert-a',
          [GuideAnswer.SECOND]: 'vaelg-virksomhedsform.sporgsmaal.step-2-flere.alert-b'
        },
        [GuideStep.STEP_3_JA]: {
          [GuideAnswer.FIRST]: '',
          [GuideAnswer.SECOND]: ''
        },
        [GuideStep.STEP_3_NEJ]: {
          [GuideAnswer.FIRST]: '',
          [GuideAnswer.SECOND]: ''
        }
      }
    };
  }
};
</script>

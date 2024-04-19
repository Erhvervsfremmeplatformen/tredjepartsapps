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
  async variant => {
    loadGuidemotorRejse();
  },
  {
    immediate: true
  }
);

const querySelector = (selector: string): any => document.querySelector(`${APP_CONTAINER_CLASS} ${selector}`);
const querySelectorAll = (selector: string): NodeListOf<any> => document.querySelectorAll(`${APP_CONTAINER_CLASS} ${selector}`);

const designNavigationsButtons = () => {
  querySelectorAll('.gm-knap').forEach(buttonElm => {
    const { classList } = buttonElm;
    if (classList.contains('gm-back-button')) {
      // Tilbage knap
      classList.remove('gm-knap');
      classList.add('button');
      classList.add('button-secondary');
    } else if (classList.contains('gm-knap')) {
      // Andre knapper
      classList.add('button');
      classList.add('button-primary');
      classList.remove('gm-knap');
      classList.remove('gm-primary');
    }
  });
};

const designEksternLink = () => {
  querySelectorAll('.gm-resultattrin .gm-handlings-link').forEach(el => {
    el.classList.remove('button');
    el.classList.remove('button-primary');
  });
};

const designButtonState = () => {
  // Knappen er inaktiv indtil jeg har valgt en svarmulighed
  const allSvarInputs = querySelectorAll('.gm-svarmuligheder input');
  if (allSvarInputs.length) {
    const nextButton = querySelector('.gm-navigation .button-primary');
    if (nextButton) {
      if ([...allSvarInputs].some(n => (n as HTMLInputElement).checked)) {
        nextButton.removeAttribute('disabled');
      } else {
        nextButton.setAttribute('disabled', 'disabled');
      }
    }
  }
};

const designOverskrift = () => {
  const overskrift = querySelector('.gm-overskrift h3');
  if (overskrift) {
    const newHeader = props.embedded ? 'h2' : 'h1';
    const newOverskrift = document.createElement(newHeader);
    newOverskrift.textContent = overskrift.textContent;
    overskrift.replaceWith(newOverskrift);
  }
};

const designAccordion = () => {
  querySelectorAll('.gm-uddybende-vejledning .gm-tekst h4').forEach(e => {
    const newHeader = props.embedded ? 'h3' : 'h2';
    const newOverskrift = document.createElement(newHeader);
    newOverskrift.classList.add('h3');
    newOverskrift.textContent = e.textContent;
    e.replaceWith(newOverskrift);
  });
};

const skipOpsummeringsside = () => {
  const opsummering = querySelector('.gm-opsummeringsside');
  if (opsummering) {
    (querySelectorAll('.gm-navigation .button-primary')[0]! as HTMLButtonElement).click();
  }
};
</script>

<style lang="scss">
@import '../styles/components/_virk.scss';
</style>
<style lang="scss" scoped>
@import '../styles/components/_applikation.scss';
:deep() {
  .gm-navigation {
    flex-direction: row-reverse;
    justify-content: flex-end;

    .button-secondary {
      margin-left: 0;
    }
  }
  .gm-afvikler {
    font-size: 14px;
  }
  .gm-handlings-link {
    display: flex;
    max-width: fit-content;

    flex-direction: row-reverse;
    align-items: center;
  }

  .gm-svarmuligheder label .gm-tekst {
    font-size: 16px;
  }

  .gm-uddybende-vejledning-container summary {
    font-size: 20px;
  }
}
</style>

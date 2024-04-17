<!-- Indgangspunktet for sandkasse-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div class="applikation-container">
    <div id="gm-afvikler" />
  </div>
</template>

<script setup lang="ts">
import { Variant } from 'src/models/variant.model.js';
import { onMounted } from 'vue';
import { opretAfvikler } from '../../public/script/afvikler.js';

const APP_CONTAINER_CLASS = '.applikation-container';

/**
 * https://jira.erst.dk/browse/ERF-9555
 */
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

const changeDesign = () => {
  setInterval(() => {
    designNavigationsButtons();
    designEksternLink();
    designButtonState();
    designOverskrift();
    designAccordion();
    skipOpsummeringsside();
  }, 1);
};

onMounted(async () => {
  const rejseSlug = props.variant?.parametre[0].parametervaerdi;
  if (!rejseSlug) {
    // eslint-disable-next-line no-console
    console.error('Missing variant "rejse" with slug');
  } else {
    const afvikler = await opretAfvikler({
      rejse: rejseSlug,
      authCallback(requestLogin = false) {
        return null;
      }
    });
    afvikler.mount('#gm-afvikler');
    changeDesign();
  }
});

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

      if (buttonElm) {
        // Bytter om på "Forrige" og "Fortsæt" knapper
        buttonElm.parentNode!.insertBefore(buttonElm, buttonElm.previousElementSibling);
      }
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
    flex-direction: row;
  }
  .gm-afvikler {
    font-size: 14px;
  }
  .gm-handlings-link {
    display: flex;
    max-width: fit-content;
  }

  .gm-svarmuligheder label .gm-tekst {
    font-size: 16px;
  }

  .gm-uddybende-vejledning-container summary {
    font-size: 20px;
  }
}
</style>

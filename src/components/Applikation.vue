<!-- Indgangspunktet for sandkasse-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div class="applikation-container">
    <div id="gm-afvikler" />
  </div>
</template>

<script setup lang="ts">
import { Variant } from 'src/models/variant.model.js';
import { onMounted, ref } from 'vue';
import { opretAfvikler } from '../../public/script/afvikler.js';

/**
 * https://jira.erst.dk/browse/ERF-9555
 */
const props = defineProps({
  variant: {
    type: Object as () => Variant,
    default: null,
    required: false
  }
});

const embedded = ref(false);

onMounted(async () => {
  const afvikler = await opretAfvikler({
    rejse: props.variant?.parametre[0].parametervaerdi ?? 'foobar',
    authCallback(requestLogin = false) {
      return null;
    }
  });
  afvikler.mount('#gm-afvikler');

  // XXX: AJP - quick and dirty håndtering af modificering af DOM - bør laves med MutationObserver eller lign. så man undgår setInterval. Alternativt skal den ikke lytte hele tiden (stop når den har lavet modifikationen)
  setInterval(() => {
    document.querySelectorAll('.applikation-container .gm-knap').forEach(b => {
      const classList = b.classList;
      if (classList.contains('gm-back-button')) {
        console.log('# Handle back-button');
        classList.remove('gm-knap');
        classList.add('button');
        classList.add('button-secondary');

        if (b) {
          // AK 3.1, 3.2: Byt om på "Forrige" og "Fortsæt"
          b.parentNode!.insertBefore(b, b.previousElementSibling);
        }
      } else if (classList.contains('gm-knap')) {
        console.log('# Handle gem-button');
        classList.add('button');
        classList.add('button-primary');
        classList.remove('gm-knap');
        classList.remove('gm-primary');
      }
    });

    document.querySelectorAll('.gm-resultattrin .gm-handlings-link').forEach(el => {
      el.classList.remove('button');
      el.classList.remove('button-primary');
    });

    // AK 3.2.1: Knappen er inaktiv indtil jeg har valgt en svarmulighed
    const allSvarInputs = document.querySelectorAll('.gm-svarmuligheder input');
    if (allSvarInputs.length) {
      const nextButton = document.querySelector('.gm-navigation .button-primary');
      if (nextButton) {
        if ([...allSvarInputs].some(n => (n as HTMLInputElement).checked)) {
          nextButton.removeAttribute('disabled');
        } else {
          nextButton.setAttribute('disabled', 'disabled');
        }
      }
    }

    /* TODO: AJP - er denne nødvendig ?
    document.querySelectorAll('.applikation-container a.gm-handlings-link').forEach(l => {
      const classList = l.classList;
      classList.add('button');
      classList.add('button-secondary');
      classList.remove('gm-knap');
      classList.remove('gm-primary');
    });
    */

    // TODO: AJP - brug en bestem klasse eller prop for at angive om den er standalone eller indlejret
    // TODO: AJP - refak

    if (embedded.value) {
      // AK 1.1 Udskift H3 med H1
      const overskrift = document.querySelector('.applikation-container .gm-overskrift h3');
      if (overskrift) {
        console.log('Erstat heading h3 -> h1');
        const newOverskrift = document.createElement('h1');
        newOverskrift.textContent = overskrift.textContent;
        overskrift.replaceWith(newOverskrift);
      }

      // AK 1.2 Udskift H4 med H3 i accordions
      document.querySelectorAll('.applikation-container .gm-uddybende-vejledning .gm-tekst h4').forEach(e => {
        const newOverskrift = document.createElement('h2');
        newOverskrift.textContent = e.textContent;
        e.replaceWith(newOverskrift);
      });
    } else {
      // AK 2.1 Udskift H3 med H2
      const overskrift = document.querySelector('.applikation-container .gm-overskrift h3');
      if (overskrift) {
        console.log('Erstat heading h3 -> h2');
        const newOverskrift = document.createElement('h2');
        newOverskrift.textContent = overskrift.textContent;
        overskrift.replaceWith(newOverskrift);
      }

      // AK 2.2 Udskift H4 med H3 i accordions
      document.querySelectorAll('.applikation-container .gm-uddybende-vejledning .gm-tekst h4').forEach(e => {
        const newOverskrift = document.createElement('h3');
        newOverskrift.textContent = e.textContent;
        e.replaceWith(newOverskrift);
      });
    }

    const opsummering = document.querySelector('.applikation-container .gm-opsummeringsside');
    if (opsummering) {
      console.log('Skip opsummering!');
      (document.querySelectorAll('.gm-navigation .button-primary')[0]! as HTMLButtonElement).click();
    }
  }, 1);
});
</script>

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
    // TODO: AJP - bør vi bruge 1em ?
    font-size: 16px;
  }

  .gm-uddybende-vejledning-container summary {
    font-size: 20px;
  }
}
</style>
<style lang="scss">
@import '../styles/components/virk.scss';
</style>

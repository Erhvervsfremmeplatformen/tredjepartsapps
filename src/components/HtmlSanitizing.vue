<!-- Eksempel på komponent, som viser HTML sikkert ved at rense den med v-sanitize-html -->
<template>
  <div>
    <h2 class="mt-5">HTML-sanitizing:</h2>
    <p>
      Vue escaper automatisk tekst, der vises med <strong>&#123;&#123; &#125;&#125;</strong>. Skal der vises HTML, fx tekster med formatering og
      links, skal directivet <strong>v-sanitize-html</strong> fra <strong>src/directives/sanitizeHtml.ts</strong> bruges i stedet for
      <strong>v-html</strong>. Directivet renser HTML'en for alt, der kan afvikle kode (script-tags, event handlers, javascript:-links m.m.), men
      bevarer formatering og links. Skal HTML bruges uden for en template, fx i tekst der sendes med i en mail, bruges funktionen
      <strong>sanitizeHtml</strong> fra <strong>src/utils/sanitize-util.ts</strong>.
    </p>

    <div class="alert alert-warning">
      <div class="alert-body">
        <p class="alert-text">
          <strong>v-html</strong> må ikke bruges i leverandør-applikationen og er forbudt via ESLint-reglen <strong>vue/no-v-html</strong>.
        </p>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label" for="html-input">HTML der skal vises</label>
      <textarea id="html-input" v-model="html" class="form-input input-width-xl" rows="4" name="html-input" />
    </div>

    <h4>Vist med v-sanitize-html</h4>
    <div v-sanitize-html="html" class="my-5" />

    <h4>Renset HTML</h4>
    <pre class="my-5">{{ renHtml }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { vSanitizeHtml } from '../directives/sanitizeHtml';
import { sanitizeHtml } from '../utils/sanitize-util';

// Indeholder både tilladt formatering og et billede med en onerror-handler, som bliver fjernet
const html = ref(
  '<p>Tekst med <strong>fed</strong> skrift og et <a href="https://www.virksomhedsguiden.dk" target="_blank">link</a>.</p><img src="x" onerror="alert(\'Denne kode bliver aldrig afviklet\')" />'
);

const renHtml = computed(() => sanitizeHtml(html.value));
</script>

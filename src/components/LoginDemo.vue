<template>
  <div>
    <h2 class="mt-5">Login Demo:</h2>
    <div class="my-5">
      <span><strong>Bruger:</strong></span>
      <span class="ml-2">
        <div v-if="bruger" class="mt-5">
          <pre>{{ bruger }}</pre>
        </div>
        <p v-else class="mt-5">Brugeren er ikke logget ind</p>
      </span>
    </div>
    <div class="my-5">
      <span><strong>isLoggedIn:</strong></span>
      <span class="ml-2">{{ isLoggedIn }}</span>
    </div>
    <div class="my-5">
      <span><strong>Hash før login:</strong></span>
      <span class="ml-2">{{ hashBeforeLogin }}</span>
    </div>
    <div class="my-5">
      <span><strong>token:</strong></span>
      <span v-if="token" class="ml-2 my-5">
        {{ token }}
      </span>
      <span v-else class="ml-2">Leverandør-applikationen har endnu ikke anmodet om token </span>
    </div>
    <div v-if="isTokenRequestCancelled" class="alert alert-warning">
      <div class="alert-body">
        <p class="alert-heading">Mangler accept</p>
        <p class="alert-text">
          Leverandør-applikation kan ikke starte fordi brugeren ikke har accepteret modal vedr. dataopsamling. Denne besked eller lignende reaktion
          implementeres selv af leverandør-applikationen
        </p>
      </div>
    </div>
    <div class="alert alert-info">
      <div class="alert-body">
        <p class="alert-heading">Bruger accept</p>
        <p class="alert-text">
          Hvis brugeren forsøger at starte leverandør-applikationen, men vælger ikke at acceptere opsamling af data om brugeren, så får token værdien:
          <i>cancelled</i>. Leverandør-applikationen kan reagerer på denne specielle værdi, og evt. visuelt vise brugeren hvorfor
          leverandør-applikationen ikke blev startet, eller starte et flow, der ikke kræver login.
        </p>
      </div>
    </div>

    <div v-if="!token || isTokenRequestCancelled" class="my-5">
      <p>
        Hvis brugeren ikke er logget ind i platformen, er det muligt at benytte <strong>VgLoginButton.vue</strong> som følger det officielle
        MitID-design. Vær dog opmærksom på, at det kun er tilladt at benytte denne komponent hvis <strong>isLoggedIn:</strong> er <i>false</i>. Hvis denne
        værdi er <i>true</i> er brugeren allerede logget ind i Virksomhedsguiden, og klik på knappen vil derved ikke føre dem til MitID godkendelse.
        Applikationen skal derfor vise sin egen knap, eksempelvis en almindelig primærknap, hvis man ønsker at anmode om en token.
      </p>
      <input v-model="mockedIsLoggedIn" id="mock-login-checkbox" type="checkbox" class="form-checkbox checkbox" />
      <label for="mock-login-checkbox" class="checkbox-label">Mock login i VG</label>
      <p><strong>mockedIsLoggedIn:</strong> {{ mockedIsLoggedIn }}</p>
      <p>NPM komponent: <strong>node_modules/@erst-vg/vg-design-wrapper/src/components/VgLoginButton.vue</strong></p>
      <button v-if="mockedIsLoggedIn" class="button button-primary" @click="$emit('requestToken')">Anmod om token</button>
      <VgLoginButton v-else @click="$emit('requestToken')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VgLoginButton } from '@erst-vg/vg-design-wrapper';
import { PropType, computed, ref } from 'vue';
import { TokenStatus } from '../enums/tokenStatus.enum';
import { Bruger } from '../models/bruger.model';

const emit = defineEmits(['requestToken']);

const props = defineProps({
  token: {
    type: String,
    default: ''
  },
  isLoggedIn: {
    type: Boolean,
    default: false
  },
  bruger: {
    type: Object as PropType<Bruger | null>,
    default: null
  },
  hashBeforeLogin: {
    type: String,
    default: ''
  }
});

const mockedIsLoggedIn = ref(false);

const isTokenRequestCancelled = computed(() => props.token === TokenStatus.CANCELLED);
</script>

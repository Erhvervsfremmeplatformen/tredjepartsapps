<template>
  <div>
    <h2>Storage API</h2>

    <p>
      Erhvervsfremmeplatformen udstiller et generisk JSON API, således at leverandør-applikationer ikke selv behøver at stille en storage-løsning til
      rådighed for at opbevare data i applikationen.
    </p>

    <p>
      For at bruge denne feature, så skal leverandør-applikationen først have specificeret et ID kaldet <em>tekstnoegleBundtId</em>. Dette ID
      refererer til et JSON felt i database, hvor i leverandør-applikationen selv kan gemme og hente data fra. Værdien af tekstnoegleBundtId
      konfigureres i adminstration af applikationer i Virksomhedsguiden, og gives som en prop <em>tekstnoegleBundtId</em> til
      leverandør-applikationen.
    </p>

    <p>
      Sålænge data kan serialiseres som JSON, er det op til leverandør-applikationen hvilke data der skal gemmes. I denne leverandør-applikation
      anvendes Storage API til opbevaring og redigering af tekstnøgler, så det ikke kræver en ny release hver gang tekster skal ændres.
    </p>

    <div v-if="!isVirksomhedsguiden" class="alert alert-info">
      <div class="alert-body">
        <div class="alert-text">
          Når denne leverandør-applikation afvikles selvstændigt udenfor Virksomhedsguiden, så er tekstnoegleBundtId angivet i
          <strong>src/main.ts</strong>
        </div>
      </div>
    </div>

    <h3>klient</h3>
    <p>
      Erhvervsfremmeplatformen udstiller en NPM <a href="https://www.npmjs.com/package/@erst-vg/piwik-event-wrapper" target="_blank">klient</a> til
      kommunikation med Storage API. Service <strong>bucketClientService</strong> fra <strong>@erst-vg/bucket-json-client</strong> bruges til at hente
      og gemme JSON Se <strong>src/components/StorageAPI.vue</strong> for hvordan servicen initialiseres og anvendes.
    </p>
    <p>Data fra Storage API må kun hentes én gang, og kan passende gøres når leverandør-applikationen starter op</p>

    <div class="alert alert-info">
      <div class="alert-body">
        <div class="alert-text">
          <div><strong>TekstnoegleBundtId: </strong>{{ tekstnoegleBundtId }}</div>
          <div>
            <strong>Token: </strong><span>{{ accessToken ? 'Har angivet token' : 'Mangler at anmode om token i "Login Demo" sektionen' }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isVirksomhedsguiden" class="alert alert-warning">
      <div class="alert-body">
        <p class="alert-heading">Mock server</p>
        <div class="alert-text">
          <p>
            Denne applikation har ikke adgang til Erhvervsstyrelsen Storage API når den afvikles selvstændigt udenfor Virksomhedsguiden. Der anvendes
            derfor en mock server
            <strong>src/server.js</strong> til at emulere Storage API, så man kan demonstrere brugen af <strong>bucketClientService</strong> uden
            fejl. Data gemmes naturligvis kun i memory når mock server anvendes.
          </p>
        </div>
      </div>
    </div>

    <h4>Eksempel</h4>
    <p>
      Sålænge data kan serialiseres som JSON, er det op til leverandør-applikationen hvilke data der skal gemmes. I denne leverandør-applikation
      anvendes Storage API til opbevaring og redigering af tekstnøgler, så det ikke kræver en ny release hver gang tekster skal ændres. Dette eksempel
      er kraftigt simplificeret, og i en realistisk version ville redigeringsknappen ofte være skjult bag et rolle tjek.
    </p>

    <div v-if="data" class="my-5 d-flex align-items-center">
      <span>
        <button type="button" class="button button-primary mr-3" @click="toggleRedigering">Toggle redigering</button>
      </span>
      <div v-if="!redigeringsmode">{{ tekstFromTekstnoegle }}</div>
      <input v-else type="input" class="input-width-xl" :value="tekstFromTekstnoegle" @change="opdaterTekstnoegle" />
    </div>
    <button type="button" class="button button-primary" @click="hentData">Hent data</button>
    <button type="button" class="button button-primary" :disabled="!accessToken" @click="gemData">Gem data</button>
    <div v-if="pending" class="spinner" aria-label="Henter indhold" />
    <template v-else>
      <div v-if="error" class="alert alert-error my-5" role="alert" aria-atomic="true">
        <div class="alert-body">
          <p class="alert-heading">Fejl</p>
          <p class="alert-text">API request failed</p>
        </div>
      </div>
      <pre v-else>{{ data }}</pre>
    </template>
  </div>
</template>

<script setup lang="ts">
import { bucketClientService } from '@erst-vg/bucket-json-client';
import { Ref, computed, inject, ref, watch } from 'vue';
import { TekstData, Tekster } from '../models/tekster.model';
import { DEMO_ACCESS_TOKEN } from '../utils/jwt-util';

const isVirksomhedsguiden = inject('isVirksomhedsguiden');
const props = defineProps({
  tekstnoegleBundtId: {
    type: String,
    default: ''
  },
  token: {
    type: String,
    default: ''
  }
});

const data: Ref<TekstData | null> = ref(null);
const pending = ref(false);
const error = ref(false);
const redigeringsmode = ref(false);

const accessToken = computed(() => (isVirksomhedsguiden ? props.token : DEMO_ACCESS_TOKEN));
const tekstFromTekstnoegle = computed(() => (data.value?.tekster?.faelles as Tekster)?.eksempel);

// Henter JSON data fra Storage API igennem bucketClientService
const hentData = async () => {
  pending.value = true;
  error.value = false;
  bucketClientService
    .hentData<TekstData>()
    .then(tekster => {
      data.value = tekster;
    })
    .catch(() => {
      error.value = true;
    })
    .finally(() => {
      pending.value = false;
    });
};

// Gemmer JSON data i Storage API igennem bucketClientService
const gemData = async () => {
  pending.value = true;
  error.value = false;
  bucketClientService
    .gemData<TekstData>(data.value!)
    .then(tekster => {
      data.value = tekster;
    })
    .catch(() => {
      error.value = true;
    })
    .finally(() => {
      pending.value = false;
    });
};

// Venter på der er en token som klienten kan initialiseres med
watch(
  () => accessToken.value,
  async token => {
    bucketClientService.init({
      tekstnoegleBundtId: props.tekstnoegleBundtId,
      token
    });
    await hentData();
  },
  {
    immediate: true
  }
);

// Funktioner til redigering af tekstnøgle
const toggleRedigering = () => {
  redigeringsmode.value = !redigeringsmode.value;
};

const opdaterTekstnoegle = (event: Event) => {
  (data.value!.tekster.faelles as Tekster).eksempel = (event.target as HTMLInputElement).value;
};
</script>
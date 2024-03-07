<template>
  <div>
    <h2>Storage API</h2>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
    id est laborum. TekstnoegleBundtId: <strong>{{ tekstnoegleBundtId }}</strong>

    isVirksomhedsguiden: {{ isVirksomhedsguiden }}

    <template v-if="initialized">
      <div v-if="pending" class="spinner" aria-label="Henter indhold" />
      <pre v-else>{{ data }}</pre>

      <button type="button" @click="hentData">Hent data</button>
      <button type="button" @click="saveData">Gem data</button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { bucketClientService } from '@erst-vg/bucket-json-client';
import { onMounted, ref, watch, inject } from 'vue';

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

const data = ref(null);
const pending = ref(false);
const initialized = ref(false);

watch(
  () => props.token,
  token => {
    console.log('Bucket client ready!');
    bucketClientService.init({
      tekstnoegleBundtId: props.tekstnoegleBundtId,
      token
    });
    initialized.value = true;
  },
  {
    immediate: true
  }
);

// TODO: AJP - generics

const hentData = async () => {
  pending.value = true;
  bucketClientService
    .hentData<any>()
    .then(d => {
      data.value = d;
    })
    .catch(e => {
      console.log('hentData: ', e);
    })
    .finally(() => {
      pending.value = false;
    });
};

const saveData = async () => {
  console.log('Saving data');
  bucketClientService
    .gemData({
      foo: 'bax'
    })
    .catch(e => {
      console.log('#Gem ', e);
    });
};
</script>

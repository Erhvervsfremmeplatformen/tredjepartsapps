<!-- Indgangspunktet for leverandør-applikationen. Direkte og indirekte importering af komponenter og stylesheets i denne klasse vil blive inkluderet i den endelig applikation. -->
<template>
  <div class="row" id="app-root">
    <div class="container">
      <div class="box">
        <h1>{{ message }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const onError = () => {
  message.value = 'Kan ikke hente script';
  var el = document.querySelector('.box');
  el.style.backgroundColor = 'red';
};

const onLoaded = () => {
  message.value = 'Script hentet';
  var el = document.querySelector('.box');
  el.style.backgroundColor = 'green';
};

const message = ref('');

onMounted(() => {
  message.value = '';
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src', 'https://s3.eu-central-1.amazonaws.com/erhvervsfremme-prod.virk.dk/scripts/sleeknote_ehnj.js');
  scriptTag.setAttribute('integrity', 'sha384-lIdgifsjgNS+G9ZtJ9zQjrBXYKIuMJqkx2DDrBGGjaitNFa/ctBkIgq2XO7JKF3d');
  scriptTag.setAttribute('crossorigin', 'anonymous');
  scriptTag.addEventListener('error', onError);
  scriptTag.addEventListener('load', onLoaded);
  document.querySelector('#app-root')!.appendChild(scriptTag);
});
</script>

<style lang="scss" scoped>
@import '../styles/components/_applikation.scss';

.container {
  width: 100%;
  margin: 0 auto;
}

.box {
  height: 200px;
  text-align: center;
}
</style>

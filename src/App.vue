<template>
  <div>
    <div id="app" class="app-body" tabindex="-1">
      <div class="flexgrow container pt-8 pb-8">
        <Applikation :variant="variant" :is-indholdselement="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// INFO: Bemærk ændringer til denne fil, vil ikke blive inkluderet i den endelige applikation
import Applikation from './components/Applikation.vue';

export default {
  name: 'App',
  components: {
    Applikation
  },
  data() {
    return {
      loaded: false,
      variant: {
        navn: 'script',
        aktiv: true,
        parametre: [
          {
            parameternavn: 'mount',
            parametervaerdi: '#on-hr'
          },
          {
            parameternavn: 'scripts',
            parametervaerdi: 'https://recruit.hr-on.com/frame-api/hr.js,https://recruit.hr-on.com/frame-api/customers/erhvervshusmidtjyllandsi.js'
          },
          {
            parameternavn: 'integrity',
            parametervaerdi: '["sha1","sha2"]["sha1","sha2"]'
          }
        ]
      }
    };
  }
};
</script>
<style scoped lang="scss">
@import 'styles/_app.scss';
</style>

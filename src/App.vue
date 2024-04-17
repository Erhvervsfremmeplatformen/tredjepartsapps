<template>
  <div>
    <div id="app" class="app-body" tabindex="-1">
      <div class="flexgrow container pt-8 pb-8">
        <Applikation :variant="variant" :embedded="false" />
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
        navn: 'rejse',
        aktiv: true,
        parametre: [
          {
            parameternavn: 'slug',
            parametervaerdi: '2dv6ajw3iav4'
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

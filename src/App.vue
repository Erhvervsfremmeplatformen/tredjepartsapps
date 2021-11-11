<template>
  <div>
    <div id="app" class="app-body app-flex" tabindex="-1">
      <GlobalSvgIcons></GlobalSvgIcons>
      <GlobalNav></GlobalNav>
      <div class="flexgrow container pt-8 pb-8">
        <Applikation></Applikation>
      </div>
      <GlobalFooter></GlobalFooter>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GlobalNav from '@/components/GlobalNav.vue';
import GlobalFooter from '@/components/GlobalFooter.vue';
import * as DKFDS from 'dkfds';
import Applikation from '@/components/Applikation.vue';
import GlobalSvgIcons from '@/components/GlobalSvgIcons.vue';

@Component({
  components: {
    GlobalSvgIcons,
    Applikation,
    GlobalNav,
    GlobalFooter
  }
})
export default class App extends Vue {
  mounted() {
    DKFDS.init();
  }
}
</script>
<style lang="scss">
@import 'styles/_app.scss';
</style>

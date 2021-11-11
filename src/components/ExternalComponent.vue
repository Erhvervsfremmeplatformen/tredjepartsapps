<template>
  <div class="external">EXTERN komponent {{ title }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ExternalComponent'
})
export default class ExternalComponent extends Vue {
  @Prop()
  title!: string;
}
</script>
<style lang="scss" scoped>
@import '@/styles/components/_external.scss';
</style>

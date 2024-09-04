<template>
  <div>
    <div class="udvidet-cardgruppe udvidet-cardgruppe-liste px-0">
      <p>{{ resultsText }}</p>
      <div class="row cardrow">
        <slot />
      </div>
    </div>
    <div v-if="antal > dataSlice.length" class="d-flex justify-content-center">
      <div v-if="useSpinner && pending">
        <slot name="spinner">
          <div class="spinner" />
        </slot>
      </div>
      <button v-else class="button centered-button button-secondary" type="button" @click="onClick">
        {{ $t('content.application.emnelandningside.button.visflere') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParamType } from 'src/utils/tekstnoegle-util';
import { computed, inject, PropType, ref, watch } from 'vue';
const emits = defineEmits(['load-slice']);
const props = defineProps({
  titel: {
    type: String,
    required: false,
    default: undefined
  },
  antal: {
    type: Number,
    required: true
  },
  useSpinner: {
    type: Boolean,
    default: true
  },
  dataSlice: {
    type: Array as PropType<any>,
    required: true
  }
});

const $t: (tekstnoegle: string, params?: ParamType) => string = inject('$t')!;

const pending = ref(false);

const resultsText = computed(() => $t('content.applikation.cardliste.results.text', [props.dataSlice.length, props.antal ?? 0]));

const onClick = () => {
  pending.value = true;
  emits('load-slice');
};

watch(
  () => props.dataSlice,
  (newDataSlice, oldDataSlice) => {
    if (newDataSlice > oldDataSlice) {
      setTimeout(() => {
        pending.value = false;
        const containerElement = document.querySelector('.applikation-container .udvidet-cardgruppe-liste');
        containerElement?.querySelectorAll<HTMLElement>('.udvidet-cardgruppe-card')[oldDataSlice.length].focus();
      }, 500);
    }
  }
);
</script>

<style lang="scss" scoped>
.centered-button {
  margin: 24px auto 0px !important;
}
</style>

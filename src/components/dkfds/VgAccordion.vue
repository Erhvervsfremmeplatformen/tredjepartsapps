<template>
  <div>
    <button v-if="bulk" class="accordion-bulk-button" data-accordion-bulk-expand="true" @click="$emit('bulk')">Åbn alle</button>
    <ul :id="`accordion-list-${accordionListId}`" class="accordion vg-accordion">
      <li v-for="(data, index) in accordions" :key="index">
        <h2>
          <button
            class="accordion-button"
            :aria-expanded="false"
            :aria-controls="`accordion-${accordionListId}-${index}`"
            @click="toggle($event, index)"
          >
            <span class="accordion-title h4">
              <template v-if="hasKey('titel', index)">{{ data.titel }}</template>
              <slot v-else name="titel" :data="data" />
            </span>
            <VgIcon class="open" icon="accordionOpen" />
            <VgIcon class="close" icon="accordionClose" />
          </button>
        </h2>
        <div :id="`accordion-${accordionListId}-${index}`" :aria-hidden="true" class="accordion-content">
          <p>
            <template v-if="hasKey('indhold', index)">{{ data.indhold }}</template>
            <slot v-else name="indhold" :data="data" />
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import * as DKFDS from 'dkfds';
import { computed, onMounted, PropType } from 'vue';
import VgIcon from '../VgIcon.vue';

const emits = defineEmits(['toggle', 'bulk']);

const props = defineProps({
  accordions: {
    type: Array as PropType<any>,
    default: null
  },
  id: {
    type: String,
    default: undefined,
    required: false
  },
  bulk: {
    type: Boolean,
    default: false
  }
});

const accordionListId = computed((): string => props.id ?? Math.random().toString().replace('.', ''));

onMounted(() => {
  new DKFDS.Accordion(document.querySelector(`.applikation-container #accordion-list-${accordionListId.value}`)).init();
});

const hasKey = (key: string, index: number): boolean => !!props.accordions[index]?.[key];

const toggle = (event: Event, index: number) => {
  const button = event.target as HTMLButtonElement;
  emits('toggle', button.ariaExpanded === 'false', accordionListId.value, index);
};
</script>

<style lang="scss" scoped>
// TODO: Externalize
.vg-accordion {
  .accordion-button {
    &[aria-expanded='true'] {
      .open {
        display: none;
      }
    }
    &[aria-expanded='false'] {
      .close {
        display: none;
      }
    }
  }
}
</style>

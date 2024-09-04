<template>
  <div class="udvidet-card-container">
    <a
      role="button"
      tabindex="0"
      class="udvidet-cardgruppe-card udvidet-card"
      :class="{ 'udvidet-card without-image': !billedeUrl }"
      :title="titel"
      :aria-label="titel"
    >
      <div class="picture-container">
        <div class="picture-wrapper">
          <div
            v-if="billedeUrl"
            role="img"
            :aria-label="billedeLabel"
            class="card-picture"
            :data-src="billedeUrl"
            lazy="loaded"
            :style="{ backgroundImage: `url('${billedeUrl}')` }"
          ></div>
          <div v-else class="picture-empty" />
        </div>
      </div>
      <div class="text-wrapper">
        <div>
          <div class="text">
            <div v-if="label" class="label-container">
              <p class="h6 m-0 show-spaces break-word">{{ label }}</p>
            </div>
            <div class="card-titel">
              <h3 class="h4 mt-0 mb-3 break-word">{{ header }}</h3>
            </div>
            <pre class="mt-0 mb-3 break-word">
              <slot name="text"/>
            </pre>
          </div>
        </div>
        <div v-if="linkText" class="bottom mt-3">
          <div class="fremhaevet-link" :class="{ 'line-limit': true }">
            <span class="mr-3">{{ linkText }}</span>
            <VgIcon
              :icon="external ? 'openInNew' : 'highlightArrow'"
              :class="{
                'external-link-icon': external,
                'link-icon': true
              }"
            />
          </div>
        </div></div
    ></a>
  </div>
</template>

<script setup lang="ts">
import VgIcon from '../VgIcon.vue';
defineProps({
  // TODO: AJP - group props ?
  billedeUrl: {
    type: String,
    required: false,
    default: undefined
  },
  billedeLabel: {
    type: String,
    required: false,
    default: ''
  },
  titel: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: false,
    default: undefined
  },
  header: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    default: undefined
  },
  external: {
    type: Boolean,
    defalut: false
  }
});
</script>

<style lang="scss" scoped>
.text {
  pre {
    // TODO: AJP - hvorfor er denne nødvendig ?
    white-space: pre-line;
  }
}

.udvidet-cardgruppe-card {
  &:hover {
    h3,
    .card-titel {
      text-decoration: underline;
      color: var(--link-color);
    }
  }
}
</style>

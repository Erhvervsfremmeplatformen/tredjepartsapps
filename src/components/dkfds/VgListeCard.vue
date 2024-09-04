<template>
  <div class="card-container">
    <div class="udvidet-card-container">
      <a role="button" tabindex="0" class="udvidet-cardgruppe-card liste-layout" :title="titel" :aria-label="titel">
        <div class="text-wrapper">
          <div>
            <div class="text">
              <div v-if="label" class="label-container">
                <p class="h6 m-0 show-spaces break-word">{{ label }}</p>
              </div>
              <div class="card-titel">
                <h3 class="h4 line-limit mt-0 mb-3 break-word">{{ titel }}</h3>
              </div>
              <pre class="mt-0 mb-3 break-word line-limit">
                <slot/>
              </pre>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  // TODO: AJP - group props ?
  label: {
    type: String,
    required: false,
    default: undefined
  },
  titel: {
    type: String,
    required: true
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

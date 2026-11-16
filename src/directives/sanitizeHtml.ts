import { ObjectDirective } from 'vue';
import { sanitizeHtml } from '../utils/sanitize-util';

/**
 * Erstatning for v-html, som renser HTML'en inden den indsættes i DOM'en.
 *
 * Brug: <span v-sanitize-html="$t('min.tekstnoegle')" />
 *
 * v-html må ikke bruges direkte (håndhæves af ESLint-reglen vue/no-v-html).
 */
export const vSanitizeHtml: ObjectDirective<HTMLElement, string | null | undefined> = {
  mounted: (element, { value }) => {
    element.innerHTML = sanitizeHtml(value);
  },
  updated: (element, { value, oldValue }) => {
    if (value !== oldValue) {
      element.innerHTML = sanitizeHtml(value);
    }
  }
};

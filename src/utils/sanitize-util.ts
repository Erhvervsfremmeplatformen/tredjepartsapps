import { Config, sanitize } from 'isomorphic-dompurify';

/**
 * Samme opsætning som i Virksomhedsguiden, så HTML renses ens i Virksomhedsguiden og leverandør-applikationer.
 * - target: Tillader links der åbner i nyt vindue
 * - use: Tillader SVG-ikoner (fx link-ikoner indsat i tekster)
 */
const SANITIZE_KONFIGURATION: Config = {
  ADD_ATTR: ['target'],
  ADD_TAGS: ['use']
};

/**
 * Renser HTML for alt der kan afvikle kode (script-tags, event handlers, javascript:-links m.m.), men bevarer formatering og links.
 * Skal bruges alle steder hvor HTML indsættes uden om Vue's indbyggede escaping, fx via v-sanitize-html eller i mails.
 */
export function sanitizeHtml(html?: string | null): string {
  return html ? sanitize(html, SANITIZE_KONFIGURATION) : '';
}

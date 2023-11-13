# Leverandør-applikation sandkasse

## Initial
Installér NPM afhængigheder
```
npm install
```
## Udvikling

Byg og serve til udvikling
```
npm run serve
```

Start udvikling/test af applikation i _src/components/Applikation.vue_

## Kode oprydning

```
npm run lint
```

```
npm run prettierfix
```

## Transpile applikation
```
npm run transpile-test
```

## Nuværende NPM moduler

Nuværende NPM moduler og versioner, som kan bruges af leverandør-applikationer der ikke er angivet i _package.json_ filen. Ved behov for andre NPM moduler, refereres der til den tekniske vejledning afsnit 3.2.3

* "contentful-rich-text-vue-renderer": "1.1.5"
* "tiny-emitter": "2.1.0"
* "@sanity/block-content-to-html": "2.0.0"
* "@sanity/client": "2.23.2"
* "sanity-blocks-vue-component": "1.0.1"
* "vue3-apexcharts": "1.4.1"
* "apexcharts": "3.33.2"
* "@erst-vg/vue3-html2pdf": "1.1.3"
* "@contentful/rich-text-html-renderer": "15.13.1"
* "@contentful/rich-text-types": "15.13.2"
* "humps": "2.0.1"
* "ol": "6.13.0"
* "tippy.js": "6.3.7"
* "zod": "3.22.4"
* "i18next": "23.5.1"

# Web-components
Denne branch er et eksperiment om man kan bygge en 3parts applikation som web-components.

Byg applikation som web-component:
```
npm run transpile-wc
```

Serve web-component som JavaScript
```
npm run serve-wc
```


Virksomhedsguiden eller anden consuming applikation. Inject script element, som peger på web-component
```
http://127.0.0.1:8080/xvg-example.umd.js
```

Indsæt web-component i applikationen.
```
<xvg-example
  @piwikSlutEvent="onPiwikSlutEvent"
  :bruger="{
    navn: 'Anders And',
    organisation: 'Demo Nation r US',
    virksomhedsnavn: 'Business Demo',
    cvr: 12345678,
    entityId: 'eid-CVR:12345678-RID:e4f13c3b-3c5a-459d-90a9-847ab9596157',
    roller: ['ERF_LEVERANDOER']
  }"
/>
```

<template>
  <div>
    <h2 class="mt-5">Download af PDF</h2>
    <p>Erhvervsfremmeplatformen udstiller et API til generation af PDF-filer, som er hostet af Erhvervsstyrelsen.</p>
    <div class="mt-5">
      <div v-if="pending" class="spinner" aria-label="Henter indhold" />
      <div v-if="error" class="alert alert-error my-5" role="alert" aria-atomic="true">
        <div class="alert-body">
          <p class="alert-heading">Fejl</p>
          <p class="alert-text">Kald til backend-service fejlede.</p>
        </div>
      </div>
      <button class="button button-primary" @click="downloadPdf()">Download PDF</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { inject, ref } from 'vue';

const isVirksomhedsguiden = inject('isVirksomhedsguiden');
const error = ref(false);
const pending = ref(false);

const postPdfRequest = async (request: PDFRequest): Promise<Blob> => {
  const path = '/api/bucket/pdf/generer/';
  const url = isVirksomhedsguiden ? path : `https://www.virksomhedsguiden.dk${path}`;
  return (
    await axios.post<Blob>(url, request, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      responseType: 'blob'
    })
  ).data;
};

const downloadPdf = (): void => {
  pending.value = true;
  error.value = false;
  postPdfRequest({ html: '<div>Indhold</div>', headerTemplate: '', footerTemplate: '', title: 'Metatitel på dokumentet', language: 'da' })
    .then(data => {
      const blobUrl = URL.createObjectURL(data);
      const pdfLink = document.createElement('a');
      pdfLink.download = 'filnavn.pdf';
      pdfLink.href = blobUrl;
      pdfLink.target = '_self';
      pdfLink.click();
    })
    .catch(() => {
      error.value = true;
    })
    .finally(() => {
      pending.value = false;
    });
};
</script>

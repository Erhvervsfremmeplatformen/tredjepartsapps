<template>
  <div>
    <h2 class="mt-5">Download af PDF</h2>
    <p class="mb-5">
      Eksempel på at downloade noget HTML som en PDF. Når applikationen afvikles uden for Virksomhedsguiden, vil kaldet altid fejle, da det ikke er
      muligt at komme i kontakt med backenden.
    </p>
    <div>
      <div v-if="pending" class="spinner" aria-label="Henter indhold" />
      <div v-if="error" class="alert alert-error my-5" role="alert" aria-atomic="true">
        <div class="alert-body">
          <p class="alert-heading">Fejl</p>
          <p class="alert-text">Kald til backend-service fejlede (fejler altid når applikation kører selvstændigt).</p>
        </div>
      </div>
      <button class="button button-primary" @click="downloadPdf()">Download PDF</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const error = ref(false);
const pending = ref(false);

const postPdfRequest = async (request: PDFRequest): Promise<Blob> =>
  (
    await axios.post<Blob>('/api/bucket/pdf/generer/', request, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      responseType: 'blob'
    })
  ).data;

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

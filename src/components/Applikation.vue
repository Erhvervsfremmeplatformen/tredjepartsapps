<template>
  <div class="applikation-container">
    <div>Headers</div>
    <h1>Jeg er en h1</h1>
    <h2>Jeg er en h2</h2>
    <h3>Jeg er en h3</h3>
    <h4>Jeg er en h4</h4>
    <h5>Jeg er en h5</h5>
    <hr />
    <div>Parameter variant:</div>
    <pre>{{ variant }}</pre>
    <div class="pt-5 pb-5 align-text-center" :style="{ 'background-color': variantColor }">
      Baggrundsfarven bestemmes af parameter varianten ({{ variantNavn }})
    </div>
    <hr />
    Tid lige nu: {{ currentTime }}
    <hr />
    Dynamisk komponent:
    <dynamic-component text="Jeg er en dynamisk komponent"></dynamic-component>
    <hr />
    <a href="http://www.google.com" target="_blank">Link til Google</a>
    <hr />
    Datepicker
    <div class="date-picker mb-305" :data-default-date="date">
      <input class="form-input" :value="date" required type="text" />
    </div>
    <hr />
    <div>Response fra axios</div>
    <div v-if="loadingResponse" class="spinner" aria-label="Henter indhold" />
    {{ response }}
    <hr />
    <button class="button button-primary">Jeg er en knap</button>
    <hr />
    <div class="row">
      <div class="col-md-6 col-xs-12">Eksempel på grid: Venstre kolonne</div>
      <div class="col-md-6 col-xs-12">Eksempel på grid: Højre kolonne</div>
    </div>
    <hr />
    <div class="card">
      <div class="card-header">
        <h3 class="header-title">Eksempel på card-komponenten</h3>
      </div>
      <div class="card-text">
        <p>
          Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Cards kan placeres i et
          <a href="#">grid</a>, således at de står side om side.
        </p>
      </div>

      <div class="card-footer card-action">
        <div class="action-links">
          <a href="#">Gå til komponent</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import axios from 'axios';
import { DateTime } from 'luxon';
import * as DKFDS from 'dkfds';

interface Variant {
  navn: string;
  aktiv: boolean;
  parametre: {
    parameternavn: string;
    parametervaerdi: string;
  }[];
}

const dynamicComponent = {
  template: '<div>{{text}}</div>',
  props: ['text']
};

@Component({
  name: 'Applikation',
  components: {
    dynamicComponent
  }
})
export default class Applikation extends Vue {
  private currentTime = '';
  private response = {};
  private error = {};
  private loadingResponse = false;
  private date = '';

  @Prop()
  private variant?: Variant;

  private get variantColor(): string {
    return this.variant?.parametre[0].parametervaerdi ?? '#C0C0C0';
  }

  private get variantNavn(): string {
    return this.variant?.navn ?? 'default';
  }

  private mounted(): void {
    this.currentTime = DateTime.local().toISO();
    this.loadingResponse = true;
    this.callExternalApi();

    DKFDS.datePicker.on(document.body);
    this.date = DateTime.local().toFormat('yyyy-MM-dd');
  }

  private async callExternalApi(): Promise<void> {
    axios
      .get('https://httpbin.org/get')
      .then((rsp: any) => {
        this.response = rsp;
        this.loadingResponse = false;
      })
      .catch((error: any) => {
        this.error = error;
      });
  }
}
</script>
<style lang="scss" scoped></style>

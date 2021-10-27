<template>
  <div class="applikation-container">
    <h4>Du er nu på side {{ trin }}/{{ maxTrin }}</h4>
    <div v-if="trin === maxTrin">
      <div class="alert alert-info">
        <div class="alert-body">
          <p class="alert-heading">Sidste trin</p>
          <p class="alert-text">Du har nået sidste trin i guiden ...</p>
        </div>
      </div>
    </div>
    <div v-else>Der er flere trin ...</div>
    <h4>Navigation</h4>
    <div>
      <button v-for="index in maxTrin" :key="index" class="button button-primary" @click="navigateTo(index)">Trin #{{ index }}</button>
    </div>
    <h4>Parameter variant:</h4>
    <pre>{{ variant }}</pre>
    <div class="pt-5 pb-5 align-text-center" :style="{ 'background-color': variantColor }">
      Baggrundsfarven bestemmes af parameter varianten ({{ variantNavn }})
    </div>
    <h4>NPM modul (luxon)</h4>
    Tid lige nu: {{ currentTime }}

    <h4>Dynamisk komponent:</h4>
    <dynamic-component text="Dette er et dynamisk komponent"></dynamic-component>

    <h4>Link:</h4>
    <a href="http://www.google.com" target="_blank">Link til Google (med _blank target)</a>

    <h4>API:</h4>
    <div>
      <div v-if="pending" class="spinner" aria-label="Henter indhold" />
      <div v-if="error" class="alert alert-error" role="alert" aria-atomic="true">
        <div class="alert-body">
          <p class="alert-heading">Fejl</p>
          <p class="alert-text">API request failed</p>
        </div>
      </div>
      <pre v-else>{{ response }}</pre>
      <button class="button button-primary" @click="callExternalApi()">API kald</button>
      <button class="button button-primary" @click="callExternalApi(true)">API kald med fejl</button>
    </div>

    <h3>Det Fælles Designsystem (DKFDS)</h3>
    <h4>Datepicker komponent:</h4>
    <div class="date-picker mb-305" :data-default-date="date">
      <input class="form-input" :value="date" required type="text" />
    </div>

    <h4>Layout:</h4>
    <div class="row">
      <div class="col-md-6 col-xs-12">Eksempel på grid: Venstre kolonne</div>
      <div class="col-md-6 col-xs-12">Eksempel på grid: Højre kolonne</div>
    </div>

    <h4>Card:</h4>
    <div class="card">
      <div class="card-header">
        <h3 class="header-title">Eksempel på card-komponenten</h3>
      </div>
      <div class="card-text">
        <p>
          Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Cards kan placeres i et grid således at de
          står side om side.
        </p>
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

interface Todo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
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
  private currentTime = DateTime.local().toISO();
  private response: Partial<Todo> = {};
  private error = false;
  private pending = false;
  private date = '';
  private trin = 1;
  private maxTrin = 3;

  @Prop()
  private variant?: Variant;

  private get variantColor(): string {
    return this.variant?.parametre[0].parametervaerdi ?? '#C0C0C0';
  }

  private get variantNavn(): string {
    return this.variant?.navn ?? 'default';
  }

  private mounted(): void {
    this.callExternalApi();

    DKFDS.datePicker.on(document.body);
    this.date = DateTime.local().toFormat('yyyy-MM-dd');
  }

  private navigateTo(trin: number): void {
    this.trin = trin;
  }

  private async callExternalApi(fail = false): Promise<void> {
    this.pending = true;
    this.error = false;
    const id = fail ? 'NaN' : 1;
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(({ data }) => {
        this.response = data;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.pending = false;
      });
  }
}
</script>
<style lang="scss" scoped>
</style>

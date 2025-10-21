<template>
  <div>
    <h2 class="mt-5">Responsive</h2>
    <p>
      Man kan bruge hjælpeklasserne i <strong>@erst-vg/vg-design-wrapper/styles/utility</strong> til at håndtere responsive design. Filen
      <strong>src/styles/components/_responsive.scss</strong> viser et eksempel på dette.
    </p>
    <div class="responsive-class mt-5">Baggrundsfarven på dette element ændrer farve når skærmstørrelsen skifter mellem small, medium og large</div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/components/_responsive.scss';
</style>

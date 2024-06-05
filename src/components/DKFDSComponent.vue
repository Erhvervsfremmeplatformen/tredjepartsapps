<template>
  <div>
    <h2 class="mt-5">Det Fælles Designsystem (DKFDS)</h2>

    <h3>VG ikoner</h3>
    <div>
      <VgIcon icon="highlightArrow" />
    </div>

    <h3>Accordions</h3>
    <div>
      <ul id="accordion-element" class="accordion vg-accordion">
        <li>
          <h2>
            <button class="accordion-button" aria-expanded="false" aria-controls="a1">
              Lorem ipsum dolor sit amet
              <span class="accordion-icon">
                <span class="icon_text">Information</span>
                <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#info"></use></svg>
              </span>
              <VgIcon icon="accordionOpen" />
            </button>
          </h2>
          <div id="a1" aria-hidden="true" class="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </li>
      </ul>
    </div>
    <h3>Badges</h3>
    <div><span class="badge badge-large">Nyhed</span></div>
    <h3>Beskeder</h3>
    <div>
      <div class="alert alert-info">
        <div class="alert-body">
          <h2 class="alert-heading">Informativ besked</h2>
          <p class="alert-text">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    <h3>Brødkrumme</h3>
    <div>
      <nav class="breadcrumbs container" aria-label="Brødkrumme">
        <ol class="breadcrumbs__list">
          <li class="breadcrumbs__list-item">
            <a class="breadcrumbs__link" href="#">Forside</a>
          </li>

          <li class="breadcrumbs__list-item">
            <a class="breadcrumbs__link" href="#">Komponenter</a>
          </li>

          <li class="breadcrumbs__list-item" aria-current="page">Brødkrumme</li>
        </ol>
      </nav>
    </div>
    <h3>Cards</h3>
    <div>
      <div class="card">
        <div class="card-header">
          <h2 class="header-title">Eksempel på card-komponenten</h2>
        </div>

        <div class="card-text">
          <p>
            Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Cards kan placeres i et
            <a href="/kode/grid/">grid</a>, således at de står side om side.
          </p>
        </div>
      </div>
    </div>
    <h3>Cookiemeddelse</h3>
    <div>N/A</div>
    <h3>Datofelter</h3>
    <div>
      <div class="form-group">
        <fieldset aria-describedby="date-input-example-hint ">
          <legend class="form-label">Indsendelsesfrist</legend>
          <span class="form-hint" id="date-input-example-hint">For eksempel: 05 12 2018</span>

          <div class="date-group js-calendar-group mt-3">
            <div class="form-group form-group-day">
              <label class="form-label" for="date-input-example-day">Dag</label>

              <input
                type="tel"
                id="date-input-example-day"
                class="form-input js-calendar-day-input"
                required
                data-min="1"
                data-max="31"
                maxlength="2"
                pattern="^[0-9]{0,2}$"
                data-input-regex="^[0-9]{0,2}$"
                title="Indtast dag på måneden som tal"
              />
            </div>

            <div class="form-group form-group-month">
              <label class="form-label" for="date-input-example-month">Måned</label>

              <input
                type="tel"
                id="date-input-example-month"
                class="form-input js-calendar-month-input"
                required
                data-min="1"
                data-max="12"
                maxlength="2"
                pattern="^[0-9]{0,2}$"
                data-input-regex="^[0-9]{0,2}$"
                title="Indtast månedens nummer"
              />
            </div>

            <div class="form-group form-group-year">
              <label class="form-label" for="date-input-example-year">År</label>

              <input
                type="tel"
                id="date-input-example-year"
                class="form-input js-calendar-year-input"
                required
                data-min="1900"
                data-max="3000"
                maxlength="4"
                pattern="^[0-9]{0,4}$"
                data-input-regex="^[0-9]{0,4}$"
                title="Indtast årstal"
              />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    <h3>Datovælger</h3>
    <div>
      <div class="form-group">
        <label class="form-label" for="datepicker-example1">Dato for aftale</label>

        <div class="date-picker">
          <input type="text" id="datepicker-example1" name="appointment-date1" class="form-input" required />
        </div>
      </div>
    </div>
    <h3>Detaljer</h3>
    <div>
      <details class="details">
        <summary class="details-summary">Mere information</summary>
        <div class="details-text">
          <p>Pellentesque nulla mi, pulvinar id blandit eu, volutpat at libero. Integer euismod augue leo.</p>
          <p>
            Morbi faucibus nunc tortor, condimentum vulputate urna sollicitudin non. Nam commodo nulla metus. Phasellus varius eu dolor nec ultricies.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac leo finibus, blandit velit nec, consequat est. Nulla facilisi.
          </p>
        </div>
      </details>
    </div>
    <h3>Dropdown</h3>
    <div>
      <div class="form-group">
        <label class="form-label" for="options">Dropdown label (select)</label>

        <select class="form-select" name="options" id="options" required>
          <option value="option1">Mulighed 1</option>
          <option value="option2">Mulighed 2</option>
          <option value="option3">Mulighed 3</option>
        </select>
      </div>
    </div>
    <h3>Faneblade</h3>
    <div>
      <div id="TABNAV-ID" class="tabnav" role="tablist">
        <button aria-controls="tabpanel1" id="tab1" class="tabnav-item" role="tab" aria-selected="false">
          <span>Fane 1</span>
        </button>
        <section class="tabnav-panel" aria-hidden="true" role="tabpanel" tabindex="0" id="tabpanel1" aria-labelledby="tab1">
          <h2>Indhold 1</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl dolor et augue. Ut lorem massa, consequat ut orci
            sit amet, maximus dictum orci. Mauris pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis semper
            turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in
            lacinia sem massa eget urna.
          </p>
        </section>

        <button aria-controls="tabpanel2" id="tab2" class="tabnav-item" role="tab" aria-selected="true">
          <span>Fane 2</span>
        </button>

        <section class="tabnav-panel" aria-hidden="false" role="tabpanel" tabindex="0" id="tabpanel2" aria-labelledby="tab2">
          <h2>Indhold 2</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl dolor et augue. Ut lorem massa, consequat ut orci
            sit amet, maximus dictum orci. Mauris pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis semper
            turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in
            lacinia sem massa eget urna.
          </p>
        </section>

        <button aria-controls="tabpanel3" id="tab3" class="tabnav-item" role="tab" aria-selected="false">
          <span>Fane 3</span>
        </button>
        <section class="tabnav-panel" aria-hidden="true" role="tabpanel" tabindex="0" id="tabpanel3" aria-labelledby="tab3">
          <h2>Indhold 3</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl dolor et augue. Ut lorem massa, consequat ut orci
            sit amet, maximus dictum orci. Mauris pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis semper
            turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in
            lacinia sem massa eget urna.
          </p>
        </section>

        <button aria-controls="tabpanel4" id="tab4" class="tabnav-item" role="tab" aria-selected="false">
          <span>Fane 4</span>
        </button>
        <section class="tabnav-panel" aria-hidden="true" role="tabpanel" tabindex="0" id="tabpanel4" aria-labelledby="tab4">
          <h2>Indhold 4</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl dolor et augue. Ut lorem massa, consequat ut orci
            sit amet, maximus dictum orci. Mauris pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis semper
            turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in
            lacinia sem massa eget urna.
          </p>
        </section>

        <button aria-controls="tabpanel5" id="tab5" class="tabnav-item" role="tab" aria-selected="false">
          <span>Fane 5</span>
        </button>
        <section class="tabnav-panel" aria-hidden="true" role="tabpanel" tabindex="0" id="tabpanel5" aria-labelledby="tab5">
          <h2>Indhold 5</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl dolor et augue. Ut lorem massa, consequat ut orci
            sit amet, maximus dictum orci. Mauris pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis semper
            turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in
            lacinia sem massa eget urna.
          </p>
        </section>

        <button aria-controls="tabpanel6" id="tab6" class="tabnav-item" role="tab" aria-selected="false">
          <span>Fane 6</span>
        </button>
        <section class="tabnav-panel" aria-hidden="true" role="tabpanel" tabindex="0" id="tabpanel6" aria-labelledby="tab6">
          <h2>Indhold 6</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl dolor et augue. Ut lorem massa, consequat ut orci
            sit amet, maximus dictum orci. Mauris pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis semper
            turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in
            lacinia sem massa eget urna.
          </p>
        </section>
      </div>
    </div>
    <h3>Fejlmeddelser</h3>
    <div>
      <div class="form-group form-error">
        <label class="form-label" for="fullname-error-example">Hvad er dit fulde navn?</label>

        <span class="form-error-message" id="fullname-error-example-error">
          <span class="sr-only">Fejl: </span>Skriv dit fulde navn, og adskil for- og efternavne med mellemrum, fx Anders Andersen
        </span>

        <input
          type="text"
          id="fullname-error-example"
          name="fullname-error-example"
          class="form-input"
          aria-invalid="true"
          aria-describedby="fullname-error-example-error "
          required
          autocomplete="name"
        />
      </div>
    </div>
    <h3>Fejlopsummering</h3>
    <div>
      <div class="alert alert-error mt-0 mb-8" role="alert" data-module="error-summary">
        <div class="alert-body">
          <h2 class="alert-heading">Der er problemer</h2>
          <ul class="alert-text nobullet-list">
            <li><a class="function-link" href="#date-field-year">Datoen for udløbsdato på dit pas bør inkludere årstal</a></li>
            <li><a class="function-link" href="#zipcode-field">Indtast postnummer - fx 4000</a></li>
          </ul>
        </div>
      </div>
    </div>
    <h3>Footer</h3>
    <div>N/A</div>
    <h3>Funktionslink</h3>
    <div>
      <a href="javascript:if(window.print)window.print()" class="function-link"
        ><svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#print"></use></svg>Print</a
      >
    </div>
    <h3>Skip link</h3>
    <div>N/A</div>
    <h3>Header</h3>
    <div>N/A</div>
    <h3>Inputfelter</h3>
    <div>
      <div class="form-group">
        <label class="form-label" for="input-text">Inputfelt med label</label>

        <input type="text" id="input-text" name="input-text" class="form-input" required />
      </div>
    </div>
    <h3>Knapper</h3>
    <div>
      <button class="button button-primary">knap</button>
      <button class="button button-secondary">knap</button>
      <button class="button button-tertiary">knap</button>
      <button class="button button-quaternary">knap</button>
      <button class="button buttonx-primary">
        <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#home"></use></svg>
        knap
      </button>
    </div>
    <h3>Loading spinner</h3>
    <div>
      <div class="spinner"></div>
      <div class="spinner-status" role="status">Arbejder</div>
    </div>
    <h3>Modal</h3>
    <div>
      <div class="fds-modal" id="modal-example" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modal-example-heading">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="modal-example-heading">Lorem ipsum</h2>
            <button class="modal-close function-link" data-modal-close>
              <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#close"></use></svg>Luk
            </button>
          </div>
          <div class="modal-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales turpis nec tincidunt dictum. Aliquam hendrerit nunc nec arcu
              lobortis fringilla. Sed nulla lectus, mollis eget rhoncus sed, porta eu ipsum.
            </p>
            <p>
              Cras eleifend elementum finibus. Mauris ac magna quis orci dapibus suscipit. Vestibulum accumsan turpis diam, ut pretium quam
              sollicitudin sed. Pellentesque posuere eget tortor quis imperdiet. Pellentesque gravida, enim vel porttitor sagittis, libero neque
              efficitur justo, nec gravida orci risus consequat lacus.
            </p>
          </div>

          <div class="modal-footer">
            <button class="button button-primary">Primær knap</button><button class="button button-secondary">Sekundær knap</button>
          </div>
        </div>
      </div>

      <button class="button button-tertiary" data-module="modal" data-target="modal-example" aria-haspopup="dialog">Åbn modal</button>
    </div>
    <h3>Overflow menu</h3>
    <div>
      <div class="overflow-menu overflow-menu--open-right">
        <button
          id="OVERFLOW-BUTTON-ID"
          class="button-overflow-menu js-dropdown"
          data-js-target="overflow1"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Overflow menu
          <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#more-vert"></use></svg>
        </button>
        <div class="overflow-menu-inner" id="overflow1" aria-hidden="true">
          <ul class="overflow-list">
            <li><button>Mulighed 1</button></li>
            <li><button>Mulighed 2</button></li>
            <li><a href="#">Mulighed 3 er et link</a></li>
            <li><button>Mulighed 4 er en længere tekst</button></li>
          </ul>
        </div>
      </div>
    </div>
    <h3>Paginering</h3>
    <div>
      <nav class="pagination" id="pagination-ID" aria-label="Pagineringseksempel med 12 sider">
        <a href="#" class="button button-arrow button-first"
          ><svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#first-page"></use></svg
          ><span class="sr-only">Første side</span></a
        >
        <a href="#" class="button button-arrow button-previous" aria-label="Forrige side">
          <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#chevron-left"></use></svg
          ><span class="pagination-nav-link">Forrige</span>
        </a>
        <span class="pagination-mobile">Side 8 af 12</span>
        <ul class="pagination__items">
          <li class="pagination-item pagination-number">
            <a href="#" class="button button-secondary" aria-label="Side 1">1</a>
          </li>
          <li class="pagination-item pagination-overflow" role="presentation">
            <span>...</span>
          </li>
          <li class="pagination-item pagination-number">
            <a href="#" class="button button-secondary" aria-label="Side 7">7</a>
          </li>
          <li class="pagination-item pagination-number">
            <a href="#" class="button current-page" aria-label="Side 8" aria-current="page">8</a>
          </li>
          <li class="pagination-item pagination-number">
            <a href="#" class="button button-secondary" aria-label="Side 9">9</a>
          </li>
          <li class="pagination-item pagination-overflow" role="presentation">
            <span>...</span>
          </li>
          <li class="pagination-item pagination-number">
            <a href="#" class="button button-secondary" aria-label="Sidste side, side 12">12</a>
          </li>
        </ul>
        <a href="#" class="button button-arrow button-next" aria-label="Næste side">
          <span class="pagination-nav-link">Næste</span
          ><svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#chevron-right"></use></svg>
        </a>
        <a href="#" class="button button-arrow button-last"
          ><svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#last-page"></use></svg
          ><span class="sr-only">Sidste side</span></a
        >
      </nav>
    </div>
    <h3>Radioknap</h3>
    <div>
      <div class="form-group">
        <fieldset role="radiogroup">
          <legend class="form-label">Liste med radioknapper</legend>

          <div class="form-group-radio">
            <input type="radio" id="radiogroup-option1" name="radio-example" class="form-radio radio-large" value="v1" />
            <label class="form-label" for="radiogroup-option1">Valg 1</label>
          </div>

          <div class="form-group-radio">
            <input type="radio" id="radiogroup-option2" name="radio-example" class="form-radio radio-large" value="v2" />
            <label class="form-label" for="radiogroup-option2">Valg 2</label>
          </div>
        </fieldset>
      </div>
    </div>
    <h3>Sprogvælger</h3>
    <div>
      <footer>
        <div class="language-switcher">
          <div class="container">
            <ul aria-label="Vælg sprog fra listen ">
              <li>
                <a href="?lang=da" lang="da" aria-label="Valgt sprog: Dansk"
                  ><svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#done"></use></svg>Dansk</a
                >
              </li>
              <li><a href="?lang=en-GB" lang="en-GB">English</a></li>
              <li><a href="?lang=de" lang="de">Deutsch</a></li>
              <li><a href="?lang=pl" lang="pl">Polski</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    <h3>Søgefelt</h3>
    <div>
      <div class="form-group search">
        <label for="input-type-text" class="sr-only">Søg efter indhold</label>
        <input class="form-input input-char-27" id="input-type-text" name="search-button" type="search" />
        <button class="button button-search">Søg</button>
      </div>

      <div class="form-group search">
        <label for="input-type-text-icon" class="sr-only">Søg efter indhold</label>
        <input class="form-input input-char-27" id="input-type-text-icon" name="search-icon" type="search" />
        <button class="button button-search">
          <svg class="icon-svg m-0" focusable="false" aria-hidden="true"><use xlink:href="#search"></use></svg><span class="sr-only">Søg</span>
        </button>
      </div>
    </div>
    <h3>Tabeller</h3>
    <div>
      <div class="table--responsive-scroll">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Affaldstype</th>
              <th scope="col">Farvekode</th>
              <th scope="col">Beskrivelse</th>
              <th scope="col">Hvor ender det?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dagrenovation</td>
              <td>Grøn</td>
              <td>Madaffald, samt papir, pap eller plastik der ikke kan genanvendes, fordi der er madrester eller andet snask på.</td>
              <td>Alt det affald, du smider ud i din primære skraldespand, som er dagrenovationen, bliver hentet og kørt på forbrændingen.</td>
            </tr>
            <tr>
              <td>Bioaffald og kompost</td>
              <td>Beige</td>
              <td>Alt madaffald uden fødevareemballage.</td>
              <td>Bioaffaldet kommes i bionedbrydelige poser, som bliver komposteret til muld.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h3>Tags</h3>
    <div>
      <button class="tag">Default</button>
      <button class="tag tag-icon">
        Default
        <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#highlight-off"></use></svg>
      </button>
    </div>
    <h3>Tekstområde</h3>
    <div>
      <div class="form-group">
        <label class="form-label" for="input-textarea">Tekstområde med label</label>

        <textarea class="form-input" id="input-textarea" name="input-textarea" rows="5" required></textarea>
      </div>
    </div>
    <h3>Tilbage-link</h3>
    <div>
      <a href="javascript:void(0);" class="back-link">Tilbage</a>
    </div>
    <h3>Tilbage til toppen</h3>
    <div>N/A</div>
    <h3>Tjekboks</h3>
    <div>
      <div class="form-group">
        <fieldset>
          <legend class="form-label">Stor tjekboks (anbefalet)</legend>

          <div class="form-group-checkbox">
            <input type="checkbox" id="large-option1" name="checkbox-large[]" class="form-checkbox checkbox-large" value="1" />
            <label class="form-label" for="large-option1">Tjekboks 1</label>
          </div>

          <div class="form-group-checkbox">
            <input type="checkbox" id="large-option2" name="checkbox-large[]" class="form-checkbox checkbox-large" value="2" />
            <label class="form-label" for="large-option2">Tjekboks 2</label>
          </div>

          <div class="form-group-checkbox">
            <input type="checkbox" id="large-option3" name="checkbox-large[]" class="form-checkbox checkbox-large" value="3" />
            <label class="form-label" for="large-option3">Tjekboks 3</label>
          </div>
        </fieldset>
      </div>
    </div>
    <h3>Toastbesked</h3>
    <div>
      <div class="toast toast-info show" aria-atomic="true">
        <div class="toast-icon"></div>
        <div class="toast-message">
          <p><span class="sr-only">Information: </span><strong id="notification-info-heading">Du har fået en besked</strong></p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <button class="toast-close" aria-describedby="notification-info-heading">Luk</button>
        </div>
      </div>
    </div>
    <h3>Toggle switch</h3>
    <div>
      <div class="form-group">
        <input id="toggle-example" type="checkbox" name="toggle-example" value="1" class="form-toggle" />
        <label for="toggle-example" class="form-toggle-label">Dette er en toggle</label>
      </div>
    </div>
    <h3>Tooltip</h3>
    <div>
      <button id="Tooltip-ID" class="button button-unstyled js-tooltip" type="button" data-tooltip="Dette er et tooltip" data-tooltip-trigger="click">
        <svg class="icon-svg mr-0 mt-0" focusable="false" aria-hidden="true"><use xlink:href="#help"></use></svg>
        <span class="sr-only">Hvad betyder det?</span>
      </button>
    </div>
    <h3>Trinindikator</h3>
    <div>
      <div class="overflow-menu overflow-menu--open-right sidebar-col">
        <button class="button-overflow-menu js-dropdown" data-js-target="trinindikator-overflow" aria-haspopup="true" aria-expanded="false">
          Trin 2 af 3
          <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#arrow-drop-down"></use></svg>
        </button>
        <div class="overflow-menu-inner" id="trinindikator-overflow" aria-hidden="true">
          <nav class="sidebar-col">
            <ul class="sidenav-list" role="menu">
              <li role="none">
                <a href="javascript:void(0);" role="menuitem">
                  <span class="sidenav-number">1.</span>
                  <div>
                    <span>Lorem ipsum</span>
                  </div>
                  <span class="sidenav-icon">
                    <svg class="icon-svg" aria-label="Gennemført" focusable="false"><use xlink:href="#done"></use></svg>
                  </span>
                </a>
              </li>
              <li class="active current" role="none">
                <a href="javascript:void(0);" role="menuitem" aria-current="page">
                  <span class="sidenav-number">2.</span>
                  <div>
                    <span>Dolor sit amet</span>
                  </div>
                </a>
              </li>
              <li role="none">
                <a href="javascript:void(0);" role="menuitem">
                  <span class="sidenav-number">3.</span>
                  <div>
                    <span>Consectetur adipiscing elit</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <h3>Vedhæft fil</h3>
    <div>
      <div class="form-group file-input">
        <label class="form-label" for="form-fileinput">Vedhæft fil</label>
        <input type="file" id="form-fileinput" name="file" />
      </div>
    </div>
    <h3>Venstremenu</h3>
    <div>
      <nav>
        <ul class="sidenav-list">
          <li>
            <a href="#">
              <div>Hovedside</div>
            </a>
          </li>
          <li class="current">
            <a href="#">
              <div>Hovedside</div>
            </a>
            <ul class="sidenav-sub_list">
              <li>
                <a href="#">
                  <div>Underside</div>
                </a>
              </li>
              <li class="active">
                <a href="#" aria-current="page">
                  <div>Underside</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>Underside</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>Underside</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>Underside</div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <div>Hovedside</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as DKFDS from 'dkfds';
import { onMounted } from 'vue';

import VgIcon from './VgIcon.vue';

onMounted(() => {
  new DKFDS.Accordion(document.querySelector('.applikation-container #accordion-element')).init();
  new DKFDS.Tabnav(document.getElementById('TABNAV-ID')).init();
  new DKFDS.Dropdown(document.getElementById('OVERFLOW-BUTTON-ID')).init();
  new DKFDS.Tooltip(document.getElementById('Tooltip-ID')).init();

  const modal = new DKFDS.Modal(document.getElementById('modal-example'));
  modal.init();
  DKFDS.datePicker.on(document.body);
});
</script>

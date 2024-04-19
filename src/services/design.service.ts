export const APP_CONTAINER_CLASS = 'applikation-container';

class DesignService {
  public applyDesign(embedded = false): void {
    this.designNavigationsButtons();
    this.designEksternLink();
    this.designButtonState();
    this.designOverskrift(embedded);
    this.designAccordion(embedded);
    this.skipOpsummeringsside();
  }

  private designNavigationsButtons() {
    this.querySelectorAll('.gm-knap').forEach(buttonElm => {
      const { classList } = buttonElm;
      if (classList.contains('gm-back-button')) {
        // Tilbage knap
        classList.remove('gm-knap');
        classList.add('button');
        classList.add('button-secondary');
      } else if (classList.contains('gm-knap')) {
        // Andre knapper
        classList.add('button');
        classList.add('button-primary');
        classList.remove('gm-knap');
        classList.remove('gm-primary');
      }
    });
  }

  private designEksternLink() {
    this.querySelectorAll('.gm-resultattrin .gm-handlings-link').forEach(el => {
      el.classList.remove('button');
      el.classList.remove('button-primary');
    });
  }

  private designButtonState() {
    // Knappen er inaktiv indtil jeg har valgt en svarmulighed
    const allSvarInputs = this.querySelectorAll('.gm-svarmuligheder input');
    if (allSvarInputs.length) {
      const nextButton = this.querySelector('.gm-navigation .button-primary');
      if (nextButton) {
        if ([...allSvarInputs].some(n => (n as HTMLInputElement).checked)) {
          nextButton.removeAttribute('disabled');
        } else {
          nextButton.setAttribute('disabled', 'disabled');
        }
      }
    }
  }

  private designOverskrift(embedded: boolean): void {
    const overskrift = this.querySelector('.gm-overskrift h3');
    if (overskrift) {
      const newHeader = embedded ? 'h2' : 'h1';
      const newOverskrift = document.createElement(newHeader);
      newOverskrift.textContent = overskrift.textContent;
      overskrift.replaceWith(newOverskrift);
    }
  }

  private designAccordion(embedded: boolean): void {
    this.querySelectorAll('.gm-uddybende-vejledning .gm-tekst h4').forEach(e => {
      const newHeader = embedded ? 'h3' : 'h2';
      const newOverskrift = document.createElement(newHeader);
      if (!embedded) {
        newOverskrift.classList.add('h3');
      }
      newOverskrift.textContent = e.textContent;
      e.replaceWith(newOverskrift);
    });
  }

  private skipOpsummeringsside() {
    const opsummering = this.querySelector('.gm-opsummeringsside');
    if (opsummering) {
      (this.querySelectorAll('.gm-navigation .button-primary')[0]! as HTMLButtonElement).click();
    }
  }

  private querySelector(selector: string): any {
    return document.querySelector(`.${APP_CONTAINER_CLASS} ${selector}`);
  }
  private querySelectorAll(selector: string): NodeListOf<any> {
    return document.querySelectorAll(`.${APP_CONTAINER_CLASS} ${selector}`);
  }
}

export const designService = new DesignService();

export const APP_CONTAINER_CLASS = 'applikation-container';

export const BUTTON = 'button';
export const BUTTON_SECONDARY = 'button-secondary';
export const BUTTON_PRIMARY = 'button-primary';
export const GM_KNAP = 'gm-knap';
export const GM_PRIMARY = 'gm-primary';
export const GM_BACK_BUTTON = 'gm-back-button';
export const GM_NAVIGATION = 'gm-navigation';

class DesignService {
  public applyDesign(isIndholdselement = false): void {
    this.designNavigationsButtons();
    this.designEksternLink();
    this.designButtonState();
    this.designOverskrift(isIndholdselement);
    this.designAccordion(isIndholdselement);
    this.skipOpsummeringsside();
  }

  private designNavigationsButtons(): void {
    this.querySelectorAll(`.${GM_KNAP}`).forEach(el => {
      const { classList } = el;
      if (classList.contains(GM_BACK_BUTTON)) {
        // Tilbage knap
        classList.remove(GM_KNAP);
        classList.add(BUTTON, BUTTON_SECONDARY);
      } else if (classList.contains(GM_KNAP)) {
        // Andre knapper
        classList.add(BUTTON, BUTTON_PRIMARY);
        classList.remove(GM_KNAP, GM_PRIMARY);
      }
    });
  }

  private designEksternLink(): void {
    this.querySelectorAll('.gm-resultattrin .gm-handlings-link').forEach(el => {
      el.classList.remove(BUTTON, BUTTON_PRIMARY);
    });
  }

  private designButtonState(): void {
    // Knappen er inaktiv indtil jeg har valgt en svarmulighed
    const allSvarInputs = this.querySelectorAll('.gm-svarmuligheder input');
    if (allSvarInputs.length) {
      const nextButton = this.querySelector(`.${GM_NAVIGATION} .${BUTTON_PRIMARY}`);
      if (nextButton) {
        if ([...allSvarInputs].some(el => (el as HTMLInputElement).checked)) {
          nextButton.removeAttribute('disabled');
        } else {
          nextButton.setAttribute('disabled', 'disabled');
        }
      }
    }
  }

  private designOverskrift(isIndholdselement: boolean): void {
    const overskrift = this.querySelector('.gm-overskrift h3');
    if (overskrift) {
      const newHeader = isIndholdselement ? 'h2' : 'h1';
      const newOverskrift = document.createElement(newHeader);
      newOverskrift.textContent = overskrift.textContent;
      overskrift.replaceWith(newOverskrift);
    }
  }

  private designAccordion(isIndholdselement: boolean): void {
    this.querySelectorAll('.gm-uddybende-vejledning .gm-tekst h4').forEach(el => {
      const newHeader = isIndholdselement ? 'h3' : 'h2';
      const newOverskrift = document.createElement(newHeader);
      if (!isIndholdselement) {
        newOverskrift.classList.add('h3');
      }
      newOverskrift.textContent = el.textContent;
      el.replaceWith(newOverskrift);
    });
  }

  private skipOpsummeringsside(): void {
    const opsummering = this.querySelector('.gm-opsummeringsside');
    if (opsummering) {
      (this.querySelectorAll(`.${GM_NAVIGATION} .${BUTTON_PRIMARY}`)[0]! as HTMLButtonElement).click();
    }
  }

  private querySelector(selector: string): Element | null {
    return document.querySelector(`.${APP_CONTAINER_CLASS} ${selector}`);
  }
  private querySelectorAll(selector: string): NodeListOf<HTMLElement> {
    return document.querySelectorAll(`.${APP_CONTAINER_CLASS} ${selector}`);
  }
}

export const designService = new DesignService();

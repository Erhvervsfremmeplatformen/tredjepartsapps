import { APP_CONTAINER_CLASS, designService } from '@/services/design.service';

describe('Design service', () => {
  it('kan håndtere navigationsknapper (tilbage)', () => {
    // ARRANGE
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('gm-knap');
    buttonElement.classList.add('gm-back-button');
    appContainer.appendChild(buttonElement);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign();

    // ASSERT
    expect(buttonElement.classList).toContain('button');
    expect(buttonElement.classList).toContain('button-secondary');
  });

  it('kan håndtere navigationsknapper', () => {
    // ARRANGE
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('gm-knap');
    buttonElement.classList.add('gm-primary');
    appContainer.appendChild(buttonElement);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign();

    // ASSERT
    expect(buttonElement.classList).not.toContain('gm-knap');
    expect(buttonElement.classList).toContain('button');
    expect(buttonElement.classList).toContain('button-primary');
  });

  it('kan ændre design for eksterne links', async () => {
    // ARRANGE
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);
    const container = document.createElement('div');
    appContainer.appendChild(container);
    const link = document.createElement('a');
    container.classList.add('gm-resultattrin');
    link.classList.add('gm-knap');
    link.classList.add('gm-primary');
    link.classList.add('gm-handlings-link');
    container.appendChild(link);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign();

    // ASSERT
    const eksternLink = document.querySelector('.gm-resultattrin .gm-handlings-link');
    const { classList } = eksternLink!;
    expect(classList.contains('button')).toEqual(false);
    expect(classList.contains('button-primary')).toEqual(false);
  });

  it('knap "næste" vil være deaktiveret indtil man har valgt en svarmulighed', () => {
    // ARRANGE
    const buttonNextSelector = '#button-next';
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);
    const navigationElement = document.createElement('div');
    navigationElement.classList.add('gm-navigation');
    const svarmulighedElement = document.createElement('div');
    svarmulighedElement.classList.add('gm-svarmuligheder');
    const inputElement = document.createElement('input');
    inputElement.type = 'radio';
    inputElement.classList.add('gm-form-radio');
    const inputElement2 = document.createElement('input');
    inputElement2.type = 'radio';
    inputElement2.id = 'input-radio';
    inputElement2.classList.add('gm-form-radio');
    svarmulighedElement.appendChild(inputElement);
    svarmulighedElement.appendChild(inputElement2);
    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'button-next';
    button.classList.add('gm-knap');
    button.classList.add('gm-primary');
    navigationElement.appendChild(button);
    appContainer.appendChild(navigationElement);
    appContainer.appendChild(svarmulighedElement);
    document.body.appendChild(appContainer);

    designService.applyDesign();
    expect(document.querySelector(buttonNextSelector)?.getAttribute('disabled')).toEqual('disabled');

    // ACT
    (document.querySelector('#input-radio') as HTMLButtonElement).click();
    designService.applyDesign();

    // ASSERT
    expect(document.querySelector(buttonNextSelector)?.getAttribute('disabled')).toEqual(null);
  });

  it.each([
    {
      element: 'h2',
      embedded: true,
      description: 'køres som dynamisk indholdselment'
    },
    {
      element: 'h1',
      embedded: false,
      description: 'køres som selvstændingt indholdselement'
    }
  ])('kan ændre overskrift til $element når applikation $description', ({ embedded, element, description }) => {
    // ARRANGE
    document.body.innerHTML = '';
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);

    const overskriftElement = document.createElement('h3');
    overskriftElement.classList.add('gm-overskrift');
    appContainer.appendChild(overskriftElement);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign(embedded);

    // ASSERT
    if (embedded) {
      const h2 = document.querySelector(element);
      expect(h2).toBeDefined();
    } else {
      const h1 = document.querySelector(element);
      expect(h1).toBeDefined();
    }
  });

  it.each([
    {
      element: 'h3',
      embedded: true,
      description: 'køres som dynamisk indholdselment'
    },
    {
      element: 'h2',
      embedded: false,
      description: 'køres som selvstændingt indholdselement'
    }
  ])('kan ændre accordion overskrift til $element når applikation $description', ({ embedded, element, description }) => {
    // ARRANGE
    document.body.innerHTML = '';
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);

    const vejledningElement = document.createElement('div');
    vejledningElement.classList.add('gm-uddybende-vejledning');

    const tekstElement = document.createElement('div');
    tekstElement.classList.add('gm-tekst');

    const overskriftElement = document.createElement('h4');
    tekstElement.appendChild(overskriftElement);
    vejledningElement.appendChild(tekstElement);
    appContainer.appendChild(vejledningElement);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign(embedded);

    // ASSERT
    if (embedded) {
      const h3 = document.querySelector(element);
      expect(h3).toBeDefined();
    } else {
      const h2 = document.querySelector(element);
      expect(h2).toBeDefined();
      expect(h2!.classList).toContain('h3');
    }
  });

  it('vil automatisk klikke på "næste" knappen når der vises en opsummeringsside', () => {
    // ARRANGE
    const buttonClickListener = jest.fn();
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);
    const container = document.createElement('div');
    container.classList.add('gm-opsummeringsside');
    appContainer.appendChild(container);
    const navigationElement = document.createElement('div');
    navigationElement.classList.add('gm-navigation');

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('gm-knap');
    button.classList.add('gm-primary');
    button.addEventListener('click', buttonClickListener);

    navigationElement.appendChild(button);
    container.appendChild(navigationElement);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign();

    // ASSERT
    expect(buttonClickListener).toHaveBeenCalled();
  });
});

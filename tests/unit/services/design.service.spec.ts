import {
  APP_CONTAINER_CLASS,
  BUTTON,
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
  GM_BACK_BUTTON,
  GM_KNAP,
  GM_NAVIGATION,
  GM_PRIMARY,
  designService
} from '@/services/design.service';

describe('Design service', () => {
  it('kan håndtere navigationsknapper (tilbage)', () => {
    // ARRANGE
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);
    const buttonElement = document.createElement('button');
    buttonElement.classList.add(GM_KNAP, GM_BACK_BUTTON);
    appContainer.appendChild(buttonElement);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign();

    // ASSERT
    const { classList } = buttonElement;
    expect(classList).toContain(BUTTON);
    expect(classList).toContain(BUTTON_SECONDARY);
  });

  it('kan håndtere navigationsknapper', () => {
    // ARRANGE
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);
    const buttonElement = document.createElement('button');
    buttonElement.classList.add(GM_KNAP, GM_PRIMARY);
    appContainer.appendChild(buttonElement);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign();

    // ASSERT
    const { classList } = buttonElement;
    expect(classList).not.toContain(GM_KNAP);
    expect(classList).toContain(BUTTON);
    expect(classList).toContain(BUTTON_PRIMARY);
  });

  it('kan ændre design for eksterne links', async () => {
    // ARRANGE
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);
    const container = document.createElement('div');
    container.classList.add('gm-resultattrin');
    const link = document.createElement('a');
    link.classList.add(GM_KNAP, GM_PRIMARY, 'gm-handlings-link');
    appContainer.appendChild(container);
    container.appendChild(link);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign();

    // ASSERT
    const eksternLink = document.querySelector('.gm-resultattrin .gm-handlings-link');
    const { classList } = eksternLink!;
    expect(classList.contains(BUTTON)).toEqual(false);
    expect(classList.contains(BUTTON_PRIMARY)).toEqual(false);
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

    const svarElement = document.createElement('input');
    svarElement.type = 'radio';
    svarElement.classList.add('gm-form-radio');

    const svarElement2 = document.createElement('input');
    svarElement2.type = 'radio';
    svarElement2.id = 'input-radio';
    svarElement2.classList.add('gm-form-radio');

    const buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.id = 'button-next';
    buttonElement.classList.add(GM_KNAP, GM_PRIMARY);

    svarmulighedElement.appendChild(svarElement);
    svarmulighedElement.appendChild(svarElement2);
    navigationElement.appendChild(buttonElement);
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
      isIndholdselement: true,
      description: 'køres som dynamisk indholdselment'
    },
    {
      element: 'h1',
      isIndholdselement: false,
      description: 'køres som selvstændingt indholdselement'
    }
  ])('kan ændre overskrift til $element når applikation $description', ({ isIndholdselement, element, description }) => {
    // ARRANGE
    document.body.innerHTML = '';
    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);

    const overskriftElement = document.createElement('h3');
    overskriftElement.classList.add('gm-overskrift');

    appContainer.appendChild(overskriftElement);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign(isIndholdselement);

    // ASSERT
    const el = document.querySelector(element);
    expect(el).toBeDefined();
  });

  it.each([
    {
      element: 'h3',
      isIndholdselement: true,
      description: 'køres som dynamisk indholdselment'
    },
    {
      element: 'h2',
      isIndholdselement: false,
      description: 'køres som selvstændingt indholdselement'
    }
  ])('kan ændre accordion overskrift til $element når applikation $description', ({ isIndholdselement, element, description }) => {
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
    designService.applyDesign(isIndholdselement);

    // ASSERT

    const el = document.querySelector(element);
    expect(el).toBeDefined();
    if (!isIndholdselement) {
      expect(el!.classList).toContain('h3');
    }
  });

  it('vil automatisk klikke på "næste" knappen når der vises en opsummeringsside', () => {
    // ARRANGE
    const buttonClickListener = jest.fn();

    const appContainer = document.createElement('div');
    appContainer.classList.add(APP_CONTAINER_CLASS);

    const container = document.createElement('div');
    container.classList.add('gm-opsummeringsside');

    const navigationElement = document.createElement('div');
    navigationElement.classList.add(GM_NAVIGATION);

    const buttonElement = document.createElement('button');
    buttonElement.classList.add(GM_KNAP);
    buttonElement.classList.add(GM_PRIMARY);
    buttonElement.addEventListener('click', buttonClickListener);

    appContainer.appendChild(container);
    navigationElement.appendChild(buttonElement);
    container.appendChild(navigationElement);
    document.body.appendChild(appContainer);

    // ACT
    designService.applyDesign();

    // ASSERT
    expect(buttonClickListener).toHaveBeenCalled();
  });
});

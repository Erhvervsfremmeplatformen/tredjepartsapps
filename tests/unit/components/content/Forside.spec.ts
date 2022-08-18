import Forside from '@/components/content/Forside.vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

describe('Forside.vue tests', () => {
  it('can emit start', () => {
    // ARRANGE
    const wrapper = mountComponent();

    // ACT
    wrapper.find(getTestId('start-button')).trigger('click');

    // ASSERT
    expect(wrapper.emitted('start')).toBeDefined();
  });
});

/* Helpers */

function mountComponent(): Wrapper<Forside> {
  return shallowMount(Forside);
}

function getTestId(id: string): string {
  return `[data-testid="${id}"]`;
}

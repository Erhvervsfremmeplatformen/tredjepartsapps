import Applikation from '@/components/Applikation.vue';
import Forside from '@/components/content/Forside.vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

describe('Forside.vue tests', () => {
  it('can emit start', () => {
    // ARRANGE
    const wrapper = mountComponent();

    // ACT
    wrapper.find('button').trigger('click');

    // ASSERT
    expect(wrapper.emitted('start')).toBeDefined();
  });
});

/* Helpers */

function mountComponent(): Wrapper<Forside> {
  return shallowMount(Forside, {
    mocks: {
      $t: (key: string) => key
    }
  });
}

function mountComponent2(): Wrapper<Applikation> {
  return shallowMount(Applikation, {
    mocks: {
      $t: (key: string) => key
    }
  });
}

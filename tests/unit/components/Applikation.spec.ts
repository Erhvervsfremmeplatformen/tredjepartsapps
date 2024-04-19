import Applikation from '@/components/Applikation.vue';
import { mount } from '@vue/test-utils';

describe('Application', () => {
  it('Foobar', () => {
    // ARRANGE
    const wrapper = mount(Applikation);

    // ACT

    // ASSERT
    console.debug(wrapper.html());

    expect(true).toEqual(true);
  });
});

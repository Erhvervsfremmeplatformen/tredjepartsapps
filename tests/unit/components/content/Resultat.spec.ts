import Resultat from '@/components/content/Resultat.vue';
import { GuideAnswer } from '@/enums/guideAnswer.enum';
import { shallowMount, Wrapper } from '@vue/test-utils';

describe('Resultat.vue tests', () => {
  it('can show correct result', () => {
    // ACT
    const wrapper = mountComponent([GuideAnswer.FIRST, GuideAnswer.SECOND, GuideAnswer.SECOND]);

    // ASSERT
    expect(wrapper.find(getTestId('title')).text()).toEqual('vaelg-virksomhedsform.sporgsmaal.resultat.as.title');
    expect(wrapper.find(getTestId('text')).text()).toEqual('vaelg-virksomhedsform.sporgsmaal.resultat.as.text');
  });

  it('can start over', () => {
    // ARRANGE
    const wrapper = mountComponent([GuideAnswer.FIRST, GuideAnswer.FIRST, GuideAnswer.FIRST]);

    // ACT
    wrapper.find(getTestId('reset-button')).trigger('click');

    // ASSERT
    expect(wrapper.emitted('reset')).toBeDefined();
  });
});

/* Helpers */

function mountComponent(answers: GuideAnswer[]): Wrapper<Resultat> {
  return shallowMount(Resultat, {
    propsData: {
      answers
    }
  });
}

function getTestId(id: string): string {
  return `[data-testid="${id}"]`;
}

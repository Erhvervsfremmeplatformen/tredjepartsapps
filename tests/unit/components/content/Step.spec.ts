import Step from '@/components/content/Step.vue';
import { GuideAnswer } from '@/enums/guideAnswer.enum';
import { GuideStep } from '@/enums/guideStep.enum';
import { shallowMount, Wrapper } from '@vue/test-utils';
import flushPromises from 'flush-promises';

describe('Step.vue tests', () => {
  it('can show correct labels', () => {
    // ACT
    const wrapper = mountComponent(GuideStep.STEP_1);

    // ASSERT
    const radioButtons = wrapper.findAll('.form-group-radio');
    expect(radioButtons.at(0).text()).toEqual('vaelg-virksomhedsform.sporgsmaal.step-1.svar-a');
    expect(radioButtons.at(1).text()).toEqual('vaelg-virksomhedsform.sporgsmaal.step-1.svar-b');
  });

  it('can show allerts', async () => {
    // ARRANGE
    const wrapper = mountComponent(GuideStep.STEP_2_EN);

    // ACT
    wrapper.find(`#radio-${GuideAnswer.FIRST}`).trigger('click');
    await flushPromises();

    // ASSERT
    const allerts = wrapper.findAll('.alert-body');
    expect(allerts.length).toEqual(1);
    expect(allerts.at(0).text()).toEqual('vaelg-virksomhedsform.sporgsmaal.step-2-en.alert-a');
  });

  it('can emit choice', async () => {
    // ARRANGE
    const wrapper = mountComponent(GuideStep.STEP_3_JA);

    // ACT
    wrapper.find(`#radio-${GuideAnswer.FIRST}`).trigger('click');
    await flushPromises();
    wrapper.findAll('button').at(1).trigger('click');
    await flushPromises();

    // ASSERT
    expect(wrapper.emitted('forward')![0][0]).toEqual(GuideAnswer.FIRST);
  });

  it('can go back', () => {
    // ARRANGE
    const wrapper = mountComponent(GuideStep.STEP_3_JA);

    // ACT
    wrapper.findAll('button').at(0).trigger('click');

    // ASSERT
    expect(wrapper.emitted('back')).toBeDefined();
  });
});

/* Helpers */

function mountComponent(step: GuideStep): Wrapper<Step> {
  return shallowMount(Step, {
    propsData: {
      step
    },
    mocks: {
      $t: (key: string) => key
    }
  });
}

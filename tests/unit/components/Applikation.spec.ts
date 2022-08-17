import Applikation from '@/components/Applikation.vue';
import Forside from '@/components/content/Forside.vue';
import Resultat from '@/components/content/Resultat.vue';
import Step from '@/components/content/Step.vue';
import { GuideAnswer } from '@/enums/guideAnswer.enum';
import { GuideStep } from '@/enums/guideStep.enum';
import { titles } from '@/utils/title.util';
import * as dataEvent from '@erst-vg/piwik-event-wrapper';
import { shallowMount, Wrapper } from '@vue/test-utils';
import flushPromises from 'flush-promises';

describe('test Apllikation.vue', () => {
  it('can mount Applikation', () => {
    // ACT
    const wrapper = mountComponent();

    // ASSERT
    expect(wrapper.findComponent(Forside).exists()).toEqual(true);
    expect(wrapper.findComponent(Resultat).exists()).toEqual(false);
    expect(wrapper.findComponent(Step).exists()).toEqual(false);
    expect(window.location.hash).toEqual(`#${titles[GuideStep.FORSIDE]}`);
  });

  it('can start guide', async () => {
    // ARRANGE
    const piwikSpy = spyOn(dataEvent, 'emitPageViewEvent');
    const wrapper = mountComponent();

    // ACT
    wrapper.findComponent(Forside).vm.$emit('start');
    await flushPromises();

    // ASSERT
    expect(wrapper.findComponent(Forside).exists()).toEqual(false);
    expect(wrapper.findComponent(Resultat).exists()).toEqual(false);
    expect(wrapper.findComponent(Step).exists()).toEqual(true);
    expect(wrapper.findComponent(Step).attributes('step')).toEqual(GuideStep.STEP_1);
    expect(window.location.hash).toEqual(`#${titles[GuideStep.STEP_1]}`);
    expect(piwikSpy).toBeCalled();
  });

  it('can get to result page including back: start -> A -> back -> B -> A', async () => {
    // ARRANGE
    const piwikSpy = spyOn(dataEvent, 'emitPageViewEvent');
    const resultTitle = 'vaelg-virksomhedsform.sporgsmaal.resultat.is.title';
    const wrapper = mountComponent();

    // ACT
    wrapper.findComponent(Forside).vm.$emit('start');
    await flushPromises();
    wrapper.findComponent(Step).vm.$emit('forward', GuideAnswer.FIRST);
    await flushPromises();
    wrapper.findComponent(Step).vm.$emit('back');
    await flushPromises();
    wrapper.findComponent(Step).vm.$emit('forward', GuideAnswer.SECOND);
    await flushPromises();
    wrapper.findComponent(Step).vm.$emit('forward', GuideAnswer.FIRST);
    await flushPromises();
    wrapper.findComponent(Resultat).vm.$emit('emitPiwikEvent', resultTitle);
    await flushPromises();

    // ASSERT
    expect(wrapper.findComponent(Forside).exists()).toEqual(false);
    expect(wrapper.findComponent(Resultat).exists()).toEqual(true);
    expect(wrapper.findComponent(Step).exists()).toEqual(false);
    expect(window.location.hash).toEqual(`#${resultTitle}`);
    expect(piwikSpy).toBeCalledTimes(5);
  });

  it('can reset page: start -> B -> A -> reset', async () => {
    // ARRANGE
    const piwikSpy = spyOn(dataEvent, 'emitPageViewEvent');
    const resultTitle = 'vaelg-virksomhedsform.sporgsmaal.resultat.is.title';
    const wrapper = mountComponent();

    // ACT
    wrapper.findComponent(Forside).vm.$emit('start');
    await flushPromises();
    wrapper.findComponent(Step).vm.$emit('forward', GuideAnswer.SECOND);
    await flushPromises();
    wrapper.findComponent(Step).vm.$emit('forward', GuideAnswer.FIRST);
    await flushPromises();
    wrapper.findComponent(Resultat).vm.$emit('emitPiwikEvent', resultTitle);
    await flushPromises();
    wrapper.findComponent(Resultat).vm.$emit('reset');
    await flushPromises();

    // ASSERT
    expect(wrapper.findComponent(Forside).exists()).toEqual(true);
    expect(wrapper.findComponent(Resultat).exists()).toEqual(false);
    expect(wrapper.findComponent(Step).exists()).toEqual(false);
    expect(window.location.hash).toEqual(`#${titles[GuideStep.FORSIDE]}`);
    expect(piwikSpy).toBeCalledTimes(4);
  });
});

/* Helpers */

function mountComponent(): Wrapper<Applikation> {
  return shallowMount(Applikation);
}

import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import Store from '@/store'

import Counter from '@/components/Counter'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Counter.vue', () => {
  let store
  beforeEach(() => {
    store = Store
  })

  it('should render correct contents', () => {
    const wrapper = shallow(Counter, { store, localVue })
    const btn = wrapper.find('.confirm-btn')
    expect(btn.text()).toBe('今のカウントは？')
  })

  it('should render added count', () => {
    const wrapper = shallow(Counter, { store, localVue })
    const count = wrapper.find('.current-count')            // カウントの表示部分
    const incrementButton = wrapper.findAll('button').at(1) // カウントの+1ボタン部分

    expect(count.text()).toBe('0')
    incrementButton.trigger('click')
    expect(count.text()).toBe('1')
    incrementButton.trigger('click')
    incrementButton.trigger('click')
    expect(count.text()).toBe('3')
  })
})

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
    const btn = wrapper.findAll('button').at(1)
    expect(store.getters['getCount']).toEqual(0)
    btn.trigger('click')
    expect(store.getters['getCount']).toEqual(1)
  })
})

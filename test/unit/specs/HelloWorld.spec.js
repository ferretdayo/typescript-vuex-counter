import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import Store from '@/store'

import HelloWorld from '@/components/HelloWorld'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  let store
  beforeEach(() => {
    store = Store
  })

  it('should render correct contents', () => {
    const wrapper = shallow(HelloWorld, { store, localVue })
    expect(wrapper.find('h1').text())
    .toEqual('カウンター')
  })
})

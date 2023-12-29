import { mount } from '@vue/test-utils'
import NotFoundView from '../404.vue'

describe('NotFoundView', () => {
  it('renders the component', () => {
    const wrapper = mount(NotFoundView)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the GIF image', () => {
    const wrapper = mount(NotFoundView)
    const gifElement = wrapper.find('img')
    expect(gifElement.exists()).toBe(true)
    expect(gifElement.attributes('src')).toBe('https://media1.tenor.com/m/uSEMb3cPgSoAAAAd/travolta-where.gif')
  })

  // Add more tests as needed
})

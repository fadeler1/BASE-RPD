import { createApp } from 'vue'
import { mount } from '@vue/test-utils';
import App from '../App.vue'
import Headers from '../common/Header.vue'

test('renders Headers component', async () => {
  const app = createApp(App)
  const wrapper = mount(Headers, { global: { plugins: [app] } })
  await wrapper.vm.$nextTick()
})

test('renders router-view component', async () => {
  const app = createApp(App)
  const wrapper = mount(App, { global: { plugins: [app] } })
  await wrapper.vm.$nextTick()
})

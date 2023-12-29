import { mount } from '@vue/test-utils';
import Header from '../Header.vue';

describe('Header', () => {
  it('verifica la existencia de elementos', () => {
    const wrapper = mount(Header);
    
    // Verificar que ciertos elementos existan en el componente
    expect(wrapper.find('.bg-header').exists()).toBe(true);
    expect(wrapper.find('.navbar').exists()).toBe(true);
    // ... agrega más verificaciones según sea necesario
  });
});

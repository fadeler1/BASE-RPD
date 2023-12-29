import { render, screen } from '@testing-library/vue';
import MiComponente from '../Welcome.vue';
import { useMyStore } from '../../stores/store';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

describe('Welcome', () => {
  beforeEach(() => {
    const app = createApp({});
    app.use(createPinia());
  });

  it('renders the User index component', () => {
    const store = useMyStore();
    store.usuario = {
      nombre: 'Nombre Apoderado',
      telefonoContacto: '123456789',
      correo: 'correo@example.com',
    };

    render(MiComponente);

    const elements = screen.getAllByText('Nombre Apoderado');
    expect(elements.length).toBeGreaterThan(0);

  })

  // Add more tests as needed
})

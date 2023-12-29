import { render, screen } from '@testing-library/vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import MiComponente from '../User.vue';
import { useMyStore } from '../../stores/store';

describe('MiComponente', () => {
  beforeEach(() => {
    const app = createApp({});
    app.use(createPinia());
  });

  it('renders user information correctly', async () => {
    const store = useMyStore();
    store.usuario = {
      nombre: 'Nombre Apoderado',
      telefonoContacto: '123456789',
      correo: 'correo@example.com',
    };

    render(MiComponente);

    const elements = screen.getAllByText('Nombre Apoderado');
    expect(elements.length).toBeGreaterThan(0);
  });
});

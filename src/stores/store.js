import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    formulario: '',
    date: '',
    usuario: {
      nombre: 'Pablo Magnere',
      correo: 'pablo.magnere@mineduc.cl',
      telefonoContacto: '968449862'
    },
  }),
});
export default {
    DEVELOPMENT: {
      apiUrl: import.meta.env.VITE_BASE_URL || 'dockerdesa.mineduc.cl'
    },
    PRODUCTION: {
      apiUrl: import.meta.env.VITE_BASE_URL || 'docker.mineduc.cl'
    },
  };
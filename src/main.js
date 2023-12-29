import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './routers/router';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const pinia = createPinia();

createApp(App)
    .use( createPinia() )
    .use( router )
    .mount( '#app' )

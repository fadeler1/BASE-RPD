import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import index from './index.vue'
import router from './routers/router'

const app = createApp(index);

app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css'
import router_controller from './controllers/router_controller'
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
    .use(router_controller)
    .mount('#app')

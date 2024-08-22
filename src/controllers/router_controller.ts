import {createMemoryHistory, createRouter} from 'vue-router'

import waitingView from '../views/waiting_vue.vue'

const routes = [
    { path: '/', component: waitingView },
    // { path: '/about', component: AboutView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
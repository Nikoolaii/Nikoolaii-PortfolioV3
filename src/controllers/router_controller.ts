import {createMemoryHistory, createRouter} from 'vue-router'

import waitingView from '../views/waiting_vue.vue'
import indexView from '../views/index_vue.vue'

const routes = [
    { path: '/', component: waitingView },
    { path : '/index', component: indexView }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
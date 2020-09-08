import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toys',
    name: 'Toys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "toys" */ '../views/Toys.vue'),
    meta: {
      login: true //login es un nombre X puede ser cualquiera referente a la autenticacion
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { //funcion que se ejecutara cada vez que haya un usuario(autentificacion)
  let user = firebase.auth().currentUser
  let authRequired = to.matched.some(route => route.meta.login) //si es que la ruta requiere o no autentificacion (meta.login = true)
  if (!user && authRequired) {
    next('/')
  } else {
    next()
  }
})

export default router

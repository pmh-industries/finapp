import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import About from 'components/layout/About'
import Registration from 'components/layout/Registration'
import Investments from 'components/layout/Investments'
import Contact from 'components/layout/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/investments',
      name: 'Investments',
      component: Investments
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ],
  mode: 'history'
})

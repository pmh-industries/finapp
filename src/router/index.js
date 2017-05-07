import Vue from 'vue'
import Router from 'vue-router'
import {load, Map, Marker} from 'vue-google-maps'

import Home from 'components/Home'
import About from 'components/layout/About'
import Registration from 'components/layout/Registration'
import Investments from 'components/layout/Investments'
import Contact from 'components/layout/Contact'
import Dashboard from 'components/dashboard/Dashboard'
import Account from 'components/dashboard/Account'
import Packages from 'components/dashboard/Packages'
import Login from 'components/layout/Login'
import AccountDash from 'components/dashboard/AccountDash'
import Darkdash from 'components/dashboard/Darkdash'


Vue.use(Router);

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
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
    path: '/Account',
    name: 'Account',
    component: Account
    },
    {
      path: '/Packages',
      name: 'Packages',
      component: Packages
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AccountDash',
      name: 'AccountDash',
      component: AccountDash
    },
    {
      path: '/Darkdash',
      name: 'Darkdash',
      component: Darkdash
    },

  ],
  mode: 'history'
})


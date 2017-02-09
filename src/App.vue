<template>
  <div id="app">
    <h1>FINAPP</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/registration">Registration</router-link>
    <router-link to="/investments">Investments</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home'
// import About from './components/layout/About'
// import Registration from './components/layout/Registration'
// import Investments from './components/layout/Investments'
// import Contact from './components/layout/Contact'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

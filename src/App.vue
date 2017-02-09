<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <router-link to="/" class="btn-lg">Home</router-link>
    <router-link to="/about" class="btn-lg">About</router-link>
    <router-link to="/registration" class="btn-lg">Registration</router-link>
    <router-link to="/investments" class="btn-lg">Investments</router-link>
    <router-link to="/contact" class="btn-lg">Contact</router-link>
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
  background-color: orangered;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}


</style>

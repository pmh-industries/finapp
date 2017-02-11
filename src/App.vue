<template>
  <div id="wrapper">
    <div id="app" class="container">
      <div class="navbar">
        <img id="logo" src="./assets/logo.png">
        <div class="links">
          <router-link to="/" class="btn-lg">Home</router-link>
          <router-link to="/about" class="btn-lg">About</router-link>
          <router-link to="/registration" class="btn-lg">Registration</router-link>
          <router-link to="/investments" class="btn-lg">Investments</router-link>
          <router-link to="/contact" class="btn-lg">Contact</router-link>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
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
#wrapper {
  background-color: #F1F1F1;
}
#app {
  background-color: white;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);
}

.navbar {
  background-color: orangered;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#logo {
  float: left;
  margin-left: 50px;
  max-height: 80px;
}

.links {
  float: right;
}

</style>

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
      <div class="jumbotron">
        <h1>REGISTER</h1>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">CLICK HERE</a></p>
      </div>


      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer">
        <div class="arrow-down"></div>
      </div>
      <div class="footer">
        <div class="col-sm-6 col-xs-12"></div>
          <div class="col-sm-6 col-xs-12">
            <div class="call-to-action">
            <h2>REGISTER</h2>
            <p><a class="btn btn-primary btn-lg" href="/registration" role="button">CLICK HERE</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

h1, h2 {
  font-weight: normal;
  padding: 30px;
}

.content {
  background-color: white;
}

.row {
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: black;
}

#map {
  height: 400px;
  width: 100%;
}

.footer {
  background-color: orangered;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid white;
}

.call-to-action {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>

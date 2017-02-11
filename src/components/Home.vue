<template>
  <div class="home">
    <div class="jumbotron">
      <h1>REGISTER</h1>
      <p><a class="btn btn-primary btn-lg" href="/registration" role="button">CLICK HERE</a></p>
    </div>
    <h1>{{ msg }}</h1>
    <hr>
    <div class="jumbotron content">
      <p>Pancetta tail spare ribs sirloin, bresaola shank ribeye tenderloin ham hock sausage chuck doner beef ribs alcatra meatloaf. Cow pork loin strip steak venison tri-tip beef t-bone. Biltong shankle pig tenderloin, kielbasa spare ribs hamburger meatloaf rump ham tri-tip. Jowl meatball fatback sirloin picanha ham, shoulder tenderloin swine sausage pork bresaola jerky cupim. Pork tail jerky beef ribs short ribs. Beef ribs alcatra meatball, ribeye rump turducken andouille. Pork doner sausage, shank tri-tip prosciutto pork loin turkey pork chop pancetta tenderloin flank ribeye.</p>
      <div class="row justify-content-around">
        <div class="col-5 col-offset-5">
          <img src="http://campusmaps.umn.edu/sites/campusmaps.umn.edu/files/styles/building_photos/public/wbob_150722_8444.jpg?itok=iF2p5fft" width="500px;">
        </div>
        <div class="col-5 col-offset-5">
          <img src="http://campusmaps.umn.edu/sites/campusmaps.umn.edu/files/styles/building_photos/public/wbob_150722_8444.jpg?itok=iF2p5fft" width="500px;">
        </div>
      </div>
    </div>
    <h2>Investments</h2>
    <hr>
    <div class="jumbotron content">
      <div class="row justify-content-around">
        <div class="col-5 col-offset-5">
          <p>Pancetta tail spare ribs sirloin, bresaola shank ribeye tenderloin ham hock sausage chuck doner beef ribs alcatra meatloaf. Cow pork loin strip steak venison tri-tip beef t-bone. Biltong shankle pig tenderloin, kielbasa spare ribs hamburger meatloaf rump ham tri-tip. Jowl meatball fatback sirloin picanha ham, shoulder tenderloin swine sausage pork bresaola jerky cupim. Pork tail jerky beef ribs short ribs. Beef ribs alcatra meatball, ribeye rump turducken andouille. Pork doner sausage, shank tri-tip prosciutto pork loin turkey pork chop pancetta tenderloin flank ribeye.</p>
        </div>
        <div class="col-5 col-offset-5">
          <img src="http://campusmaps.umn.edu/sites/campusmaps.umn.edu/files/styles/building_photos/public/wbob_150722_8444.jpg?itok=iF2p5fft" width="500px;">
        </div>
      </div>
    </div>




    <!-- <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: "Welcome to Finapp. It's going to be awesome"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
  color: #42b983;
}
</style>

<template>
  <div class="container">
    <header class="image-bg-fluid-height">
      <img class="img-responsive img-center" src="" alt="">
    </header>
    <h1 class="center">{{ msg }}</h1>
    <hr>
    <div class="jumbron content center">
      <p>Pancetta tail spare ribs sirloin, bresaola shank ribeye tenderloin ham hock sausage chuck doner beef ribs alcatra meatloaf. Cow pork loin strip steak venison tri-tip beef t-bone. Biltong shankle pig tenderloin, kielbasa spare ribs hamburger meatloaf rump ham tri-tip. Jowl meatball fatback sirloin picanha ham, shoulder tenderloin swine sausage pork bresaola jerky cupim. Pork tail jerky beef ribs short ribs. Beef ribs alcatra meatball, ribeye rump turducken andouille. Pork doner sausage, shank tri-tip prosciutto pork loin turkey pork chop pancetta tenderloin flank ribeye.</p>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-xs-12">
            <img src="http://campusmaps.umn.edu/sites/campusmaps.umn.edu/files/styles/building_photos/public/wbob_150722_8444.jpg?itok=iF2p5fft" width="100%;">
          </div>
          <div class="col-sm-6 col-xs-12">
            <img src="http://campusmaps.umn.edu/sites/campusmaps.umn.edu/files/styles/building_photos/public/wbob_150722_8444.jpg?itok=iF2p5fft" width="100%;">
          </div>
        </div>
      </div>
    </div>
    <h2>Investments</h2>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-xs-12">
          <p>Pancetta tail spare ribs sirloin, bresaola shank ribeye tenderloin ham hock sausage chuck doner beef ribs alcatra meatloaf. Cow pork loin strip steak venison tri-tip beef t-bone. Biltong shankle pig tenderloin, kielbasa spare ribs hamburger meatloaf rump ham tri-tip. Jowl meatball fatback sirloin picanha ham, shoulder tenderloin swine sausage pork bresaola jerky cupim. Pork tail jerky beef ribs short ribs. Beef ribs alcatra meatball, ribeye rump turducken andouille. Pork doner sausage, shank tri-tip prosciutto pork loin turkey pork chop pancetta tenderloin flank ribeye.</p>
        </div>
        <div class="col-sm-6 col-xs-12">
          <img src="http://campusmaps.umn.edu/sites/campusmaps.umn.edu/files/styles/building_photos/public/wbob_150722_8444.jpg?itok=iF2p5fft" width="100%;">
        </div>
      </div>
    </div>
    <hr>
    <Map/>
  </div>
</template>

<script>


export default {
  components: {
    'map': Map,
  },
  name: 'home',
  data () {
    return {
      msg: "Welcome to Firstinvestment.eu",
    }
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}

.footer {
  background-color: orangered;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}
.bg{
  position:absolute;
  z-index:-1;
  width:100%;
  height:100%;
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

  .wrapper{background: url('./img/graph.jpg') no-repeat   center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;}

.image-bg-fluid-height,
.image-bg-fixed-height {
  text-align: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}

.image-bg-fluid-height {
  background: url('./img/graph.jpg') no-repeat center center scroll;
  padding: 100px 0;
}

.image-bg-fixed-height {
  background: url('./img/graph.jpg') no-repeat center center scroll;
  height: 450px;
}

.img-center {
  margin: 0 auto;
}

section {
  padding: 75px 0;
}

.section-heading {
  margin: 30px 0;
  font-size: 4em;
}

.section-lead {
  margin: 30px 0;
}

.section-paragraph {
  margin: 30px 0;
}
.center {
text-align: center;
  margin:10px;
}

footer {
  margin: 50px 0;
}

@media(max-width:768px) {
  section {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .section-heading {
    font-size: 2em;
  }
}

</style>

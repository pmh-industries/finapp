<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <hr>
    <div class="jumbotron content">
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
    <div class="jumbotron content">
      <div class="row">
        <div class="col-sm-6 col-xs-12">
          <h2>Contact Details</h2>
        </div>
        <div class="col-sm-6 col-xs-12">
          <iframe
            width="100%"
            height="400"
            frameborder="0" style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBWxpyEqHQtE3NDZO6YK2jomCpTJCXvxek
              &q=Space+Needle,Seattle+WA" allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'home',
  data () {
    return {
      msg: "Welcome to Finapp. It's going to be awesome",
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

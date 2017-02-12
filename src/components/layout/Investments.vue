<template lang="html">
  <div class="investments">
    <div class="jumbotron content">
      <h2>INVESTMENT PACKAGES</h2>
      <p>Pancetta tail spare ribs sirloin, bresaola shank ribeye tenderloin ham hock sausage chuck doner beef ribs alcatra meatloaf. Cow pork loin strip steak venison tri-tip beef t-bone. Biltong shankle pig tenderloin, kielbasa spare ribs hamburger meatloaf rump ham tri-tip. Jowl meatball fatback sirloin picanha ham, shoulder tenderloin swine sausage pork bresaola jerky cupim. Pork tail jerky beef ribs short ribs. Beef ribs alcatra meatball, ribeye rump turducken andouille. Pork doner sausage, shank tri-tip prosciutto pork loin turkey pork chop pancetta tenderloin flank ribeye.</p>
    </div>
    <div class="footer">
      <div class="arrow-down"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

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

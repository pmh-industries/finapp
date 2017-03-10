<template lang="html">
  <div class="container">
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
</template>

<script>

  export default {}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
    padding: 30px;
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

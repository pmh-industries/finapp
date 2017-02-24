<template lang="html">
  <div class="registration">
    <div class="jumbotron content">
      <h2>INFORMATION ABOUT REGISTRATION</h2>
      <p>Pancetta tail spare ribs sirloin, bresaola shank
        ribeye tenderloin ham hock sausage chuck doner beef
        ribs alcatra meatloaf. Cow pork loin strip steak
        venison tri-tip beef t-bone.
      </p>

      <h1>REGISTER</h1>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">CLICK HERE</a></p>
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

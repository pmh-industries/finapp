<template lang="html">
  <div>
    <nav class="navbar navbar-inverse navbar-no-bg" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">Wizard</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="top-navbar-1">
          <ul class="nav navbar-nav navbar-right">
              <h5>Personal account</h5>
              <hr>
              <li>
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
              <hr>
              <li>
                <router-link to="/account">Account</router-link>
              </li>
              <hr>
              <li>
                <router-link to="/packages">Packages</router-link>
              </li>
              <li>
                  <router-link to="/news">News</router-link>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="css">
</style>



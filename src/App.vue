<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/registration">Registration</router-link>
            </li>
            <li>
              <router-link to="/investments">Investments</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
            <li>
              <router-link to="/dashboard" class="btn btn-success">Personal account</router-link>
              </a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container">

      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    //footer
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
    /*background-color: white;*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 0px;*/
    /*box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);*/
  }

  footer {
    background: #243c4f;
    padding: 60px 0;
  }

  footer p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }

  footer a {
    color: #3ac341;
  }

  footer a:hover {
    color: #3ac341;
  }

  footer .footer-title {
    position: relative;
    font-size: 18px;
    text-transform: uppercase;
    color: white;
  }

  footer .footer-title:after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: #3ac341;
    margin-top: 8px;
  }

  footer .right-border {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  footer .left-border {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 991px) {
    footer .copyright {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 40px;
      text-align: center;
    }

    footer .right-border {
      border-right: none;
    }
  }

  @media (max-width: 767px) {
    footer .right-border {
      border-right: none;
    }

    footer .left-border {
      border-left: none;
    }

    footer .navigation {
      margin-top: 40px;
      border-top: 1px solid white;
    }
  }

  footer .footer-about {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 40px;
  }

  footer .contact-info .single {
    margin: 15px 0;
  }

  footer .contact-info .single i {
    display: block;
    float: left;
    color: #3ac341;
    margin-right: 10px;
    line-height: 22px;
  }

  footer .contact-info .single p {
    margin: 0;
    padding: 0;
    display: block;
    overflow: hidden;
  }

  footer .social-icon {
    margin-top: 40px;
  }

  footer .social-icon li a {
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 5px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  footer .social-icon li a:hover {
    border-color: #3ac341;
    color: #3ac341;
  }

  footer .social-icon li a i {
    line-height: 32px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  footer .navigation li a {
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    line-height: 30px;
    text-decoration: none;
  }

  footer .navigation li a:hover {
    color: #3ac341;
  }

  footer .copyright {
    padding-top: 40px;
  }
</style>

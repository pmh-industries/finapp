<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-login">
          <div class="panel-heading">
            <div class="row">
                <a href="#" class="active" id="register-form-link">Login</a>
            </div>
            <hr>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-12">
                <form id="login-form" action="" method="post" role="form" style="display: block;">
                  <div class="form-group">
                    <input type="text" name="phoneNumber" id="phoneNumber" tabindex="1" class="form-control" placeholder="Phone Number" value="">
                  </div>
                  <div class="form-group">
                    <input type="eMail" name="eMail" id="eMail" tabindex="2" class="form-control" placeholder="E-mail">
                  </div>
                  <div class="form-group">
                    <input type="agentId" name="agentId" id="agentId" tabindex="2" class="form-control" placeholder="Enter ID for your agent">
                  </div>
                  <div class="form-group text-center">
                    <input type="checkbox" tabindex="3" class="" name="remember" id="remember">
                    <label for="remember"> Remember Me</label>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-login" value="Register">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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


<template lang="html">
  <div id="main-wrapper">
    <div id="content-wrapper">

      <div class="navbar-inner col-sm-4">
        <div class="navbar-header">
          <div id="main-menu-inner">
            <div id="menu-content-demo">

            </div>
            <div class="text-bg">
              <span>{{client.surname + " " + client.name}}</span>
            </div>
            <div class="text-bg">
              <span>{{client.account}}</span>
            </div>
            <ul class="navigation">
              <li>
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
              <li>
                <router-link to="/">Account</router-link>
              </li>
              <li>
                <router-link to="/">Profile</router-link>
              </li>
              <li>
                <router-link to="/">Documents</router-link>
              </li>
              <li>
                <router-link to="/">History</router-link>
              </li>
              <li>
                <router-link to="/">Managers</router-link>
                </a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="page-header">
        <h1>Currency rate</h1>
        <div class="row col-sm-8">
          <div class="col-sm-8">
            <p>
              The reference rates of European Central Bank. Usually updated around 16:00 CET
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
            <div class="cell">
        <span>
          <span>EUR / USD : 1 / {{accountEur.status}}</span>
        </span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
            <div class="cell">
        <span>
          USD / EUR : 1 / {{accountUsd.status}}
        </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-header">
      <h3>Account current EUR</h3>
    </div>

    <div class="page-header">
      <div class="col-sm-12">
        <div class="animate-panel">
          <div class="panel-body">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5>{{client.account}}</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>€ {{accountEur.amountIn}}</h3>
                </div>
                <div class="cell">
                  <button type="button" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-arrow-right"></span>
                  </button>
                </div>
              </div>

            </div>

            <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5 class="header-panel-right">AMOUNT IN</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>{{"€" + " " + accountEur.amountIn}}</h3>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5 class="header-panel-right">AMOUNT OUT</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>{{"€" + " " + accountEur.amountOut}}</h3>
                </div>
              </div>
            </div>


            <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5 class="header-panel-right">AMOUNT BLOCKED</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>{{"€" + " " + accountEur.amountBlocked}}</h3>
                </div>
              </div>
            </div>


            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5 class="header-panel-right">AMOUNT INVESTED</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>{{"€" + " " + accountEur.amountInvested}}</h3>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    <div class="page-header">
      <h3>Account current USD</h3>
    </div>

    <div class="page-header">
      <div class="col-sm-12">
        <div class="animate-panel">
          <div class="panel-body">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5>{{client.account}}</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>€ {{accountUsd.amountIn}}</h3>
                </div>
                <div class="cell">
                  <button type="button" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-arrow-right"></span>
                  </button>
                </div>
              </div>

            </div>

            <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5 class="header-panel-right">AMOUNT IN</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>{{"$" + " "+ accountUsd.amountOut}}</h3>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5 class="header-panel-right">AMOUNT OUT</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>{{"$" + " "+ accountUsd.amountOut}}</h3>
                </div>
              </div>
            </div>


            <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5 class="header-panel-right">AMOUNT BLOCKED</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>{{"$" + " "+ accountUsd.amountBlocked}}</h3>
                </div>
              </div>
            </div>


            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="stats-title">
                <h5 class="header-panel-right">AMOUNT INVESTED</h5>
              </div>
              <div class="m-t-xl">
                <div class="cell">
                  <h3>{{"$" + " "+ accountUsd.amountInvested}}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-header">
      <h3>Available Packages</h3>
    </div>


    <div class="stat-panel">
      <div class="stat-row">
        <div class="stat-cell">
          <span class="text-xlg col-sm-12 col-xs-12 col-md-12 col-lg-9">

            <div class="col-sm-4">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="true">
    EUR
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Eur</a></li>
    <li><a href="#">Usd</a></li>
  </ul>
</div>

          </span>
        </div>
        <div class="stat-cell bg-danger">
          <span class="col-sm-9 col-xs-12 col-md-8 col-lg-8">
            <div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="true">
    90
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">90</a></li>
    <li><a href="#">180</a></li>
    <li><a href="#">360</a></li>
    <li><a href="#">480</a></li>
    <li><a href="#">990</a></li>
  </ul>
</div>
          </span>
        </div>
      </div>
    </div>

  </div>

</template>

<script type="x-template" id="template-nav">
  <div>
    <slot>Helo from slot</slot>
  </div>
</script>
<script>
  export default {
    data() {
      return {
        client: {
          name: 'Martin',
          surname: 'Butts',
          account: "1EG23456A7",
          amount: 0,
          investment: 999,
          profit: 666,
          status: 'active',
          price: 7.50,
          amounthOut: 0,
          accountStatus: 22344,
          widthdraw: 200,
          balance: 22144,
        },
        accountEur: {
          status: 1.05,
          amountOut: 0,
          amountIn: 0,
          amountBlocked: 33.30,
          amountInvested: 90
        },
        accountUsd: {
          status: 1.95,
          amountOut: 0,
          amountIn: 0,
          amountBlocked: 5.30,
          amountInvested: 20
        },
      }
    }
  }
</script>

<style lang="css">
  .cell {
    display: table-cell;
    vertical-align: middle;
  }

  h1 {
    margin-top: 0px;
    margin-right: 10px;
  }

  .m-txl {
    margin-top: 33px;
  }

  #main-navbar {
    background: #ff7f7f;
  }

  .panel-body {
    background: #fff;
    border: 1px solid #e4e5e7;
    border-radius: 4px;
    padding: 6px;
    padding-left: 20px;
    position: relative;
    padding-right: 20px;
  }

  #menu-content-demo {
    border-top: none;
    margin-bottom: -47px;
    margin-top: 0;
    padding-top: 66px;
  }

  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 1.42857143;
    color: #555;
  }

  #main-menu-inner {
    width: 240px;
    text-decoration: none;
  }

  li.active {
    text-decoration: none;
  }

  .hpanel .panel-body {
    background: #fff;
    border: 1px solid #e4e5e7;
    border-radius: 4px;
    padding: 6px;
    padding-left: 20px;
    position: relative;
    padding-right: 20px;
  }

  h1 {
    font-size: 23px;
  }
</style>


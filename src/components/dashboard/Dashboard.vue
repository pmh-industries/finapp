<template lang="html">

  <div class="container-fluid dark">
      <div class="col-sm-3 col-lg-2">
        <nav class="navbar navbar-inverse navbar-no-bg" role="navigation">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html">Personal account</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="top-navbar-1">
              <ul class="nav navbar-nav">
                <li>
                  <router-link to="/dashboard">Dashboard</router-link>
                </li>

                <li>
                  <router-link to="/account">Account</router-link>
                </li>

                <li>
                  <router-link to="/packages">Packages</router-link>
                </li>

                <li>
                  <router-link to="/accountDash">Account steps</router-link>
                </li>
                <li>
                  <router-link to="/news">News</router-link>
                </li>
                <li>
                  <router-link to="/news">Profile</router-link>
                </li>
              </ul>
            </div>
        </nav>
      </div>

      <div class="col-sm-9 col-lg-10">
        <div class="row">
          <div class="col-12">
            <h1 class="centered">Currency rate</h1>
            <p class="centered">
              The reference rates of European Central Bank. Usually updated around 16:00 CET
            </p>
          </div>
        </div>
        <div id="row">
          <ul>
            <li v-for="currencies in currency"></li>
          </ul>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="cell">
              <span>EUR / USD : 1 / {{this.eur}}</span>
              <div class="cell">
                <button v-on:click="clicky" class="btn btn-success btn-sm mrgbtn">
                  <span class="glyphicon glyphicon-arrow-right"></span></button>
              </div>
            </div>
          </div>

          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="cell">
              <span>USD / EUR : 1 / {{currency.usd}}</span>
              <div class="cell">
                <button v-on:click="add" class="btn btn-success btn-sm mrgbtn" type="button" >
                  <span class="glyphicon glyphicon-arrow-right"></span></button>
              </div>
            </div>
          </div>
          </div>
        <hr>

        <accounts/>

        <packages/>

      </div>
    </div>
  </div>

</template>



<script>
  import Account from './Account'
  import Packages from './Packages'

  export default {
    components: {
      'accounts': Account,
      'packages':Packages,
    },
    data() {
      return {
        curDol:'',
        currency:['22 $','44 eur'],
        eur:0.99,
        test:"test",
        client: {
          name: 'Martin',
          surname: 'Butts',
          account: "1EG23456A7",
          amount: 0,
          investment: 999,
          profit: 636,
          price: 7.50,
          commission: [10, 12, 15, 16],
          amountOut: 0,
          amountIn: 190,
          amountBlocked:49,
          accountStatus: 22344,
          widthdraw: 200,
          amountInvested: 300,
          balance: 22144,
          days: [365, 720, "3 years"]
        },
        accountEur: {
          account: {
            amountOut: 0,
            amountIn: 190,
            amountBlocked:49,
          },
          yellow: {
            profit: 3338,
            commission: [10, 12, 15, 16],
            days: [365, 720, "3 years"],
            percentMonth: [12,54,53,22]
          },
          standard: {
            profit: 4438,
            commission: [10, 12, 15, 16],
            days: [365, 720, "3 years"],
            percentMonth: [12,54,53,22]
          },
          green: {
            profit: 4238,
            commission: [10, 12, 15, 16],
            days: [365, 720, "3 years"],
            percentMonth: [12,54,53,22]
          },
          exclusive: {
            profit: 4338,
            commission: [10, 12, 15, 16],
            days: [365, 720, "3 years"],
            percentMonth: [12,54,53,22]
          },
          blue: {
            profit: 5238,
            commission: [10, 12, 15, 16],
            days: [365, 720, "3 years"],
            percentMonth: [12,54,53,22]
          }
        }
      }
    },
    methods: {
      clicky: function () {
        console.log("hello"+ this.currency)
        this.currency.push(this.eur)

      },
      add: function (event) {
        console.log("hello form add")

      }
    }
  }
</script>

<style lang="css">

  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 1.42857143;
    color: #555;
  }

  .cell {
    display: table-cell;
    vertical-align: middle;
  }

  h1 {
    margin-top: 0px;
    margin-right: 10px;
  }

  .navbar-brand {
    font-size:15px;
    color:white;
  }

  .space {
    margin-top:10px;
    margin-bottom:10px;
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

  .page-header.centered {
    text-align: center;
    margin-top:20px;
  }
  .stat-cell {
    border-top: 1px solid #6D6D6D !important;
}

  h4.statheader {
    color:limegreen;
    font-weight: 100;
  }
  .stat-row {
    display: table-row !important;
    float: none;
    width: 100%;
  }
  .centered {
    text-align:center;
  }
  #main-menu-inner {
    width: 240px;
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
  .mrgbtn {
    margin-left:5px;
    margin-top:10px;
  }
  h1 {
    font-size: 23px;
  }
  ul.navigation {
    font-size: 15px;
  }
  .navigation, #main-menu {
    padding: 46px 10px 10px;
    border: 1px solid #7ab35a;
  }
  ol, ul {
    margin-top: 0;
    margin-bottom: 9px;
  }

  *, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>

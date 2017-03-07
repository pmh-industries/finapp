<template lang="html">
  <div id="main-wrapper">
    <div id="content-wrapper">
      <div class="navbar-inner col-sm-4">
        <div class="navbar-header">
          <div id="main-menu-inner">
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
                <router-link to="/account">Account</router-link>
              </li>
              <li>
                <router-link to="/packages">Packages</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="page-header">
        <div class="row col-sm-8">
          <div class="col-sm-8 centered">
            <h1 class="centered">Currency rate</h1>
            <p>
              The reference rates of European Central Bank. Usually updated around 16:00 CET
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
            <div class="cell">
        <span>
          <span>EUR / USD : 1 / {{currency.eur}}</span>
        </span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
            <div class="cell">
        <span>
          USD / EUR : 1 / {{currency.usd}}
        </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--imported accounts component-->
    <accounts/>

    <packages/>
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
        currency:{
          usd:1.23,
          eur:0.99
        },
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
    methods:{
      meme: function(name, surname){
        return name + surname
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

  .space {
    margin-top:10px;
    margin-bottom:10px;
  }
  .panel-body.yellow {
    border-top: 5px solid yellow;
  }
  .panel-body.white {
    border-top: 5px solid floralwhite;
  }
  .panel-body.standard {
    border-top: 5px solid lightgray;
  }
  .panel-body.green {
    border-top: 5px solid limegreen;
  }

  .panel-body.blue {
    border-top: 5px solid dodgerblue;
  }
  .panel-body.exclusive {

    border-top: 5px solid #e7e353;
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

  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 1.42857143;
    color: #555;
  }

  .stat-panel {
    background: #fff;
    border-radius: 4px;
    display: table;
    margin-bottom: 22px;
    overflow: hidden;
    position: relative;
    table-layout: fixed !important;
    width: 100%;
    border: 1px solid #c4c6c7;
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
</style>

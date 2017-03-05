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
    <br>

    <div class="page-header centered">
      <br/>
      <h3>Available Packages</h3>
    </div>
  <div class="row">
    <div class="col-md-6 package-active">
      <div class="animate-panel">
        <div class="panel-body standard">
          <div class="stat-panel">
            <div class="stat-row">
          <div class="col-md-3 space">
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">EUR
                <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a href="#">EUR</a></li>
                <li><a href="#">USD</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 space ">
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">90
                <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a href="#">90</a></li>
                <li><a href="#">180</a></li>
                <li><a href="#">360</a></li>
                <li><a href="#">480</a></li>
                <li><a href="#">1500</a></li>
                <li><a href="#">1980</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 space">
              <button class="btn btn-success">BUY</button>
          </div>
          </div>
            <div class="stat-row">

  <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

    <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{accountEur.standard.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        Period days
      </span>
    </div>

    <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{accountEur.standard.commission[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        Commission
      </span>
    </div>

    <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
        <h4 class="statheader">{{'€' + " " + accountEur.standard.profit}}</h4>
      </span><br/>
      <span class="text-xs">
        Profit
      </span>
    </div>
  </div>
               <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

    <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{accountEur.standard.days[0]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERCENT PER MONTH
      </span>
    </div>

    <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{accountEur.standard.commission[0]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERIOD PERCENT
      </span>
    </div>

    <div class="stat-cell col-xs-4 padding-sm no-padding-hr">

      <span class="text-xs">
        <button class="btn btn-default">Info</button>
      </span>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div class="col-md-6 package-active">
        <div class="animate-panel">
          <div class="panel-body exclusive">
            <div class="stat-panel">
              <div class="stat-row">
                <div class="col-md-3 space">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">USD
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">USD</a></li>
                      <li><a href="#">EUR</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-2 space ">


                    <select v-model="selected" class="dropdown-menu">
                      <option>90</option>
                      <option>360</option>
                      <option>480</option>
                      <option>1500</option>
                      <option>1980</option>
                    </select>
                    <span>Selected: {{ selected }}</span>
                </div>
                <div class="col-md-3 space">
                  <button class="btn btn-success">BUY</button>
                </div>
              </div>


              <div class="stat-row">

                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{ accountEur.exclusive.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        Perion days
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
        <h4 class="statheader">{{ accountEur.exclusive.commission[2]}}</h4>
      </span><br/>
      <span class="text-xs">
        Commision
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
        <h4 class="statheader">{{'€' + " " + accountEur.exclusive.profit}}</h4>
      </span><br/>
      <span class="text-xs">
        Profit
      </span>
                  </div>

                </div>

                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{ accountEur.exclusive.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERCENT PER MONTH
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{ accountEur.exclusive.commission[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERIOD PERCENT
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">

      <span class="text-xs">
        <button class="btn btn-default">Info</button>
      </span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="row">

      <div class="col-md-6 package-active">
        <div class="animate-panel">
          <div class="panel-body blue">
            <div class="stat-panel">
              <div class="stat-row">
                <div class="col-md-3 space">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">EUR
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">EUR</a></li>
                      <li><a href="#">USD</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-2 space ">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">90
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">90</a></li>
                      <li><a href="#">180</a></li>
                      <li><a href="#">360</a></li>
                      <li><a href="#">480</a></li>
                      <li><a href="#">1500</a></li>
                      <li><a href="#">1980</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 space">
                  <button class="btn btn-success">BUY</button>
                </div>
              </div>
              <div class="stat-row">

                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{client.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        Period days
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{accountEur.blue.commission[2]}}</h4>
      </span><br/>
      <span class="text-xs">
        Commision
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
        <h4 class="statheader">{{'€' + " " + accountEur.blue.profit}}</h4>
      </span><br/>
      <span class="text-xs">
        Profit
      </span>
                  </div>
                </div>
                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{accountEur.blue.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERCENT PER MONTH
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{accountEur.blue.percentMonth[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERIOD PERCENT
      </span>
                  </div>
                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-xs">
        <button class="btn btn-default">Info</button>
      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 package-active">
        <div class="animate-panel">
          <div class="panel-body white">
            <div class="stat-panel">
              <div class="stat-row">
                <div class="col-md-3 space">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">USD
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">USD</a></li>
                      <li><a href="#">EUR</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-2 space ">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">90
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">90</a></li>
                      <li><a href="#">180</a></li>
                      <li><a href="#">360</a></li>
                      <li><a href="#">480</a></li>
                      <li><a href="#">1500</a></li>
                      <li><a href="#">1980</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 space">
                  <button class="btn btn-success">BUY</button>
                </div>
              </div>
              <div class="stat-row">
                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">
                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{client.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        Perion days
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{client.commission[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        Commision
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
        <h4 class="statheader">{{'€' + " " + client.profit}}</h4>
      </span><br/>
      <span class="text-xs">
        Profit
      </span>
                  </div>

                </div>

                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{client.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERCENT PER MONTH
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{client.commission[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERIOD PERCENT
      </span>
                  </div>
                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-xs">
        <button class="btn btn-default">Info</button>
      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="col-md-6 package-active">
        <div class="animate-panel">
          <div class="panel-body yellow">
            <div class="stat-panel">
              <div class="stat-row">
                <div class="col-md-3 space">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">EUR
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">EUR</a></li>
                      <li><a href="#">USD</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-2 space ">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">90
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">90</a></li>
                      <li><a href="#">180</a></li>
                      <li><a href="#">360</a></li>
                      <li><a href="#">480</a></li>
                      <li><a href="#">1500</a></li>
                      <li><a href="#">1980</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 space">
                  <button class="btn btn-success">BUY</button>
                </div>
              </div>
              <div class="stat-row">

                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{accountEur.yellow.profit}}</h4>
      </span><br/>
      <span class="text-xs">
        Period days
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{accountEur.yellow.commission[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        Commission
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
        <h4 class="statheader">{{'€' + " " + accountEur.yellow.profit}}</h4>
      </span><br/>
      <span class="text-xs">
        Profit
      </span>
                  </div>
                </div>
                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{accountEur.yellow.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERCENT PER MONTH
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{accountEur.yellow.commission[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERIOD PERCENT
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">

      <span class="text-xs">
        <button class="btn btn-default">Info</button>
      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 package-active">
        <div class="animate-panel">
          <div class="panel-body green">
            <div class="stat-panel">
              <div class="stat-row">
                <div class="col-md-3 space">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">USD
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">USD</a></li>
                      <li><a href="#">EUR</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-2 space ">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">90
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">90</a></li>
                      <li><a href="#">180</a></li>
                      <li><a href="#">360</a></li>
                      <li><a href="#">480</a></li>
                      <li><a href="#">1500</a></li>
                      <li><a href="#">1980</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 space">
                  <button class="btn btn-success">BUY</button>
                </div>
              </div>


              <div class="stat-row">

                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{ accountEur.green.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        Perion days
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{ accountEur.green.commission[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        Commision
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
        <h4 class="statheader">{{'€' + " " + accountEur.green.profit}}</h4>
      </span><br/>
      <span class="text-xs">
        Profit
      </span>
                  </div>

                </div>

                <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
      <h4 class="statheader">{{ accountEur.green.days[1]}}</h4>
      </span><br/>
      <span class="text-xs">
        PERCENT PER MONTH
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
      <span class="text-bg">
         <h4 class="statheader">{{ meme(client.surname, client.name)}}</h4>
      </span><br/>
      <span class="text-xs">
        PERIOD PERCENT
      </span>
                  </div>

                  <div class="stat-cell col-xs-4 padding-sm no-padding-hr">

      <span class="text-xs">
        <button class="btn btn-default">Info</button>
      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Account from './Account'

  export default {
    components: {
      'accounts': Account,
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

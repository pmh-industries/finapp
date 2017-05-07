<template lang="html">
<div class="container-fluid">
  <div class="row">
    <div v-for="th in packages">{{th.label}}<br>
      <h2 class="sub-header">{{th.label}}</h2>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>
              <select class="btn btn-default dropdown-toggle">
                <option v-for="part in currency" v-model="currency.value1">
                  {{ part.text }}
                </option>
              </select>
            </th>
            <th>
              90
            </th>
            <th>
              <select class="btn btn-default dropdown-toggle">
                <option v-for="nmb in inv">
                  {{ nmb.text }}
                </option>
              </select>
            </th>
            <th>
              <button class="btn btn-success">BUY</button>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{th.days}}</td>
            <td>{{th.commission}}</td>
            <td>{{th.profit}}</td>
          </tr>
          </tbody>
          <thead>
          <th>Period days</th>
          <th>Commision</th>
          <th>Profit</th>
          </thead>

          <tbody>
          <tr>
            <td>{{th.days}}</td>
            <td>{{th.commission}}</td>
            <td><button class="btn btn-default">Info
            </button></td>
          </tr>
          </tbody>
          <thead>
          <th>Percent per month</th>
          <th>Period Percent</th>
          </thead>

        </table>
        </div>
      </div>
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
        isActive: true,
        hasError: false,
        currency: [
          { value: 1, text: "€", },
          { value: 2, text: "$", },
        ],
        inv: [
          {value:1, text:90,},
          {value:1, text:180, },
          {value:1, text:360},
          {value:1, text:480},
          {value:1, text:1500},
        ],

        packages: {
          yellow: {
            color: "#1E90FF",
            label: "Yellow package",
            currency: "€",
            profit: 3338 + "%",
            commission: 10 + "%",
            days: 365,
            percentMonth: 12 + "%",
            val: 30 + "€"
          },
          standard: {
            label: "Standard package",
            currency: "$",
            profit: 4438 + "%",
            commission: 12 + "%",
            days: 720,
            percentMonth: 54 + "%"
          },
          green: {
            label: "Green package",
            currency: "€",
            profit: 4238 + "%",
            commission: 15 + "%",
            days: 365,
            percentMonth: 54 + "%"
          },
          exclusive: {
            label: "Exlusive package",
            currency: "$",
            profit: 4338 + "%",
            commission: 16 + "%",
            days: 720,
            percentMonth: 100 + "%"
          },
          blue: {
            label: "Blue package",
            currency: "€",
            profit: 5238 + "%",
            commission: 18 + "%",
            days: "3 years",
            percentMonth: 110 + "%"
          },
          orange: {
            label: "Orange package",
            currency: "€",
            profit: 5238 + "%",
            commission: 18 + "%",
            days: "3 years",
            percentMonth: 120 + "%"
          }
        },
      }
    },
    methods:{
    },
    calculations: {

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

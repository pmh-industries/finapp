<template>

  <div class="row">
  <div class="animate-panel">
    <div class="panel-body standard">
      <div class="stat-panel">
        <div class="stat-row">
  <li v-for="th in packages" class="stat-panel"> <br>
    {{th.label}} <br>
    <select class="btn btn-default dropdown-toggle" v-model="selected">
      <option v-for="test in tests" :value="test">{{ test.text }}</option>
    </select>
    <br>
    Currency: {{th.currency}} <br>
    Profit: {{th.profit}} <br>
    Commision: {{th.commission}}<br>
    <br>
    <br>
  </li>
              </div>
            </div>
</div>
      </div>
    </div>
  </div>
</div>
</template>



<script>
  export default {
    pack: "#packages",
    box: ".col-md-6 package-active",
    animate: ".animate-panel",
    panelBody: ".panel-body",
    accountNumber: ".col-lg-3 col-md-4 col-sm-6 col-xs-12",


    data() {
      return {
        tests: [
          { value: 1, text: '€' },
          { value: 2, text: '$' },
        ],
        packages: {
          yellow: {
            label: "Yellow package",
            currency: "€",
            profit: 3338,
            commission: 10,
            days: 365,
            percentMonth: 12
          },
          standard: {
            label: "Standard package",
            currency: "$",
            profit: 4438,
            commission: 12,
            days: 720,
            percentMonth:  54
          },
          green: {
            label: "Green package",
            currency: "€",
            profit: 4238,
            commission: 15,
            days: 365,
            percentMonth: 54
          },
          exclusive: {
            label: "Exlusive package",
            currency: "$",
            profit: 4338,
            commission: 16,
            days: 720,
            percentMonth: 100
          },
          blue: {
            label: "Blue package",
            currency: "€",
            profit: 5238,
            commission: 18,
            days: "3 years",
            percentMonth: 120
          }
        },
      }
    },
    methods:{
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

  .dropdownMenu{
    background:green;
    color:white;
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

<template>

<div class="row">
  <div class="packages" :class = {center:true}>

    <br>

    <div class="page-header centered">
      <h3 >Available Packages</h3>
    </div>

      <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 panel" v-for="th in packages">{{th.label}}<br>


          <div class="col-lg-3 col-md-4 col-sm-2 col-xs-2">
            <select class="btn btn-default dropdown-toggle">
          <option v-for="part in currency" v-model="currency.value1">
            {{ part.text }}
          </option>
        </select>
            </div>

          <div class="col-lg-3 col-md-4 col-sm-12 col-xs-2">
            <h4 class="text">90</h4>
          </div>

        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-2 ">
          <select class="btn btn-default dropdown-toggle">
            <option v-for="nmb in inv">
              {{ nmb.text }}
            </option>
          </select>
        </div>

          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-2">
            <button class="btn btn-success">BUY</button>
          </div>

        <br>

        <div class="stat-row">

          <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

            <div class="stat-cell col-xs-4 col-md-4 padding-sm no-padding-hr">
              <span class="text-bg"></span>
              <h4 class="statheader"><span class="text-bg">{{th.days}}</span></h4><br>
              <span class="text-xs">Period days</span>
            </div>
            <div class="stat-cell col-xs-4 col-md-4 padding-sm no-padding-hr">
              <span class="text-bg"></span>
              <h4 class="statheader"><span class="text-bg">{{th.commission}}</span></h4><br>
              <span class="text-xs">Commision</span>
            </div>
            <div class="stat-cell col-xs-4 col-md-4 padding-sm no-padding-hr">
              <span class="text-bg"></span>
              <h4 class="statheader"><span class="text-bg">{{th.profit}}</span></h4><br>
              <span class="text-xs">Profit</span>
            </div>
          </div>


          <div class="stat-counters bg-default bg-def no-border-b no-padding text-center">

          <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
            <span class="text-bg"></span>
            <h4 class="statheader"><span class="text-bg">{{th.percentMonth}}</span></h4><br>
            <span class="text-xs">Percent per month</span>
          </div>
          <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
            <span class="text-bg"></span>
            <h4 class="statheader"><span class="text-bg">{{th.profit}}</span></h4><br>
            <span class="text-xs">Period Percent</span>
          </div>
          <div class="stat-cell col-xs-4 padding-sm no-padding-hr">
            <span class="text-xs"><button class="btn btn-default"><span class="text-xs">Info</span></button></span>
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
  .cell {
    display: table-cell;
    vertical-align: middle;
  }
  h1 {
    margin-top: 0px;
    margin-right: 10px;
  }
  .animate-panel{
    background: #21273a;
  }
  .panel-body {
    background: #fff;
    border: 1px solid #e4e5e7;
    border-radius: 4px;
  }
  .page-header.centered {
    text-align: center;
    margin-top:20px;
  }
  .stat-cell {
    border-top: 1px solid #6D6D6D !important;

  }

  h4.statheader {
    color: #37b34e;
    font-weight: 300;
  }
  h2.statheader {
    color: #37b34e;
    font-weight: 300;
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

  .panel {
    background: #fff;
    border-radius: 4px;
    display: table;
    margin-bottom: 22px;
    overflow: hidden;
    position: relative;
    table-layout: fixed !important;
    border: 1px solid #c4c6c7;
  }
  h1 {
    font-size: 23px;
  }
</style>

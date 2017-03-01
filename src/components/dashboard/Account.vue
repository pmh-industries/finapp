<template>

  <ul id="example-1">
    <li v-for="item in items">
<div class="page-header">
  <div class="col-sm-12">
    <div class="animate-panel">
      <div class="panel-body">

        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div class="stats-title">
            <h5>{{items.accountEur.num}}</h5>
          </div>
          <div class="m-t-xl">
            <div class="cell">
              <h3>{{"€" + " " + items.accountEur.amount}}</h3>
            </div>
            <div class="cell">
              <button type="button" class="btn btn-success btn-sm mrgbtn">
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
              <h3>{{"€" + " " + items.accountEur.amountIn}}</h3>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
          <div class="stats-title">
            <h5 class="header-panel-right">AMOUNT OUT</h5>
          </div>
          <div class="m-t-xl">
            <div class="cell">
              <h3>{{"€" + " " + items.accountEur.amountOut}}</h3>
            </div>
          </div>
        </div>


        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
          <div class="stats-title">
            <h5 class="header-panel-right">AMOUNT BLOCKED</h5>
          </div>
          <div class="m-t-xl">
            <div class="cell">
              <h3>{{"€" + " " + items.accountEur.amountBlock}}</h3>
            </div>
          </div>
        </div>


        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div class="stats-title">
            <h5 class="header-panel-right">AMOUNT INVESTED</h5>
          </div>
          <div class="m-t-xl">
            <div class="cell">
              <h3>{{"€" + " " + items.accountEur.amountInv}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </li>
    </ul>

</template>

<script>
  export default {
    data() {
      return {
        items: {
          accountEur: {
            num: '22A333E',
            amount: 399,
            amountIn: 0,
            amountOut: 190,
            amountBlock: 0,
            amountInv: 449
          },
          accountDol: {
            accountNum: '15A363E',
            amount: 400,
            amountIn: 0,
            amountOut: 290,
            amountBlock: 0,
            amountInvested: 139
          },
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


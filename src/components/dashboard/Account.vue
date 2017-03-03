<template>

  <div id="acc">
    <ul>
    <li v-for="item in items">

      <div class="accountBox">
        <br>
        <h1 class="accountHeader">Account current EUR</h1>
        <br>
        <div class="col-sm-12">
          <div class="animate-panel">
            <div class="panel-body">

              <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="stats-title">
                  <h5>{{item.accountNum}}</h5>
                </div>
                <div class="m-t-xl">
                  <div class="cell">
                    <h3>{{"€" + " " + item.amountE}}</h3>
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
                    <h3>{{"€" + " " + item.amountInE}}</h3>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                <div class="stats-title">
                  <h5 class="header-panel-right">AMOUNT OUT</h5>
                </div>
                <div class="m-t-xl">
                  <div class="cell">
                    <h3>{{"€" + " " + item.amountOutE}}</h3>
                  </div>
                </div>
              </div>


              <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                <div class="stats-title">
                  <h5 class="header-panel-right">AMOUNT BLOCKED</h5>
                </div>
                <div class="m-t-xl">
                  <div class="cell">
                    <h3>{{"€" + " " + item.amountBlockE}}</h3>
                  </div>
                </div>
              </div>


              <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="stats-title">
                  <h5 class="header-panel-right">AMOUNT INVESTED</h5>
                </div>
                <div class="m-t-xl">
                  <div class="cell">
                    <h3>{{"€" + " " + item.amountInvE}}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accountBox">
        <br/>
        <h1 class="accountHeader">Account current $</h1>
        <br/>
        <div class="col-sm-12">
          <div class="animate-panel">
            <div class="panel-body">

              <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="stats-title">
                  <h5>{{item.accountNum$}}</h5>
                </div>
                <div class="m-t-xl">
                  <div class="cell">
                    <h3>{{"$" + " " + item.amount$}}</h3>
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
                    <h3>{{"$" + " " + item.amountIn$}}</h3>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                <div class="stats-title">
                  <h5 class="header-panel-right">AMOUNT OUT</h5>
                </div>
                <div class="m-t-xl">
                  <div class="cell">
                    <h3>{{"$" + " " + item.amountOut$}}</h3>
                  </div>
                </div>
              </div>


              <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                <div class="stats-title">
                  <h5 class="header-panel-right">AMOUNT BLOCKED</h5>
                </div>
                <div class="m-t-xl">
                  <div class="cell">
                    <h3>{{"$" + " " + item.amountBlock$}}</h3>
                  </div>
                </div>
              </div>


              <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="stats-title">
                  <h5 class="header-panel-right">AMOUNT INVESTED</h5>
                </div>
                <div class="m-t-xl">
                  <div class="cell">
                    <h3>{{"$" + " " + item.amountInv$}}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
  </div>
</template>



<script>
  export default {
    acc: "#acc",
    data() {
      return {
        items: [
          { accountNum: '22A333E',
            amountE: 399,
            amountInE: 0,
            amountOutE: 190,
            amountBlockE: 0,
            amountInvE: 449,
            accountNum$: '15A363E',
            amount$: 400,
            amountIn$: 0,
            amountOut$: 290,
            amountBlock$: 12,
            amountInv$: 139}
        ]
      }
    },
    methods:{
    }
  }
</script>

<style lang="css">
  .accountBox {
    margin: 10px;
  }

  .cell {
    display: table-cell;
    vertical-align: middle;
  }

  ul {
    list-style-type: none;
  }

  h1 {
    margin-top: 0px;
    margin-right: 10px;
  }

.accountHeader {
  text-align: center;
}
#acc {
 font-color:green;
}
  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 1.42857143;
    color: #555;
  }

  .col-sm-12 {
    margin-bottom: 20px;
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
  .mrgbtn {
    margin-left:5px;
    margin-top:10px;
  }
  h1 {
    font-size: 23px;
  }
</style>


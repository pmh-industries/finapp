<template lang="html">
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-2 sidebar navbar navbar-inverse navbar-no-bg">
      <ul class="nav nav-sidebar">
        <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Export</a></li>
      </ul>
      <ul class="nav nav-sidebar">
        <li><a href="">Nav item</a></li>
        <li><a href="">Nav item again</a></li>
        <li><a href="">One more nav</a></li>
        <li><a href="">Another nav item</a></li>
        <li><a href="">More navigation</a></li>
      </ul>
      <ul class="nav nav-sidebar">
        <li><a href="">Nav item again</a></li>
        <li><a href="">One more nav</a></li>
        <li><a href="">Another nav item</a></li>
      </ul>
    </div>
    <div class="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-1 main">
      <h1 class="page-header">Dashboard</h1>

      <div class="row placeholders">
        <div class="col-xs-6 col-sm-3 placeholder">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
          <h4>Label</h4>
          <span class="text-muted">Something else</span>
        </div>
        <div class="col-xs-6 col-sm-3 placeholder">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
          <h4>Label</h4>
          <span class="text-muted">Something else</span>
        </div>
        <div class="col-xs-6 col-sm-3 placeholder">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
          <h4>Label</h4>
          <span class="text-muted">Something else</span>
        </div>
        <div class="col-xs-6 col-sm-3 placeholder">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
          <h4>Label</h4>
          <span class="text-muted">Something else</span>
        </div>
      </div>

      <h2 class="sub-header">Section title</h2>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
          </tr>
          <tr>
            <td>1,002</td>
            <td>amet</td>
            <td>consectetur</td>
            <td>adipiscing</td>
            <td>elit</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>Integer</td>
            <td>nec</td>
            <td>odio</td>
            <td>Praesent</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>libero</td>
            <td>Sed</td>
            <td>cursus</td>
            <td>ante</td>
          </tr>
          <tr>
            <td>1,004</td>
            <td>dapibus</td>
            <td>diam</td>
            <td>Sed</td>
            <td>nisi</td>
          </tr>
          <tr>
            <td>1,005</td>
            <td>Nulla</td>
            <td>quis</td>
            <td>sem</td>
            <td>at</td>
          </tr>
          <tr>
            <td>1,006</td>
            <td>nibh</td>
            <td>elementum</td>
            <td>imperdiet</td>
            <td>Duis</td>
          </tr>
          <tr>
            <td>1,007</td>
            <td>sagittis</td>
            <td>ipsum</td>
            <td>Praesent</td>
            <td>mauris</td>
          </tr>
          <tr>
            <td>1,008</td>
            <td>Fusce</td>
            <td>nec</td>
            <td>tellus</td>
            <td>sed</td>
          </tr>
          <tr>
            <td>1,009</td>
            <td>augue</td>
            <td>semper</td>
            <td>porta</td>
            <td>Mauris</td>
          </tr>
          <tr>
            <td>1,010</td>
            <td>massa</td>
            <td>Vestibulum</td>
            <td>lacinia</td>
            <td>arcu</td>
          </tr>
          <tr>
            <td>1,011</td>
            <td>eget</td>
            <td>nulla</td>
            <td>Class</td>
            <td>aptent</td>
          </tr>
          <tr>
            <td>1,012</td>
            <td>taciti</td>
            <td>sociosqu</td>
            <td>ad</td>
            <td>litora</td>
          </tr>
          <tr>
            <td>1,013</td>
            <td>torquent</td>
            <td>per</td>
            <td>conubia</td>
            <td>nostra</td>
          </tr>
          <tr>
            <td>1,014</td>
            <td>per</td>
            <td>inceptos</td>
            <td>himenaeos</td>
            <td>Curabitur</td>
          </tr>
          <tr>
            <td>1,015</td>
            <td>sodales</td>
            <td>ligula</td>
            <td>in</td>
            <td>libero</td>
          </tr>
          </tbody>
        </table>
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
      mrgbtn: function (event) {
        console.log("hello from console")
//        if (event) {
//          alert(event.target.tagName)
//        }
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
  body{
    background: #21273a;
    color: #f5f5f5;
  }
  .dark {
    background: #21273a;
    color: #e6e6e6;
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

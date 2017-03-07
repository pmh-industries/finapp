<template>
    <ul>
      <li v-for="acc in accounts">
        <div class="accountBox">
          <br>
          <h1 class="accountHeader">Account current EUR</h1><br>
          <div class="col-sm-12" >
            <div class="animate-panel">
              <div class="panel-body">
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="stats-title">
                    <h5>{{acc.account}}</h5>
                  </div>
                  <div class="m-t-xl">
                    <div class="cell">
                      <h3 v-if="show">{{acc.amount}}</h3>
                    </div>
                    <div class="cell">
                      <button class="btn btn-success btn-sm mrgbtn" type="button"><span class="glyphicon glyphicon-arrow-right"></span></button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                  <div class="stats-title">
                    <h5 class="header-panel-right">AMOUNT IN</h5>
                  </div>
                  <div class="m-t-xl">
                    <div class="cell">
                      <h3>{{acc.amountIn}}</h3>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                  <div class="stats-title">
                    <h5 class="header-panel-right">AMOUNT OUT</h5>
                  </div>
                  <div class="m-t-xl">
                    <div class="cell">
                      <h3>{{acc.amountOut}}</h3>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                  <div class="stats-title">
                    <h5 class="header-panel-right">AMOUNT BLOCKED</h5>
                  </div>
                  <div class="m-t-xl">
                    <div class="cell">
                      <h3>{{acc.amountBlock}}</h3>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="stats-title">
                    <h5 class="header-panel-right">AMOUNT INVESTED</h5>
                  </div>
                  <div class="m-t-xl">
                    <div class="cell">
                      <h3>{{acc.amountInv}}</h3>
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
    acc: "#acc",
    data() {
      return {
        show: true,
        accounts: {
          accountEur: {
            account:"3AE3443ULLERW",
            amount:399 + "€",
            amountOut:190 + "€",
            amountInv: 449 + "€",
            amountBlock: 60 + "€",
            amountIn: 555 + "€"
          },
          accountDol: {
            account:"3AE3443ULLERW",
            amount:"$" + 599,
            amountOut:"$" + 90,
            amountIn: "$" + 4349,
            amountBlock: "$" + 90,
            amountInv: "$" + 5000
          },
        }
      }
    },
    methods:{
      getPosts: function() {
        var that = this
        $.ajax({
          url: 'https://jsonplaceholder.typicode.com/posts',
          method: 'GET'
        }).then(function (response) {
          if(response.error) {
            console.err("There was an error " + response.error);
          } else {
            console.log(response.posts);
            this.posts = response.posts
          }
        }).catch(function (err) {
          console.error(err);
        });
      }
    },
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

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>


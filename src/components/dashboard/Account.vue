<template>
  <div class="container-fluid">
  <div class="row">
    <div class="packages" v-bind:class = {center:true}>
      <div v-for="acc in accounts">
        <h4 class="sub-header">Account current {{acc.currency}}</h4>
        <div class="table-responsive">
          <table class="table table-hover">

            <thead>
            <tr>
              <th>{{acc.account}}</th>
              <th>Amount In</th>
              <th>Amount Out</th>
              <th>Amount Blocked</th>
              <th>Amount Invested</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>{{acc.amount}}</td>
              <td>{{acc.amountIn}}</td>
              <td>{{acc.amountOut}}</td>
              <td>{{acc.amountBlock}}</td>
              <td>{{acc.amountInv}}</td>
            </tr>
            </tbody>

          </table>
        </div>
      </div>

    </div>
    <hr>
    </div>
    </div>

</template>

<script>
  export default {
    acc: "#acc",
    data() {
      return {
        show: true,
        accounts: {
          accountEur: {
            currency: "EUR",
            account:"3AE3443ULLERW",
            amount:399 + "€",
            amountOut:190 + "€",
            amountInv: 449 + "€",
            amountBlock: 60 + "€",
            amountIn: 555 + "€"
          },
          accountDol: {
            currency: "Dollars",
            account:"3AE3443ULLERW",
            amount:"$" + 599,
            amountOut:"$" + 90,
            amountIn: "$" + 4349,
            amountBlock: "$" + 90,
            amountInv: "$" + 5000
          },
        },
        selectOptions: [
          { text: 'Male', value: 'male' },
          { text: 'Female', value: 'female'}
        ]
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

  .center {
    text-align: center;
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
  .animate-panel{
    background: #21273a;
  }
</style>


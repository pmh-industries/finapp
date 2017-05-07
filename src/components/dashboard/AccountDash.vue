<template>
  <div id="rootwizard">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="container">
          <ul>
            <li><a href="#tab1" data-toggle="tab">First</a></li>
            <li><a href="#tab2" data-toggle="tab">Second</a></li>
            <li><a href="#tab3" data-toggle="tab">Third</a></li>
            <li><a href="#tab4" data-toggle="tab">Forth</a></li>
            <li><a href="#tab5" data-toggle="tab">Fifth</a></li>
            <li><a href="#tab6" data-toggle="tab">Sixth</a></li>
            <li><a href="#tab7" data-toggle="tab">Seventh</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div class="tab-pane" id="tab1">
        1
      </div>
      <div class="tab-pane" id="tab2">
        2
      </div>
      <div class="tab-pane" id="tab3">
        3
      </div>
      <div class="tab-pane" id="tab4">
        4
      </div>
      <div class="tab-pane" id="tab5">
        5
      </div>
      <div class="tab-pane" id="tab6">
        6
      </div>
      <div class="tab-pane" id="tab7">
        7
      </div>
      <ul class="pager wizard">
        <li class="previous first" style="display:none;"><a href="#">First</a></li>
        <li class="previous"><a href="#">Previous</a></li>
        <li class="next last" style="display:none;"><a href="#">Last</a></li>
        <li class="next"><a href="#">Next</a></li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    components: {

    },
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
</style>


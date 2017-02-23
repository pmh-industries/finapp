
<template lang="html">

<div class="container">
  <section class="col-xs-4 one">

    <h3 class="dashTitle">Profile</h3>
    <img v-bind:src="client.image" />
    <br />
    <h5>
      Name:
    <span>{{client.name +  " " + client.surname}}</span>
      </h5>
    <h5>
      Acount number:
    <span>{{accounts.number1}}</span>
    </h5>
    <h5>
      Investment:
    <span>{{client.investment }}</span>
    </h5>
    <h5>
      Profit:
    <span>{{client.profit}}</span>
    </h5>
  </section>


  <section class="col-xs-4 two">
    <h3 class="dashTitle">Status</h3>
    <br />
    <h5>
      Account status:
    <span>{{status.accountStatus}}</span>
      </h5>
    <h5>
      Acount number:
    <span>{{total}}</span>
    </h5>
  </section>

  <section class="col-xs-4 three">

    <h3 class="dashTitle">Accounts</h3>
    <h5>
      Account:

    <span>{{accounts.number1}}</span>
      </h5>
    <h5>
      Acount balancer:
    <span>{{accounts.number2}}</span>
    </h5>
    <h5>
      Investment:
    <span>{{accounts.number3}}</span>
    </h5>
    <h5>
      Account balance:
    <span>{{accounts.balance3}}</span>
    </h5>
  </section>

</div>

</template>


<script>
  export default {
    data() {
      return {
        client: {
          name: 'Martin',
          surname: 'Butts',
          image: 'http://lorempixel.com/100/50/sports/1/',
          account: 1234567,
          investment: 999,
          profit: 666,
          status: 'active',
          price: 7.50
        },
        status: {
          accountStatus:22344,
          widthdraw:200,
          balance: 22144,
          investment: 998,
          profit: 667,
          price:6.50
        },
        accounts: {
          number1:44456563455,
          balance1: 33455,
          number2:445665765777,
          balance2: 4434234,
          number3:4444442263455,
          balance3:443,
          number4:4456534345777,
          balance4:5522
        },
      }
    }
  }
</script>

<style lang="css">

  section.col-xs-4.one{
    background: mediumseagreen;
    margin-bottom:5px;
  }
  section.col-xs-4.two {
    background: #718fb3;
    margin-bottom:5px;
  }
  section.col-xs-4.three {
    background: #b36757;
    margin-bottom:5px;
  }
  .dashTitle {
    color: white;
  }
</style>


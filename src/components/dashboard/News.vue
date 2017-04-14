<template lang="html">
  <div id="root">
   <button>
{{test}}
   </button>
      {{currency}}
    </div>
</template>

<script>
    import news from './News'
    export default {
        data() {
            el:"#root"
            return {
                curDol:'',
                currency:['22 $','44 eur'],
                eur:0.99,
                test:"test",
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
        methods: {
            clicky: function () {
                console.log("hello"+ this.currency)
                this.currency.push(this.eur)

            },
            add: function (event) {
                console.log("hello form add")

            }
        }
    }
</script>

<style lang="css">
</style>



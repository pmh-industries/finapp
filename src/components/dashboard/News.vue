<template lang="html">
    <div id="root">

        <div v-for="th in curr">
        <button v-on:click="cash" class="btn-success" type="button">
            {{th.title}}
        </button>

        <p>{{th.num}}</p>
        <p>{{th.num}}</p>
        </div>
        <button v-on:click="cash2" class="btn-success" type="button">{{title}}</button>
        <h2 v-model= cash></h2>

            <div v-for="th in curr">
                <button v-on:click="cash" class="btn-success" type="button">{{title}}</button>
                <button v-on:click="cash2" class="btn-success" type="button">{{title}}</button>
<h4 v-model="cash">{{dol}}</h4>
            </div>
        </div>
</template>

<script>
    import _ from 'lodash'
    import news from './News'
    export default {
        data() {
            el:"#root"
            return {
                mess: "EUR / USD : 1",
                curr: {
                    usd: {
                        num:33,
                        title:"dolla",
                        color: "commision",
                        label: "Yellow package",
                        currency: "€",
                        profit: 3338 + "%",
                        commission: 10 + "%",
                        days: 365,
                        percentMonth: 12 + "%",
                        val: 30 + "€"
                    },
                    eur: {
                        num:2,
                        title:"eur",
                        color: "commision",
                        label: "Yellow package",
                        currency: "€",
                        profit: 3338 + "%",
                        commission: 10 + "%",
                        days: 365,
                        percentMonth: 12 + "%",
                        val: 30 + "€"
                    },
                },
                curDol:'',
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
            },
            cash: function (event){
                console.log(this.curr.usd.num)
                var res = this.curr.usd.num
                return res

            },
            cash2: function (event){
                console.log(this.curr.eur.num)
                return this.curr.eur.num
            }

        },

        computed: {
            revMes() {
                return this.title.split('').reverse().join('')
            },
            capitalizedMessage() {
                return this.tasks.map(_.capitalize)
            }


        }
    }
</script>

<style lang="css">
</style>



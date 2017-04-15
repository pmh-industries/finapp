<template lang="html">
    <div id="root">
        <button v-on:click="complTskEur">
to eur
        </button>
        <ul>
            <li v-for="th in curr" v-text="th.color" v-show="isVisible">

        </li>
        </ul>

            <article v-show="true">
                this is the srticle
            <button type='btn' @click="hideIt" class="close">x</button>
            </article>
        <hr>
        <h4>all </h4>
        <ul>
            <li v-for="x in btns" v-text="x.description">

            </li>

        </ul>
        <hr>
        <h4>eur</h4>
        <ul>
            <li v-for="x in complTskEur" v-text="x.description">
            <button>
                change to eur

                </button>

            <h1>{{btns}}</h1>

            </li>
        </ul>

<h1>heloo</h1>
        </div>

        <!--<button v-on:click="add" class="btn-success" type="button">-->
            <!--Chnge to dollars-->
            <!--</button>-->
        <!--<button v-on:click="mad" class="btn-success" type="button">-->
            <!--Change to euros-->
        <!--</button>-->
        <!--<p>{{eur}}{{dol}}</p>-->
<!--<br>-->
        <!--<button v-on:click="mad" class="btn-success" type="button">-->
            <!--New approach-->
        <!--</button>-->
        <!--<p>{{dol}}</p>-->

        <!--<hr>-->

        <!--<h1>hello</h1>-->
        <!--<ul>-->

        <!--<li v-for="x in butns" v-if="x.completed" v-text="x.description">-->
        <!--<h1>Hello {{eur}}</h1>-->

<!--</li>-->
        <!--</ul>-->
        <!--<hr>-->

        <!--<div v-for="th in curr">-->
        <!--<button v-on:click="cash" class="btn-success" type="button">-->
           <!--change stuff {{th.title}}-->
        <!--</button>-->
        <!--<p>cash {{curr.usd.num}}  {{curr.usd.title}}</p>-->
        <!--<p>{{th.num}}</p>-->
            <!--<h1>v</h1>-->
        <!--</div>-->
        <!--</div>-->
</template>

<script>
    import _ from 'lodash'
    import news from './News'
    export default {
        data() {
            el:"#root"
            return {
                isVisible: true,
                eur: 33,
                dol: "USD / EUR : 1",
                btns: [
                    {description: "USD / EUR : 1", usd: true},
                    {description: "EUr / USD : 1", eur: false},
                ],
                curr: {
                    usd: {
                        completed: true,
                        num: 33,
                        title: "dolla",
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
                        completed: false,
                        num: 2,
                        title: "eur",
                        color: "commision",
                        label: "Yellow package",
                        currency: "€",
                        profit: 3338 + "%",
                        commission: 10 + "%",
                        days: 365,
                        percentMonth: 12 + "%",
                        val: 30 + "€"
                    }
                },
            }
        },

        methods: {
            clicky: function () {
                console.log("hello"+ this.currency)
                this.currency.push(this.eur)

            },
            add: function (event) {
                console.log("hello form dollars")
                this.eur
            },
            mad: function (event) {
                console.log("hello form eur")
                this.dol
            },
            cash: function (event){
                console.log(this.curr.usd.num)
                this.curr.usd.num = this.curr.eur.num

            },
            cash2: function (event){
                console.log(this.curr.eur.num)
                this.curr.eur.num = this.curr.usd.num
            },
            hideIt(){
                this.isVisible = !true
            }


        },

        computed: {
            revMes() {
                return this.title.split('').reverse().join('')
            },
            capitalizedMessage() {
                return this.tasks.map(_.capitalize)
            },
            complTskEur(){
                return this.btns.filter(btn => ! btn.usd)
            }

        }
    }
</script>

<style lang="css">
</style>



<template>
    <div class="ReimbursementDetail_body">
        <nav-header title="还款明细" :showLeft=true :showImg=false></nav-header>

        <div class="item_select">
            <span @click="show_first" id="select_1">
                    还款明细
                </span>
            <span @click="show_second" id="select_2">
                    还款计划
                </span>
            <span @click="show_third" id="select_3">
                    逾期明细
                </span>
        </div>

        <!-- 还款明细-->
        <div v-if="show_item === 'index_first'">
            <div class="ReimbursementDetail_title">
                <p>已还款金额(元)</p>
                <p>{{bal}}</p>
                <div class="_bal">
                    <div>
                        <p>本金(元)</p>
                        <p>￥789,678.00</p>
                    </div>
                    <span class="line_vertical"></span>
                    <div>
                        <p>利息(元)</p>
                        <p>￥40,000.00</p>
                    </div>
                    <span class="line_vertical"></span>
                    <div>
                        <p>罚息(元)</p>
                        <p>￥0.00</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content_title">
                    <span>期数</span>
                    <span>还款日期</span>
                    <span>已还金额(元)</span>
                </div>
                <div v-for="item in bal_detail">
                    <div class="content_item">
                        <span>{{item.id}}</span>
                        <span>{{item.time}}</span>
                        <span>{{item.bal}}</span>
                        <img src="../../assets/btn_drop_down.png" alt="">
                    </div>
                    <p class="line"></p>
                </div>
            </div>
        </div>

        <!--还款计划 -->
        <div v-else-if="show_item === 'index_second'">
            <div class="ReimbursementDetail_title">
                <p>已还款金额(元)</p>
                <p>{{bal}}</p>
                <div class="_bal">
                    <div>
                        <p>本金(元)</p>
                        <p>￥19，321.00</p>
                    </div>
                    <span class="line_vertical"></span>
                    <div>
                        <p>利息(元)</p>
                        <p>￥7573.00</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content_title">
                    <span>期数</span>
                    <span>还款日期</span>
                    <span>已还金额(元)</span>
                </div>
                <div v-for="item in bal_plan">
                    <div class="content_item">
                        <span>{{item.id}}</span>
                        <span>{{item.time}}</span>
                        <span>{{item.bal}}</span>
                        <img src="../../assets/btn_drop_down.png" alt="">
                    </div>
                    <p class="line"></p>
                </div>
            </div>
        </div>

        <!--逾期明细 -->
        <div v-else="show_item === 'index_third'">
            <div class="ReimbursementDetail_title">
                <p>已还款金额(元)</p>
                <p>{{bal}}</p>
                <div class="_bal">
                    <div>
                        <p>本金(元)</p>
                        <p>￥3375.00</p>
                    </div>
                    <span class="line_vertical"></span>
                    <div>
                        <p>利息(元)</p>
                        <p>￥2500.00</p>
                    </div>
                    <span class="line_vertical"></span>
                    <div>
                        <p>罚息(元)</p>
                        <p>￥0.00</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content_title">
                    <span>期数</span>
                    <span>还款日期</span>
                    <span>已还金额(元)</span>
                </div>
                <div v-for="item in bal_time_limit">
                    <div class="content_item">
                        <span>{{item.id}}</span>
                        <span>{{item.time}}</span>
                        <span>{{item.bal}}</span>
                        <img src="../../assets/btn_drop_down.png" alt="">
                    </div>
                    <p class="line"></p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import Vue from 'vue';
    import navHeader from '../../components/nav-header.vue';
    export default {
        name: 'ReimbursementDetail',
        data () {
            return {
                bal:this.$route.query.bal,
                bal_detail:[
                    {id:'36',time:'2016-12-16',bal:'￥5875.00'},
                    {id:'36',time:'2016-11-16',bal:'￥5875.00'},
                    {id:'36',time:'2016-10-16',bal:'￥5875.00'},
                    {id:'36',time:'2016-09-16',bal:'￥5875.00'},
                    {id:'36',time:'2016-08-16',bal:'￥5875.00'},
                    {id:'36',time:'2016-07-16',bal:'￥5875.00'},
                    {id:'36',time:'2016-06-16',bal:'￥5875.00'},
                ],
                bal_plan:[
                    {id:'36',time:'2016-12-16',bal:'￥5875.00'},
                ],
                bal_time_limit:[
                    {id:'36',time:'2016-12-16',bal:'￥5875.00'},
                    {id:'36',time:'2016-11-16',bal:'￥5875.00'},
                    {id:'36',time:'2016-10-16',bal:'￥5875.00'},
                ],
                show_item:"index_first",
            }
        },
        methods:{
            show_first(){
                this.show_item = "index_first";
                this.showSelect();
            },
            show_second(){
                this.show_item = "index_second";
                this.showSelect();
            },
            show_third(){
                this.show_item = "index_third";
                this.showSelect();
            },
            showSelect(){
                var select_1 = document.getElementById("select_1");
                var select_2 = document.getElementById("select_2");
                var select_3 = document.getElementById("select_3");
                if(this.show_item === "index_first"){
                    select_1.style.color = "orange";
                    select_1.style.borderBottom = "3px solid orange";
                    select_1.style.height = "0.4rem";

                    select_2.style.color = "black";
                    select_2.style.borderBottom = "none";

                    select_3.style.color = "black";
                    select_3.style.borderBottom = "none";
                }else if(this.show_item === "index_second"){
                    select_2.style.color = "orange";
                    select_2.style.borderBottom = "3px solid orange";
                    select_2.style.height = "0.4rem";

                    select_1.style.color = "black";
                    select_1.style.borderBottom = "none";

                    select_3.style.color = "black";
                    select_3.style.borderBottom = "none";
                }else if(this.show_item === "index_third"){
                    select_3.style.color = "orange";
                    select_3.style.borderBottom = "3px solid orange";
                    select_3.style.height = "0.4rem";

                    select_1.style.color = "black";
                    select_1.style.borderBottom = "none";

                    select_2.style.color = "black";
                    select_2.style.borderBottom = "none";
                }
            }
        },
        components:{
            navHeader
        }
    }
</script>
<style>
    div{
        font-size:0.3rem;
    }
    .ReimbursementDetail_body{
        background: rgb(235,235,235);
        width: 100%;
        height: 100%;
        position: absolute;
        font-size:0.28rem;
    }
    .ReimbursementDetail_title{
        background: white;
    }
    .ReimbursementDetail_title p:first-child {
        padding-top: 15px;
    }
    .ReimbursementDetail_title p:nth-child(2){
        margin-top: 15px;
        color: rgb(157,198,9);
        font-size:0.45rem;
    }
    ._bal{
        display: flex;
        height: 80px;
        margin-top: 20px;
        vertical-align: middle;
    }
    ._bal div{
        flex: 1;
    }
    ._bal p:nth-child(2){
        color: rgb(14,118,204);
    }
    .ReimbursementDetail_title ._bal p{
        font-size:0.3rem;
    }
    .line_vertical{
        background: rgb(188,188,188);
        width: 1px;
        margin-top: 10px;
        height: 70%;
        display: block;
    }
    .content{
        margin-top: 20px;
        background: white;
    }
    .content_title{
        display: flex;
        height: 40px;
        background: rgb(245,246,246);
    }
    .content_title span{
        flex: 1;
        vertical-align: middle;
        margin-top: 15px;
    }
    .content_item{
        display: flex;
        height: 40px;
    }
    .content_item span{
        flex: 1;
        margin-top: 15px;
    }
    .content_item img{
        width: 15px;
        height: 10px;
        margin-top: 18px;
        margin-right: 15px;
    }
    .line{
        background: rgb(188,188,188);
        width: 90%;
        height: 1px;
        display: block;
        margin-left: 0.4rem;
    }
    .item_select{
        display: flex;
        height: 30px;
        background: white;
    }
    .item_select span{
        flex: 1;
        margin-left: 4px;
        margin-right: 5px;
    }
    #select_1{
        color: orange;
        border-bottom: 3px solid orange;
        height: 0.4rem;
    }
</style>
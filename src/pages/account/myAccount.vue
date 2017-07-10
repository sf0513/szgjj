<template>
    <div>
        <div class="header">
            <div class="title_bar" >
                <img src="../../assets/top_bar_img.jpg" alt="" width="20px">
                深圳市住房公积金管理中心
                <button class="finish" @click="finish">退出</button>
            </div>
            <div class="title">
                <img src="../../assets/ic_my_account.png" alt="" height="100px">
                <a href="#">王小花 >></a>
                <p class="name">330305285   封存</p>
                <p class="balance_style">余额<span id="balance" v-if="showBalance">{{balance}}</span><span id="balance_hide" v-else="">******</span><img id="balance_img" @click="showOrHideBalance" src="../../assets/ic_account_hide.png"></p>
            </div>
        </div>
        <div class="center">
            <div class="deposite">
                <span >
                    缴存基数&nbsp; &nbsp; 4000
                </span>
                <span >
                    缴存比例&nbsp; &nbsp; 10%
                </span>
            </div>
            <div class="item">
                <img src="../../assets/ic_card_capture.png" alt="" >
                <p class="p1">最近缴存<br><span>2016-01-09</span></p>
                <p>+￥1500.00</p>
                <p><a href="#">更多  >></a></p>
            </div>
            <span class="line"></span>
            <div class="item">
                <img src="../../assets/ic_card_extract.png" alt="" >
                <p class="p1">最近提取<br><span>2016-01-09</span></p>
                <p>-￥1500.00</p>
                <p><a href="#">更多  >></a></p>
            </div>
        </div>
        <div class="footer">
            <div class="deposite">
                <span @click="show_first" id="my_card">
                    我的联名卡
                </span>
                <span @click="show_second" id="my_protocol">
                    我的协议
                </span>
            </div>
            <div class="item_first" v-if="show" >
                <p>银&nbsp;&nbsp;行:  &nbsp;&nbsp;&nbsp;&nbsp;{{bank}}</p>
                <span class="line"></span>
                <p class="idcard">账&nbsp;&nbsp;号:  &nbsp;&nbsp;&nbsp;&nbsp;<span>{{idCard}}</span></p>
            </div>
            <div class="item_first" v-else >
                <p>对冲还款协议</p>
                <span class="line"></span>
                <p>按月还款协议</p>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default {
        name: 'myAccount',
        data () {
            return {
                balance:'￥253,765.45',
                bank:'中国银行',
                idCard:'6213457****5874',
                show:true,
                showBalance:true,

            }
        },
        methods:{
            finish(){
                window.close;
            },
            show_first(){
                this.show = true;
                this.showItem(this.show);
            },
            show_second(){
                this.show = false;
                this.showItem(this.show);
            },
            showItem(show){
                var card = document.getElementById("my_card");
                var protocol = document.getElementById("my_protocol");
                if(show){
                    card.style.color = "orange";
                    card.style.borderBottom = "5px solid orange";
                    card.style.height = "0.4rem";

                    protocol.style.color = "black";
                    protocol.style.borderBottom = "none";
                }else{
                    card.style.color = "black";
                    card.style.borderBottom = "none";

                    protocol.style.color = "orange";
                    protocol.style.borderBottom = "5px solid orange";
                    protocol.style.height = "0.4rem";
                }
            },
            showOrHideBalance(){
                var balance = document.getElementById("balance");
                var balance_img = document.getElementById("balance_img");
                if(this.showBalance){
                    this.showBalance = false;
                    balance_img.src =require('../../assets/ic_account_open.png');
                }else{
                    this.showBalance = true;
                    balance_img.src =require('../../assets/ic_account_hide.png');
                }
            },
        }
    }
</script>
<style scoped>
    div{
         font-size:0.30rem;
         font-family: '微软雅黑';
     }
    a{
        text-decoration: none;
        color: black;
    }
    .title_bar{
        background: deepskyblue;
        height: 50px;
        width: 100%;
        text-align: left;
        position: relative;
        margin: 0 auto;
        line-height: 50px;
    }
    .finish{
        float: right;
        width: 60px;
        height: 30px;
        margin-top: 10px;
        margin-right: 10px;
    }
    .title{
        height: 4rem;
        background: lightskyblue;
    }
    .title span{
        font-size:0.4rem;
        font-weight: bold;
        width: 3rem;
        display: inline-block;
    }
    .title a{
        display: block;
        margin-top: 0.1rem;
    }
    .title img{
        margin-top: 30px;
    }
    .title #balance_img{
        margin-top: 0.3rem;
    }
    .name{
        margin-top: 0.1rem;
    }
    .deposite{
         height: 1rem;
         background: rgb(245,245,245);
        display: flex;
     }
    .deposite span{
        display: inline-block;
        margin-top: 0.33rem;
        flex: 1;
        margin-left: 0.6rem;
        margin-right: 0.1rem;
    }
    .balance_style{
        word-break:break-all;
        text-align: center;
    }
    .item_first p{
        text-align: left;
        height: 50px;
        line-height: 50px;
        margin-left: 30px;
    }
    #my_card{
        color: orange;
        border-bottom: 5px solid orange;
        height: 0.4rem;
    }
    .item{
        height: 1rem;
        display: flex;
    }
    .item p{
        display: inline-block;
        flex: 1;
        margin-top: 0.4rem;
    }
    .item .p1{
        margin-top: 0.2rem;
    }
    .item img{
        width: 28px;
        height: 29px;
        margin-left: 0.5rem;
        margin-top: 0.2rem;
    }
    .item span{
        font-size:12px;
    }
    .balance_style img{
        width: 30px;
        height: 15px;
        margin-left: 10px;
    }
    .line{
        background: gray;
        width: 85%;
        height: 1px;
        display: block;
        margin-left: 0.5rem;
    }
    .idcard span{
        font-weight: bold;
    }
</style>
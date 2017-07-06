<template>
    <div>
        <div class="header">
            <div class="title_bar" >
                <img src="../../assets/logo.png" alt="" width="20px">
                深圳市住房公积金管理中心
                <button class="finish" @click="finish">退出</button>
            </div>
            <div class="title">
                <img src="../../assets/logo.png" alt="" height="100px">
                <a href="#">王小花 >></a>
                <p>330305285   封存</p>
                <p class="balance_style">余额<span>{{balance}}</span></p>
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
                <img src="../../assets/logo.png" alt="" width="20px">
                最近缴存<br>2016-01-09
                +￥1500.00
                <a href="#">更多  >></a>
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
                <p>账&nbsp;&nbsp;号:  &nbsp;&nbsp;&nbsp;&nbsp;{{idCard}}</p>
            </div>
            <div class="item_first" v-else >
                <p>对冲还款协议</p>
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
            }
        },
        methods:{
            finish(){
                window.close;
            },
            show_first(){
                this.show = true;
//                showItem(this.show);
                var card = document.getElementById("my_card");
                var protocol = document.getElementById("my_protocol");
                if(this.show){
                    card.style.color = "orange";
                    protocol.style.color = "black";
                }else{
                    card.style.color = "black";
                    protocol.style.color = "orange";
                }
            },
            show_second(){
                this.show = false;
//                showItem(this.show);
                var card = document.getElementById("my_card");
                var protocol = document.getElementById("my_protocol");
                if(this.show){
                    card.style.color = "orange";
                    protocol.style.color = "black";
                }else{
                    card.style.color = "black";
                    protocol.style.color = "orange";
                }
            },
            showItem(show){
                var card = document.getElementById("my_card");
                var protocol = document.getElementById("my_protocol");
                if(show){
                    card.style.color = "orange";
                    protocol.style.color = "black";
                }else{
                    card.style.color = "black";
                    protocol.style.color = "orange";
                }
            }
        }
    }
</script>
<style scoped>
    div{
        font-size:16px;
        font-family: '微软雅黑';
    }
    .title_bar{
        background: deepskyblue;
        height: 50px;
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
        height: 250px;
        background: lightskyblue;
    }
    .title span{
        font-size:20px;
        font-weight: bold;
    }
    .deposite{
         height: 60px;
         background: rgb(245,245,245);
     }
    .deposite span{
        display: inline-block;
        margin-top: 20px;
        width: 45%;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .title a{
        display: block;
    }
    .balance_style{
        word-break:break-all;
        margin-top: 20px;
    }
    .title img{
        margin-top: 30px;
    }
    .item{
        height: 100px;
    }
    .item_first p{
        text-align: left;
        height: 50px;
        line-height: 50px;
        margin-left: 30px;
    }
    #my_card{
        color: orange;
    }
</style>
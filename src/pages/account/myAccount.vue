<template>
    <div>
        <div class="header">
            <top-bar></top-bar>
            <div class="account_title">
                <img src="../../assets/ic_my_account.png" alt="" height="100px">
                <router-link to="/pages/loan/MyLoan"><p>{{account_name}} >></p></router-link>
                <p class="name">330305285   封存</p>
                <p class="balance_style">余额<span id="balance" v-if="showBalance">{{balance}}</span><span id="balance_hide" v-else="">******</span><img id="balance_img" @click="showOrHideBalance" src="../../assets/ic_account_hide.png"></p>
            </div>
        </div>
        <div class="center">
            <div class="deposite">
                <span >
                    缴存基数&nbsp; &nbsp; {{deposit_base}}
                </span>
                <span >
                    缴存比例&nbsp; &nbsp; {{deposit_ratio}}
                </span>
            </div>
            <div class="item">
                <img src="../../assets/ic_card_capture.png" alt="" >
                <p class="p1">最近缴存<br><span>2016-01-09</span></p>
                <p>+￥1500.00</p>
                <p>更多  >></p>
            </div>
            <span class="line"></span>
            <div class="item">
                <img src="../../assets/ic_card_extract.png" alt="" >
                <p class="p1">最近提取<br><span>2016-01-09</span></p>
                <p>-￥1500.00</p>
                <p>更多  >></p>
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
    import topBar from '../../components/top-bar.vue';

    export default {
        name: 'myAccount',
        data () {
            return {
                account_name:'',
                balance:'￥253,765.45',
                bank:'中国银行',
                idCard:'6213457****5874',
                show:true,
                showBalance:true,
                deposit_base:'',                    //缴存基数
                deposit_ratio:'',                   //缴存比例
                user_img:'',
            }
        },
        methods:{
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
        },
        created(){
            this.serverApi.getMyAccount({
                userId:'10010',
            },(error,data) => {
                if (error) {
                    alert("code==>" +error.code + ",message==>" +  error.message);
                    return;
                }
//                alert(data.ACCOUNT_BALANCE);
                this.deposit_base = data.DEPOSIT_BASE;
                this.deposit_ratio = data.DEPOSIT_PROPORTION;
                this.balance = data.ACCOUNT_BALANCE;
                this.account_name = data.USER_NAME;
            });
        },
        components:{
            topBar
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
    .account_title{
        height: 230px;
        background: lightskyblue;
    }
    .account_title span{
        font-size:0.4rem;
        font-weight: bold;
        width: 3rem;
        display: inline-block;
    }
    .account_title a{
        display: block;
        margin-top: 0.1rem;
    }
    .account_title img{
        margin-top: 30px;
    }
    .account_title #balance_img{
        margin-top: 0.3rem;
    }
    .name{
        margin-top: 0.2rem;
        font-size:0.25rem;
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
        margin-left: 0.5rem;
        margin-right: 0.5rem;
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
        background: rgb(188,188,188);
        width: 85%;
        height: 1px;
        display: block;
        margin-left: 0.5rem;
    }
    .idcard span{
        font-weight: bold;
    }
</style>
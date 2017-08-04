<template>
    <div class="loan-plan-body">
        <top-bar></top-bar>
        <div class="item_select">
            <span @click="show_first" id="select_1">
                    贷款中
                </span>
            <span @click="show_second" id="select_2">
                    已结清贷款
                </span>
        </div>
        <div class="loan-item1" v-if="show_item">
            <div class="loan-plan-title">
                <div>{{title}}</div>
                <p class="line"></p>
                <div>贷款总额(元) &nbsp;&nbsp;&nbsp;&nbsp;{{loan_bal}}&nbsp;&nbsp;&nbsp;&nbsp;{{loan_nper}}</div>
                <p class="line"></p>
                <div>还款方式: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{loan_refund_type}}</div>
            </div>
            <div>
                <div class="content_title">
                    进度追踪
                </div>
                <div class="content_detail">
                    <span>12月16日</span> <img src="../../assets/ic_loan_complete_bg.png" alt=""> <span>银行收件</span>
                </div>
            </div>
        </div>
        <div class="loan-item2" v-else>
            <p class="loan-item2-title">
                已结清贷款
            </p>
            <div v-for="item in loan_arr">
                <div class="loan-item-content">
                    <img :src="item.src" alt="">
                    <span>{{item.type}}</span>
                    <span>{{item.content}}</span>
                </div>
                <p class="line"></p>
            </div>
        </div>
    </div>
</template>
<script>
    import topBar from '../../components/top-bar.vue';
    export default {
        name: 'loan-plan',
        data () {
            return {
                title:'2015年12月26日，您申请了一笔商业贷款转公积金',
                loan_bal:'￥900,000.00',
                loan_nper:'240期',
                loan_refund_type:'等额本金',
                show_item:true,
                loan_arr:[
                    {src:require("../../assets/ic_card_issue.png"),type:'贷款类型',content:'商业贷款转公积金'},
                    {src:require("../../assets/ic_card_money.png"),type:'贷款金额',content:'￥87,000.00'},
                    {src:require("../../assets/ic_card_issue.png"),type:'贷款发放日',content:'2015-12-31'},
                    {src:require("../../assets/ic_card_issue.png"),type:'贷款结清日',content:'2015-12-3'},
                ],
                loan_plan:[
                    {},
                ],
            }
        },
        methods:{
            show_first(){
                this.show_item = true;
                this.showSelect();
            },
            show_second(){
                this.show_item = false;
                this.showSelect();
            },
            showSelect(){
                var select_1 = document.getElementById("select_1");
                var select_2 = document.getElementById("select_2");
                if(this.show_item === true){
                    select_1.style.color = "orange";
                    select_1.style.borderBottom = "3px solid orange";
                    select_1.style.height = "0.4rem";

                    select_2.style.color = "black";
                    select_2.style.borderBottom = "none";
                }else{
                    select_2.style.color = "orange";
                    select_2.style.borderBottom = "3px solid orange";
                    select_2.style.height = "0.4rem";

                    select_1.style.color = "black";
                    select_1.style.borderBottom = "none";
                }
            }
        },
        components:{
            topBar
        }
    }
</script>
<style scoped>
    .loan-plan-body{
        background: rgb(235,235,235);
        width: 100%;
        height: 100%;
        position: absolute;
        font-size:0.28rem;
    }
    .loan-plan-title{
        background: white;
        margin-top: 10px;
    }
    .loan-plan-title div{
        height: 30px;
        padding-top: 15px;
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
    }
    .line{
        background: rgb(188,188,188);
        width: 95%;
        height: 1px;
        display: block;
        margin-left: 0.2rem;
    }
    .content_title{
        height: 20px;
        background: rgb(245,245,245);
        margin-top: 20px;
        text-align: left;
        padding-top: 5px;
        font-size: 0.32rem;
        padding-left: 20px;
    }
    .content_detail{
        height: 40px;
        text-align: left;
        padding-top: 10px;
    }
    .content_detail img{
        height: 30px;
        vertical-align: middle;
        margin-left: 20px;
    }
    .content_detail span:nth-child(1){
        margin-left: 40px;
    }
    .content_detail span:nth-child(3){
        margin-left: 40px;
    }
    .item_select{
        display: flex;
        height: 30px;
        margin-top: 10px;
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
    .loan-item2-title{
        height: 25px;
        background: rgb(245,246,246);
        text-align: left;
        margin-top: 10px;
        padding-top: 15px;
        padding-left: 20px;
        margin-bottom: 20px;
    }
    .loan-item2 img{
        height: 20px;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 5px;
    }
    .loan-item-content{
        display: flex;
        height: 40px;
        background: white;
    }
    .loan-item-content span{
        text-align: left;
        padding-top: 15px;
        flex: 1;
    }
</style>
<template>
    <div class="body">
        <top-bar></top-bar>
        <div class="loan_title">
            <div class="loan_no">
                <span>商业贷款转公积金贷款</span>
                <span>贷款合同号：123456789</span>
            </div>

            <div class="loan_total">
                <div class="loan1">
                    <img src="../../assets/bg_loan.png" alt="">
                    <div>
                        贷款总额(元)<br><br><span>900,000.00</span><br><br>240期
                    </div>
                </div>
                <div class="loan2">
                    <div><img src="../../assets/ic_card_cumulative.png" alt=""><p>累计已还本金<span class="refund_principal">{{refund_principal}}&nbsp;></span></p></div>
                    <div><img src="../../assets/ic_card_remaining.png" alt=""><p>剩余贷款本金<span class="loan_principal">{{loan_principal}}&nbsp;></span></p></div>
                </div>
            </div>
        </div>

        <div class="content">
            <div v-for="item in loanArr">
                <div class="first">
                    <img :src="item.src" alt=""><span>{{item.title}}</span><span>{{item.message}}</span>
                </div>
                <p class="line"></p>
            </div>
        </div>

        <div class="content">
            <div v-for="item in refund">
                <div class="first">
                    <img :src="item.src" alt=""><span>{{item.title}}</span><span :class="{color:item.isColor}">{{item.message}}</span>
                </div>
                <p class="line"></p>
            </div>
        </div>

        <div class="content">
            <div class="first">
                <img src="../../assets/ic_card_time_limit.png" alt=""><span>{{time_limit}}</span><span>{{time_limit_bal}}</span>
            </div>
            <p class="line"></p>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import topBar from '../../components/top-bar.vue';
    export default {
        name: 'MyLoan',
        data () {
            return {
                refund_principal:'￥789,678',
                loan_principal:'￥19,322',
                time_limit:'逾期 2 期',
                time_limit_bal:'￥7434.00',
                loanArr:[
                    {title:"贷款发放日",message:"2016-01-11",src:require("../../assets/ic_card_issue.png")},
                    {title:"贷款到期日",message:"2035-01-11(剩余期数202期)",src:require("../../assets/ic_card_due_to.png")},
                    {title:"公积金贷款利率",message:"3.56%",src:require("../../assets/ic_card_interest_rate.png")},
                    {title:"主申请人",message:"王小华",src:require("../../assets/ic_card_applicant.png")},
                    {title:"共同申请人",message:"李国      李晓华",src:require("../../assets/ic_card_common.png")},
                ],
                refund:[
                    {title:"本月应还款",message:"￥5875(第36期)",src:require("../../assets/ic_card_reimbursement.png"),isColor:true},
                    {title:"还款日",message:"24号",src:require("../../assets/ic_card_due_date.png"),isColor:false},
                    {title:"还款方式",message:"等额本金",src:require("../../assets/ic_card_reimbursement_means.png"),isColor:false},
                    {title:"还款账户",message:"6227****7777(中国建设银行)",src:require("../../assets/ic_card_repayment_account.png"),isColor:false},
                ],
            }
        },
        methods:{
        },
        components:{
            topBar
        }
    }
</script>
<style scoped>
    .body{
        background: rgb(245,245,245);
        width: 100%;
        height: 100%;
        position: absolute;
        font-size:0.28rem;
    }
    .loan_title{
        height: 3.7rem;
        background: white;
        margin-top: 0.3rem;
    }
    .loan_no{
        display: flex;
        text-align: center;
    }
    .loan_no span{
        font-size:0.22rem;
        text-align: center;
        flex: 1;
        margin-top: 0.2rem;
    }
    .loan_total{
        display: flex;
    }
    .loan1{
        width: 3.1rem;
    }
    .loan1 img{
        width: 2.6rem;
        margin-top: 0.2rem;
        margin-left: 0.1rem;
    }
    .loan1 div{
        position:absolute;
        width:2rem;
        height:1.5rem;
        left:28px;
        top:110px;
    }
    .loan1 span{
        font-weight:bold;
        font-size:0.4rem;
    }
    .loan2{
        margin-top: 0.5rem;
        text-align: left;
        margin-right: 0.2rem;
    }
    .loan2 p{
        display: inline-block;
        margin-left: 0.2rem;
        margin-top: 0.6rem;
        font-size:0.25rem;
    }
    .loan2 img{
        width: 13px;
    }
    .refund_principal{
        color: rgb(157,198,9);
    }
    .loan_principal{
        color: rgb(14,118,204);
    }
    .content{
        background: white;
        margin-top: 0.3rem;
    }
    .first{
        display: flex;
        height: 40px;
    }
    .first span:nth-child(2){
        flex: 1.2;
    }
    .first span:nth-child(3){
        flex: 2;
    }
    .first span{
        padding-top: 0.25rem;
        margin-left: 0.1rem;
        text-align: left;
    }
    .first img{
        width:25px;
        height: 25px;
        margin-top: 0.15rem;
        margin-left: 0.2rem;
    }
    .line{
        background: rgb(188,188,188);
        width: 95%;
        height: 1px;
        display: block;
        margin-left: 0.2rem;
    }
    .yelloSpan{
        color: red;
    }
    .blackSpan{
        color: black;
    }
    .color{
        color: red;
    }
</style>
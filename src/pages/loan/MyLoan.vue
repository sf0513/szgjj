<template>
    <div class="body">
        <div class="title">
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
                    <img src="../../assets/ic_card_issue.png" alt=""><span>{{item.title}}</span><span>{{item.message}}</span>
                </div>
                <p class="line"></p>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default {
        name: 'MyLoan',
        data () {
            return {
                refund_principal:'￥789,678',
                loan_principal:'￥19,322',
                loanArr:[
                    {title:"贷款发放日",message:"2016-01-11",src:"../../assets/ic_card_issue.png"},
                    {title:"贷款到期日",message:"2035-01-11(剩余期数202期)",src:"../../assets/ic_card_issue.png"},
                    {title:"公积金贷款利率",message:"3.56%",src:"../../assets/ic_card_issue.png"},
                    {title:"主申请人",message:"王小华",src:"../../assets/ic_card_issue.png"},
                    {title:"共同申请人",message:"李国      李晓华",src:"../../assets/ic_card_issue.png"},
                ],
                refund:[
                    {}
                ],
            }
        },
        methods:{
        }
    }
</script>
<style>
    .body{
        background: rgb(245,245,245);
        width: 100%;
        height: 100%;
        position: absolute;
        font-size:0.25rem;
    }
    .title{
        height: 3.7rem;
        background: white;
        margin-top: 0.5rem;
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
        left:0.6rem;
        top:1.7rem;
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
        margin-top: 0.5rem;
    }
    .first{
        display: flex;
    }
    .first span:nth-child(2){
        flex: 1;
    }
    .first span:nth-child(3){
        flex: 2;
    }
    .first span{
        height: 0.5rem;
        padding-top: 0.3rem;
        margin-left: 0.2rem;
        text-align: left;
    }
    .first img{
        width:25px;
        height: 25px;
        margin-top: 0.1rem;
        margin-left: 0.5rem;
    }
    .line{
        background: gray;
        width: 90%;
        height: 1px;
        display: block;
        margin-left: 0.5rem;
    }
</style>
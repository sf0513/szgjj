<template>
    <div>
        <div class="header">
            <div class="title_bar" >
                <img src="../../assets/logo.png" alt="" width="20px">
                深圳市住房公积金管理中心
                <button class="finish">退出</button>
            </div>
            <div class="title">
                <img src="../../assets/logo.png" alt="" height="100px">
                <a href="#">王小花 >></a>
                <p>330305285   封存</p>
                <p>余额<span>{{balance}}</span></p>
            </div>
        </div>
        <div class="body">
            <div class="deposite">
                <span >
                    缴存基数4000
                </span>
                <span >
                    缴存比例10%
                </span>
            </div>
            <div>
                <img src="../../assets/logo.png" alt="" width="20px">
                最近缴存<br>2016-01-09
                +￥1500.00
                <a href="#">更多  >></a>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default {
        name: 'myAccount',
        data () {
            return {
                balance:'￥253,765.45'
            }
        },
        methods:{

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
        /*top: 50%;*/
    }
    .finish{
        float: right;
    }
    .title{
        height: 300px;
        background: lightskyblue;
    }
    .title span{
        font-size:30px;
        font-weight: bold;
    }
    .deposite{
         height: 100px;
         background: lightgray;
     }
    .deposite span{
        width: 50%;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .title a{
        display: block;
    }
</style>
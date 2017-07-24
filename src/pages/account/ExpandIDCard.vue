<!--
 @description   升位 省份证
 @author    李学飞
-->
<template>
    <div class="expand-background-div">

        <!-- 顶部 -->
        <top-bar></top-bar>
        <nav-header title="身份证升位" :showImg="false"></nav-header>

        <div class="expand-input-div">
            升位后身份证号码: <input type="text" onkeypress="value=value.replace(/[^0-9-]+/,'')" ng-pattern="/[^a-zA-Z]/" maxlength="16" />
        </div>
        <span>请仔细核对升级后的身份证号码是否与本人身份证号码相符<br>如果不符,您可预约到深圳公积金管理中心办理此项业务</span>
        <button @click="sureAction">确定</button>

    </div>
</template>

<script type="application/javascript">
    import TopBar from '../../components/top-bar.vue'
    import NavHeader from  '../../components/nav-header.vue'

    export default {
        name: 'expand-id-card',
        data() {
            return {

            }
        },
        components: {
            TopBar,
            NavHeader
        },
        methods: {
            sureAction: function () {
                // 升位成功 跳转
                this.$router.push({path:'/pages/account/ExpandSuccess', query:{isSuccess:false}})
            }
        }
    }
</script>

<style scoped>

    .expand-background-div {
        text-align: center;
    }
    .expand-input-div {
        font-size: 14px;
        width: 90%;
        height: 40px;
        border-radius: 10px;
        box-shadow: 1px 1px 10px 1px #d1e6e7;
        display: inline-block;
        text-align: center;
    }

    input {
        font-size: 14px;
        width: 60%;
        height: 40px;
        display: inline-block;
        /*background-color: #a899fb;*/
    }
    span {
        width: 90%;
        height: 40px;
        font-size: 12px;
        /*background-color: #00ee00;*/
        display: inline-block;
        /*文字行间距*/
        line-height: 20px;
    }
    button {
        font-size: 15px;
        width: 5rem;
        height: 40px;
        background-color: #a899fb;
        outline: none;
        border: none;
        border-radius: 10px;
        color: white;
    }


</style>
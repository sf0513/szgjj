<template>
    <div class="modify-background-div">

        <!-- 顶部 -->
        <top-bar></top-bar>
        <nav-header title="修改密码" :showImg="false"></nav-header>

        <!-- 修改密码 -->
        <div class="old-div">
            旧密码:
            <input type="text" placeholder="长度为六位数字">
        </div>
        <div class="old-div">
            新密码:
            <input type="text" placeholder="长度为六位数字">
        </div>
        <div class="old-div">
            重置新密码:
            <input type="text" placeholder="长度为六位数字">
        </div>

        <!-- 提交按钮 -->
        <button @click="submitAction">提交</button>

    </div>
</template>



<script type="application/javascript">
    import TopBar from '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'

    export default {
        name: 'modify-pwd',
        data() {
            return {

            }
        },
        components: {
            TopBar,
            NavHeader
        },
        methods: {
            submitAction: function () {
                this.$router.push({
                    path:'/pages/psw/Success',
                    query:{
                        title:'修改密码',
                        successTitle:'您已成功修改密码',
                        bottomTitle:'请妥善保管您的新密码'
                    }
                })
            }
        }
    }
</script>

<style scoped>

    .modify-background-div {


    }
    .old-div {
        width: 5rem;
        height: 30px;
        border-radius: 10px;
        box-shadow: 1px 1px 5px 1px #aabebf inset;
        font-size: 13px;
        /*text-align: center;*/
        display: inline-block;
        padding-top: 10px;
    }

    input {
        width: 60%;
        height: 20px;
        font-size: 12px;
        /*background-color: #dbfc92;*/
        margin-left: 10px;
        display: inline-block;
    }
    button {
        width: 5rem;
        height: 40px;
        color: white;
        background-color: #a899fb;
        display: inline-block;
        border: none;
        border-radius: 10px;
        outline: none;
        margin-top: 40px;
    }
</style>
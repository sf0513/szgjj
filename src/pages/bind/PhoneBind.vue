<template>
    <div class="phone-bind-div">

        <!-- 顶部 -->
        <top-bar></top-bar>
        <nav-header title="手机号码绑定" :showImg="false"></nav-header>

        <div class="phone-number-div">
            手机号码:<input id="phone-input" type="text" onkeypress="value=value.replace(/[^\d]/g,'')" maxlength="11" :value="phoneNumber" />
        </div>
        <div class="code-div">
            校验码:<input id="code-input" type="text" onkeypress="value=value.replace(/[^\d]/g,'')" maxlength="6" placeholder="请输入校验码">
            <button @click="getCodeAction">获取验证码</button>
        </div>

    </div>
</template>

<script type="application/javascript">
    import TopBar from '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'

    export default {
        name: 'phone-bind',
        data() {
            return {
                phoneNumber: '13512345678',
            }
        },
        components: {
            TopBar,
            NavHeader
        },
        methods: {
            getCodeAction: function () {
                console.log('获取验证码')
            }
        }
    }
</script>




<style scoped>
    div {

    }
    .phone-number-div, .code-div {
        width: 90%;
        height: 40px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 2px #d1e6e7;
        display: inline-block;
        padding-top: 5px;
        margin-top: 10px;
        font-size: 13px;
        /*text-align: center;*/
    }

    input {
        width: 50%;
        /*background-color: #00ee00;*/
        margin-left: 10px;
    }
    button {
        width: 65px;
        height: 18px;
        font-size: xx-small;
        color: white;
        background-color: orange;
        border-radius: 3px;
        border: none;
        outline: none;
        text-align: center;
        margin-left: 10px;
    }
</style>
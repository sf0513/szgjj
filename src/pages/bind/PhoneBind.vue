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
            <button id="code-button" @click="getCodeAction">获取验证码</button>
        </div>

        <div class="agreement-div">
            <input id="agreement-input" type="checkbox">
            <span>我同意<a>《深圳市住房公积金业务自助办理服务协议》</a></span>
        </div>

        <button id="srue-button" @click="srueAction">确定</button>

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
            },
            srueAction: function () {
                console.log('确定')
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
        /*background-color: #0000ed;*/
    }
    .agreement-div {
        width: 90%;
        height: 20px;
        text-align: center;
        display: inline-block;
    }

    input {
        font-size: 10px;
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
    span, a {
        font-size: 12px;
        display: inline;
        text-align: center;
    }
    #agreement-input {
        width: 15px;
        height: 15px;
        display: inline;
        background-color: #00ee00;
    }
    #srue-button {
        font-size: 15px;
        width: 5rem;
        height: 40px;
        border-radius: 10px;
        border: none;
        outline: none;
        color: white;
        background-color: #a899fb;
    }
    a {
        color: #8080ff;
    }
</style>
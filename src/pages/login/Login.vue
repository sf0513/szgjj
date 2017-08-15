<template>
    <div class="login">
        <img class="login_logo" src="../../assets/logo.png">
        <br/>
        <EditText class="et" :labelStr="account" @son_to_father="saveUsername" :holderStr="accountRemind"></EditText>
        <EditText class="et" :labelStr="titlePassword" @son_to_father="savePassword"></EditText>
        <div class="et verification_code">
            <EditText class="code" :labelStr="titleCode" @son_to_father="saveCode" :showLabel="showLabel"></EditText>
            <img class="image_code" :src="codeUrl" @click="refreshCode($event)">
        </div>
        <button class="login_submit" @click="login">{{signIn}}</button>
        <div class="forget">
            <router-link to="/forgetpsw"><p>{{forgetPassword}}</p></router-link>
        </div>
    </div>
</template>
<script>
    import EditText from '@/components/EditText'

    export default {
        name: 'login',
        data() {
            return {
                account: '账户：',
                titlePassword: '密码：',
                titleCode: '验证码：',
                signIn: '登录',
                forgetPassword: '忘记密码',
                accountRemind: '公积金账户/手机账户',
                showLabel: true,
                username: '',
                password: '',
                code: '',
                mei: '12',
                codeUrlFirst: '/api/WheatInterface/in?fund_code=base_show_picvcode&mei=',
                codeUrl: '',
                codeSign: ''
            }
        },
        created: function () {
            this.mei = Math.floor(Math.random() * 110);
            this.codeUrl = this.codeUrlFirst + this.mei;
        },
        methods: {
            saveUsername(msg) {
                this.username = msg;
            },
            savePassword(msg) {
                this.password = msg;
            },
            saveCode(msg) {
                this.code = msg;
            },
            refreshCode(event) {
                this.mei = Math.floor(Math.random() * 110);
                this.codeUrl = this.codeUrlFirst + this.mei;
                return this.codeUrl;
            },
            login() {
                this.serverApi.login({
                    username: this.username,
                    password: this.password,
                    code: this.code,
                    flag: 2,
                    mei: this.mei
                }, (error, data) => {
                    if (error) {
                        alert(error.message);
                        return;
                    }
                    alert(data.username);
                });

            }
        },
        components: {
            EditText,
        }
    }
</script>

<style type="text/css" scoped>
    .login {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #EFEFEF;
    }

    input, button {
        outline: none;
        border: none;
    }

    .login_logo {
        margin-top: 48px;
        margin-bottom: 32px;
        height: 96px;
    }

    .et {
        margin-top: 0.35rem;
    }

    .code {
        width: 5rem;
    }

    .verification_code {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .label_style {
        width: 1rem;
    }

    .login_row {
        max-width: 7rem;
        background: white;
        border: 3px solid #F5F4F3;
        margin: 16px auto;
        text-align: left;
        box-shadow: 2px 2px 3px #aaaaaa;
        border-radius: 10px;
    }

    .login_input {
        background: transparent;
        width: 75%;
        height: 1rem;
        vertical-align: middle;
    }

    div {
        font-size: 18px;
    }

    label {
        vertical-align: middle;
    }

    .login_code {
        max-width: 70%;
        border: 3px solid #F5F4F3;
        background: white;
        border-radius: 10px;
        text-align: left;
        box-shadow: 2px 2px 3px #aaaaaa;

    }

    .login_code input {
        max-width: 58%;
    }

    .login_row_code {
        position: relative;
        margin: 16px auto;
        max-width: 7rem;
    }

    .login_submit {
        position: relative;
        width: 4rem;
        height: 35px;
        font-size: 16px;
        background-image: url(../../assets/btn.png);
        margin: 32px 20px 10px;
        -webkit-transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
        transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
        border-radius: 3rem;
        cursor: pointer;
        color: white;
        background-repeat: no-repeat;
        background-position: 50% center;
        background-color: transparent;
        overflow: hidden;
    }

    .login_name {
        font-size: 16px;
        margin-left: 16px;
    }

    .forget {
        font-size: 16px;
        margin-top: 20px;
    }

    .image_code {
        height: 40px;
        width: 1.5rem;
        margin-left: 0.3rem;
    }
</style>
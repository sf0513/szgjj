<template>
    <div class="login">
        <img class="login_logo" src="../../assets/logo.png">
        <br/>
        <div class="login_row name">
            <label class="login_name" for="acount">账户：</label>
            <input type="text" class="login_input" id="acount" v-model="username" placeholder="公积金账户/手机账户">
        </div>
        <div class="login_row">
            <label class="login_name" for="password">密码：</label>
            <input type="password" class="login_input" id="password" v-model="password">
        </div>
        <div class="login_row_code">
            <div class="login_code">
                <label class="login_name" for="code">验证码：</label>
                <input type="text" class="login_input" v-model="code" id="code">
            </div>
            <img class="image_code" src="http://192.168.1.85:8080/WheatInterface/in?fund_code=base_show_picvcode">
        </div>
        <button class="login_submit" @click="login">登录</button>
        <div class="forget">
            <router-link to="/forgetpsw"><p>忘记密码</p></router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                username: '',
                password: '',
                code: ''
            }
        },
        methods: {
            login() {
                this.serverApi.login({
                    username: this.username,
                    password: this.password,
                    code:this.code,
                    flag:2
                }, (error, data) => {
                    if (error) {
                        alert(error.message);
                        return;
                    }
                    alert(data.username);
                });

            }
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
        width: 80%;
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
        max-width: 65%;
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
        position: absolute;
        top: 0;
        margin-top: 2px;
        right: 0px;
        height: 40px;
        width:1.5rem;
    }
</style>
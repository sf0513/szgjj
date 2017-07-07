<template>
    <div class="login">
        <img class="login_logo" src="../../assets/logo.png">
        <br/>
        <div class="login_row name">
            <label class="login_name">账户：</label>
            <input type="text" class="login_input">
        </div>
        <div class="login_row">
            <label class="login_name">密码：</label>
            <input type="text" class="login_input">
        </div>
        <div class="login_row_code">
            <div class="login_code">
                <label class="login_name">验证码：</label>
                <input type="text" class="login_input"></div>
            <img>
        </div>
        <button class="login_submit">登录</button>
        <div class="forget">
            <router-link to=""><p>忘记密码</p></router-link>
        </div>
    </div>
</template>
<script>
    export default
    {
        name: 'login',
        data(){
            return {}
        }
    }
</script>

<style scoped>
    .login {
        background-color: #EFEFEF;
        height: 100%;
    }

    .login_logo {
        margin-top: 48px;
        margin-bottom: 32px;
        height: 96px;
    }

    .login_row {
        max-width: 90%;
        background: white;
        border: 1px solid black;
        margin: 10px auto;
        text-align: left;
        border-radius: 10px;
    }

    .login_input {
        height: 35px;
        border: none;
        background: transparent;
        outline: none;
    }

    .login_code {
        width: 75%;
        border: 1px solid black;
        background: white;
        border-radius: 10px;
    }

    .login_row_code {
        margin: 10px auto;
        max-width: 90%;
        text-align: left;

    }

    .login_submit {
        position: relative;
        width: 50%;
        height: 35px;
        background: #01AFEC;
        border: none;
        margin: 10px 20px 10px;
        -webkit-transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
        transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
        border-radius: 3rem;
        cursor: pointer;
        color: white;
        overflow: hidden;
    }

    .login_name {
        margin-left: 10px;
    }
    .forget{
        margin-top: 20px;
    }
</style>
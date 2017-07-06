<template>
    <div class="login">
        <h1>login</h1>
        <!--<img  src="@/assets/logo.png"/>-->
        <br/>
        <div class="login_row">
            <p class="login_name">账户：</p>
            <input type="text" class="login_input">
        </div>
        <div class="login_row">
            <p>密码：</p>
            <input type="text" class="login_input">
        </div>
        <div class="login_row">
            <p>验证码：</p>
            <input type="text" class="login_input name">
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

    .login_row {
        width: 7rem;
     }

    .login_input {
        height: 32px;
        width: 6rem;
    }

    .login_input.name {
        width: 3rem;
        left:0px;
     }

    .login_submit {
        position: relative;
        width: 50%;
        height: 32px;
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
    .login_name{
        position: absolute;
        margin-left: 0.8rem;
        height: 100%;
        text-align: center;
    }
</style>
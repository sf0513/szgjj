<template>
    <div class="login">
        <h1>login</h1>
        <!--<img  src="@/assets/logo.png"/>-->
        <br/>
        <div class="login_row">
            <label class="login_name">账户：</label>
            <input type="text" class="login_input">
        </div>
        <div class="login_row">
            <label>密码：</label>
            <input type="text" class="login_input">
        </div>
        <div class="login_row">
            <label>验证码：</label>
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
        height: 15rem;
        vertical-align: middle;
     }

    .login_row {
        width: 80%;
        background: white;
        border: 1px solid black;
        margin-top: 10px;
        margin-right: 10px;
        margin-left: 10px;
        border-radius: 5px;
       }

    .login_input {
        height: 32px;
        border: none;
        background: transparent;
        outline: none;
      }

    .login_input.name {
        width: 3rem;
        left: 0px;
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

    .login_name {
       }
</style>
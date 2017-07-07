<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>

        <button @click="goToMyInformation">Go to MyInformation</button>
        <br>
        <button @click="goToMyAccount">Go to MyAccount</button>
        <br/>
        <button @click="goToLogin">Go to Login</button>

        <button @click="goToForgetPsw">Go to ForgetPsw</button>

    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            goToMyInformation: function () {
                this.$router.push('/pages/account/MyInformation')
            },
            goToMyAccount () {
                this.$router.push('/pages/account/myAccount')
            },
            goToLogin(){
                this.$router.push("pages/login/login")
            }, goToForgetPsw(){
                this.$router.push('/forgetpsw')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

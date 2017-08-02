<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>

        <button @click="goToMyInformation">Go to MyInformation</button>
        <br>
        <button @click="goToMyAccount">Go to MyAccount</button>
        <br/>
        <button @click="goToLogin">Go to Login</button>
        <br/> <br/>
        <button @click="goToForgetPsw">忘记密码</button>
        <button @click="goToMyNotes">留言板</button>
        <button @click="goToChangeRepaymentDate">还款日变更</button>
        <br/>
        <button @click="goToChangeRepaymentAcc">还款账户信息变更</button>
        <br/>
        <button @click="goToMyLoan">Go to MyLoan</button>
        <br/>
        <button @click="goToIWantToExtract">Go to IWantToExtract</button>
        <button @click="goToRepay">还款方式变更</button>
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
            },
            goToForgetPsw(){
                this.$router.push('/forgetpsw')
            },
            goToMyLoan(){
                this.$router.push('/pages/loan/MyLoan')
            },
            goToMyNotes(){
                this.$router.push('/notes')
            },
            goToIWantToExtract(){
                this.$router.push('/pages/extract/IWantToExtract')
            },
            goToRepay(){
            	this.$router.push('/loan/modeOfRepayment')
            },
            goToChangeRepaymentDate(){
                this.$router.push('/ChangeRepaymentDate')
            },
            goToChangeRepaymentAcc(){
                this.$router.push('/ChangeRepaymentAcc')
            },
        }
    }
</script>

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

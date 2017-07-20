<template>
    <div class="success-div">

        <top-bar></top-bar>
        <nav-header title="身份证升位" :showImg="false"></nav-header>

        <img :src="src">

        <span id="success-span">{{ spanTitle }}</span>

        <span id="false-span" v-if="!isSuccess">您可申请预约到公积金管理中心办理</span>

        <button @click="srueAction">完成</button>
    </div>
</template>

<script type="application/javascript">
    import TopBar from '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'

    export default {
        name: 'expand-success',

        data() {
            return {
                isSuccess: Boolean,
                spanTitle: String,
                src: String
            }
        },

        created() {
            this.isSuccess = this.$route.query.isSuccess;
            console.log(this.isSuccess)
            if (this.isSuccess === true) {
                this.spanTitle = '你已成功升级身份证号码';
                this.src = require('../../assets/card_successful.png');
            }else  {
                this.spanTitle = '您的身份证号码升级失败';
                this.src = require('../../assets/card_failure.png');
            }
            console.log(this.src)
        },
        methods: {
            srueAction: function () {
                console.log(this.isSuccess)
            }
        },
        components: {
            TopBar,
            NavHeader
        }
    }
</script>


<style scoped>
    img {
        width: 72px;
        height: 72px;
    }
    span {
        font-size: 15px;
        display: block;
        padding: 10px;
        /*background-color: greenyellow;*/
    }
    #false-span {

    }
    button {
        width: 5rem;
        height: 40px;
        border-radius: 10px;
        border: none;
        outline: none;
        color: white;
        background-color: #a899fb;
    }
</style>
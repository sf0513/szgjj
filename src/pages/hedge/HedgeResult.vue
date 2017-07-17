<template>
    <div class="backbroud-div">
        <top-bar></top-bar>
        <nav-header title="对冲还贷" :showImg="false"></nav-header>
        <img src="../../assets/appoint_success.png">
        <span>您已申请对冲还贷 <br>请等待父母操作!</span>
        <button @click="complateAction">完成</button>
    </div>
</template>

<script type="application/javascript">
    import TopBar from  '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'

    export default {
        name: 'hedge-result',
        components: {
            // 引用组件
            TopBar,
            NavHeader
        },
        data() {
            return {

            }
        },
        methods: {
            complateAction: function () {
                this.$router.push('/pages/hedge/HedgeInput'),
                alert('将要跳转"对冲还款界面"')
            }
        }
    }
</script>


<style scoped>
    .backbroud-div {
        text-align: center;
        display: block;
    }

    img {
        width: 120px;
        height: 120px;
        display: inline-block;
        text-align: center;
    }
    span {
        font-size: 15px;
        display: block;
        line-height: 30px;
    }
    button {
        width: 150px;
        height: 30px;
        border-radius: 10px;
        background-color: cornflowerblue;
        color: white;
        outline: none;
        border: 0px;
    }
</style>
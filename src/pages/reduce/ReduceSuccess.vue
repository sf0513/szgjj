<template>
    <div class="success-background-div">

        <!-- 顶部 -->
        <top-bar></top-bar>
        <nav-header title="缩期" :showImg="false"></nav-header>

        <div class="success-div">
            <img src="../../assets/card_successful.png">
            <span>您已成功办理缩期</span>
        </div>

        <button>完成</button>

    </div>
</template>

<script type="application/javascript">
    import TopBar from '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'

    export default {
        name: 'reduce-success',
        data() {
            return {

            }
        },
        components: {
            TopBar,
            NavHeader
        }
    }
</script>


<style scoped>

    .success-div {
        padding: 20px;
    }

    img {
        width: 74px;
        height: 74px;
    }

    span {
        font-size: 14px;
        padding-top: 10px;
        display: block;
    }

    button {
        width: 5rem;
        height: 40px;
        font-size: 15px;
        color: white;
        background-color: #a899fb;
        border: none;
        outline: none;
        border-radius: 10px;
    }
</style>
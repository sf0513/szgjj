<template>
    <div class="success-div">

        <!-- 顶部 -->
        <top-bar></top-bar>
        <nav-header :title="title" :showImg="false"></nav-header>

        <!-- 成功 提示 -->
        <img :src="src">
        <span id="success-span">{{ successTitle }}</span>

        <!-- 完成按钮 -->
        <button @click="srueAction">完成</button>

        <!-- 底部文字 -->
        <span id="bottom-span">{{ bottomTitle }}</span>

    </div>
</template>

<script type="application/javascript">
    import TopBar from  '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'

    export default {
        name: 'success',
        data() {
            return {
                title:'title',
                successTitle: 'successTitle',
                otherTitle: 'otherTitle',
                bottomTitle:'bottomTitle',
                src:String
            }
        },
        created() {
            this.src = require('../../assets/card_successful.png');
            this.title = this.$route.query.title;
            this.successTitle = this.$route.query.successTitle;
            this.otherTitle = this.$route.query.otherTitle;
            this.bottomTitle = this.$route.query.bottomTitle;
            //this.src = this.$route.query.src;
            console.log('title:' + this.title + 'successTitle:' + this.successTitle)

        },
        components: {
            // 引用组件
            TopBar,
            NavHeader
        },
        methods: {
            srueAction: function () {
                console.log('点击完成')
            }
        }
    }
</script>

<style scope>
    .success-div {
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
    #bottom-span {
        font-size: 12px;
        color: #5e5e5e;
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
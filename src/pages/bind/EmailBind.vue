<template>
    <div class="email-bind-div">

        <!-- 顶部 -->
        <top-bar></top-bar>
        <nav-header title="邮箱" :showImg="false"></nav-header>

        <div class="email-number-div">
            邮箱:<input id="email-input" type="text" placeholder="请输入邮箱" maxlength="20" />
        </div>

        <button id="srue-button" @click="srueAction">确定</button>

    </div>
</template>


<script type="application/javascript">
    import TopBar from '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'

    export default {
        name: 'email-bind',
        data() {
            return {
                emailNumber: '',
            }
        },
        components: {
            TopBar,
            NavHeader
        },
        methods: {
            srueAction: function () {
                console.log('确定')
            }
        }
    }
</script>


<style scoped>
    .email-number-div {
        width: 6rem;
        height: 40px;
        font-size: 13px;
        box-shadow: 1px 1px 1px 1px #d1e6e7;
        border-radius: 10px;
        display: inline-block;
        padding-top: 6px;
    }
    #email-input {
        width: 5rem;
        margin-left: 10px;
        /*background-color: #009900;*/
    }
    #srue-button {
        font-size: 15px;
        width: 5rem;
        height: 40px;
        border: none;
        border-radius: 10px;
        outline: none;
        color: white;
        background-color: #a899fb;
    }


</style>
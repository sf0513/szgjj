<template>
    <div class="extract_success">
        <topBar></topBar>

        <img :src="src"/>
        <h1>您已成功撤销非深户销户提取</h1>
        <button class="finish">完成</button>
        <edit-text></edit-text>

    </div>
</template>

<script>
    import topBar from '../../components/top-bar.vue';
    import editText from '../../components/exit-popup.vue';

    export default {
        name: 'ExtractSuccess',
        data () {
            return {
                src: require('../../assets/appoint_success.png'),

            }
        },
        components: {
            topBar,
            editText
        }
    }
</script>

<style scoped>
    .extract_success {
        font-size: 0.28rem;
    }

    .extract_success img {
        margin-top: 1.3rem;
        width: 1.8rem;
        height: 1.8rem;
    }

    .extract_success h1 {
        margin-top: 0.3rem;
        font-size: 0.3rem;
        font-weight: bold;
        color: black;
    }

    .extract_success .finish {
        position: relative;
        width: 4rem;
        height: 35px;
        font-size: 16px;
        background-image: url(../../assets/btn.png);
        margin-top: 1.4rem;
        -webkit-transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
        transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
        border-radius: 3rem;
        cursor: pointer;
        color: white;
        background-repeat: no-repeat;
        background-position: 50% center;
        background-color: transparent;
        overflow: hidden;
        outline: none;
        border: none;
    }

</style>
<template>
    <div class="submit_success">
        <topBar></topBar>
        <NavHeader v-show="show_nav" :showImg="show_img" :title="title"></NavHeader>
        <img :src="src"/>
        <h1>{{msg}}</h1>
        <SubmitBtn class="finish" :afun="onFinish" :btn_name="btn_name"></SubmitBtn>
    </div>
</template>

<script>
    import topBar from '@/components/top-bar';
    import NavHeader from '@/components/nav-header'
    import SubmitBtn from '@/components/SubmitBtn'
    export default {
        data () {
            return {
                src: require('../../assets/appoint_success.png'),
                msg:this.$route.query.msg,
                btn_name:'完&nbsp;&nbsp;&nbsp;&nbsp;成',
                show_nav:this.$route.query.show_nav,
                show_img:this.$route.query.show_img,
                title:this.$route.query.title,
            }
        },
        components: {
            topBar,SubmitBtn,NavHeader
        },
        methods:{
            onFinish(){
                this.$router.push('./')
            }
        }
    }
</script>

<style scoped>
    .submit_success {
        font-size: 14px;
    }

    .submit_success img {
        margin-top: 1.3rem;
        width: 1.8rem;
        height: 1.8rem;
    }

    .submit_success h1 {
        margin-top: 0.3rem;
        font-size: 0.3rem;
        font-weight: bold;
        color: black;
    }
    .finish{
        margin-top: 50px;
    }
</style>
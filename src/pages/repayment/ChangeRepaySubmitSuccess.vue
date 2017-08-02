<template>
    <div class="submit_success">
        <img :src="src"/>
        <h1>{{msg}}</h1>
        <p class="info_style">{{info}}</p>
        <SubmitBtn class="finish" :afun="onFinish" :btn_name="btn_name"></SubmitBtn>
    </div>
</template>

<script>
    import SubmitBtn from '@/components/SubmitBtn'
    export default {
        props:{
             msg:String,//需要显示的文字
             info:String,//提示文字
        },
        data () {
            return {
                src: require('../../assets/appoint_success.png'),
                btn_name:'完&nbsp;&nbsp;&nbsp;&nbsp;成',
            }
        },
        components: {
            SubmitBtn
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
        background-color: white;
        height: 100%;
        width: 100%;
        position: absolute;
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
    .info_style{
        font-size: 10px;
        color: #666666;
        margin-top: 20px;
    }
</style>
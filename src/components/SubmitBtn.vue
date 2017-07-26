/*
    提交按钮公共组件，参数：
        btn_name:按钮显示文字
        afun：传入方法
*/
<template>
    <div>
        <button class="btn_style" @click="a" v-html="btn_name"></button>
    </div>
</template>
<script type="text/javascript">
	export default {
		props:{
            btn_name:String, //按钮显示文字
            afun:{
                type:Function,
            }
        },
        methods:{
            a(){
		        this.afun();
            }
        }
	}
</script>
<style type="text/css" scoped>
	.btn_style{
        /*background-color: #00afec;*/
        /*width: 4.2rem;*/
        /*color: white;*/
        /*font-size: 16px;*/
        /*border-radius: 20px;*/
        /*border: none;*/
        /*box-shadow: 0 0 3px #57a3ff;*/
        /*outline: none;*/
        /*line-height: 38px;*/
        /*font-weight: bold;*/


        background-image: url(../assets/btn.png);
        width: 4.2rem;
        color: white;
        font-size: 16px;
        border: none;
        outline: none;
        line-height: 38px;
        font-weight: bold;
        background-repeat: no-repeat;
        background-position: 50% center;
        background-color: transparent;
        border-radius: 20px;
    }
</style>
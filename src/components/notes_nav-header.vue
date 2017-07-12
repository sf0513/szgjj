/**
 * 留言头部导航组件
 */
<template>
    <div class="header_zone">
        <div class="left_header_style">
             <img src="../assets/btn_shut_down.png" class="back_btn_style"/>
             <p class="title_style">{{title}}</p>
        </div>
        <div class="right_header_style">
            <img src="../assets/btn_shut_down.png" class="back_btn_style"/>
        </div>
    </div>
</template>

<script>
	export default {
		props:{
            title:String, //导航条文本
        }
	}
</script>
<style>
    .header_zone{
        background-color: #3e3a39;
        height: 0.78rem;
        display: flex;
    }
    .left_header_style{
        /*float: left;*/
        background-color: #084CE6;
        height: 0.78rem;
        flex: 1;
    }
    .right_header_style{
        /*float: right;*/
        background-color: yellow;
        height: 0.78rem;
        flex: 1;
    }
    .back_btn_style{
        width: 0.32rem;
        height: 0.32rem;
        position: absolute;
        left: 0.1rem;

    }
    .title_style{
        color: white;
        font-size: 14px;
        /*position: absolute;*/
        /*left: 0.52rem;*/
        line-height: 0.78rem;
    }
</style>
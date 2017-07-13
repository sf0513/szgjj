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
            <img src="../assets/more.png" class="more_btn_style"/>
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
        height: 1rem;
        display: flex;
    }
    .left_header_style{
        height: 0.78rem;
        flex: 1;
    }
    .right_header_style{
        height: 0.78rem;
        flex: 1;
    }
    .back_btn_style{
        width: 0.36rem;
        height: 0.36rem;
        position: absolute;
        left: 0.08rem;
        top:0.3rem
    }
    .title_style{
        color: white;
        font-size: 18px;
        position: absolute;
        left: 0.54rem;
        line-height: 1rem;
    }
    .more_btn_style{
        width: 8px;
        height: 7px;
        position: absolute;
        right: 0.25rem;
        top: 0.5rem;
    }
</style>
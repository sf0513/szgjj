<template>
    <div class="header">
            <div class="is-left" v-if="showLeft">
            </div>
            <div class="is-center">
                <div>{{title}}</div>
                <img src="../assets/appointment-a.png" v-if='showImg'></img>
            </div>
            <div class="is-right">
            </div>
    </div>
</template>

<script>
	export default {
		props:{
            title:String, //导航条文本
            showLeft:{    //是否显示左边按钮
                type:Boolean,
                default:true,
            }, 
            showImg:{
                type:Boolean,
                default:true,
            }
        }
	}
</script>
<style>
	.header{ height: 1rem; line-height: 1rem; background-color: #fff; display: -webkit-flex; display: flex; font-size: 0.36rem; }
    .header .is-left{width: 0.7rem; height: 1rem; background: url(../assets/back_icon.png) no-repeat center center;}
    .header .is-center{flex: 1; -webkit-flex: 1; position: relative;}
    .header .is-center img{display: inline-block; width: 0.26rem; height: 0.26rem; line-height: 0.26rem; position: absolute; left: 4.2rem; top: 0.36rem;}
    .header .is-right{width: 0.7rem; height: 1rem;}
</style>
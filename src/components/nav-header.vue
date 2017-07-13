/**
 * 头部导航组件
 */
<template>
    <div class="header" v-bind:class="{'color':false}">
            <div class="is-left" v-if="showLeft" @click='back()'>
            </div>
            <div class="is-center">
                <div>{{title}}</div>
                <img :src='src' v-if='showImg'></img>
            </div>
            <div class="is-right">
            </div>
    </div>
</template>

<script>
	export default {
		props:{
            title:String, //导航条文本
            src:String,     //中间小图标
            showLeft:{    //是否显示左边按钮
                type:Boolean,
                default:true,
            }, 
            showImg:{       //是否显示中间文字旁边的图片
                type:Boolean,
                default:true,
            },
            color:{
                type:Boolean,
                default:false,
            }
        },
        methods:{
            back:function(){
                history.back();
            }
        }
	}
</script>
<style>
	.header{ height: 1rem; line-height: 1rem; background-color: #fff; display: -webkit-flex; display: flex; font-size: 0.36rem; }
    .header .is-left{width: 0.7rem; height: 1rem; background: url(../assets/back_icon.png) no-repeat center center; background-size: 0.29rem 0.29rem;}
    .header .is-center{flex: 1; -webkit-flex: 1; position: relative;}
    .header .is-center img{display: inline-block; width: 0.26rem; height: 0.26rem; line-height: 0.26rem; position: absolute; left: 4.2rem; top: 0.36rem;}
    .header .is-right{width: 0.7rem; height: 1rem;}
    .color{background:#efefef;}
</style>
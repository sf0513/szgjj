/**
 * 顶部bar组件
 */
<template>
	<div>
		<div class="top-bar">
			<img src="../assets/top_bar_img.jpg" height="48">
			<span class="text">深圳市住房公积金管理中心</span>
			<input type="button" value="退出" @click="loginOut()">
		</div>
		<exit-popup></exit-popup>
	</div>
</template>
<script type="text/javascript">
import exitPopup from '../components/exit-popup.vue';
export default{
	data(){
		return{
			showFlag:true,
		}
	},
	methods:{
		loginOut:function(){
			debugger;
			//this.$router.push('/')
			//this.showFlag=true;
		}
	},
	components:{
		exitPopup
	}
}
</script>
<style type="text/css">
	.top-bar{ height: 0.7rem; line-height: 0.7rem; background: url(../assets/top_bar_bg.jpg) ; display: -webkit-flex; display: flex;}
	.top-bar img{width: 0.48rem; height: 0.48rem; float: left; margin: 0.11rem 0.11rem 0 0.2rem;}
	.top-bar span{font-size: 0.26rem; color: #fff; flex: 1; -webkit-flex: 1; text-align: left;}
	.top-bar input{width: 0.8rem; height: 0.4rem; float: right; background: #00a0e9; font-size: 0.2rem; color: #fff; border-radius: 0.2rem; margin:0.16rem 0.2rem 0 0; box-shadow: 0.05rem 0.05rem 0.05rem #00419d;}
</style>
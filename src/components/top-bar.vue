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
		<div class="pop"  v-if='showFlag'>
			<div class="confirm">
				<div class="title"></div>
				<div class="cont">
					<div class="tip">是否退出？</div>
					<input type="button" value="确定" class="sure fl" @click='quit()'>
					<input type="button" value="取消" class="cancel fr" @click='showFlag=false'>
				</div>
			</div>
			<div class="overlay" ></div>
		</div>
	</div>
</template>
<script type="text/javascript">

export default{
	data(){
		return{
			showFlag:false
		}
	},
	props:{
		
	},
	methods:{
		loginOut:function(){
			this.showFlag = true;
		},
		quit:function(){
			this.$router.push('/');
		}
	}
}
</script>
<style type="text/css">
.top-bar{ height: 0.7rem; line-height: 0.7rem; background: url(../assets/top_bar_bg.jpg) ; display: -webkit-flex; display: flex;}
.top-bar img{width: 0.48rem; height: 0.48rem; float: left; margin: 0.11rem 0.11rem 0 0.2rem;}
.top-bar span{font-size: 0.26rem; color: #fff; flex: 1; -webkit-flex: 1; text-align: left;}
.top-bar input{width: 0.8rem; height: 0.4rem; float: right; background: #00a0e9; font-size: 0.2rem; color: #fff; border-radius: 0.2rem; margin:0.16rem 0.2rem 0 0; box-shadow: 0.05rem 0.05rem 0.05rem #00419d;}


.overlay { position: fixed; top: 0;  left: 0; width: 100%;  height: 100%; background: rgba(0,0,0,0.2); z-index: 200;}

.confirm{position: fixed; top: 45%; left: 50%; width: 7.12rem; height: 3.56rem; visibility: visible; -webkit-transform: translate(-50%,-50%);  -ms-transform: translate(-50%,-50%);  transform: translate(-50%,-50%); z-index: 201; border-radius: 0.1rem; background: #fff; box-shadow: 0.03rem 0.03rem 0.03rem #191818; }
.confirm .title{height: 0.6rem; background: url(../assets/pop_bg.jpg) repeat-x; border-radius: 0.1rem;}
.confirm .cont{height: 2.96rem; }
.confirm .cont .tip{ height: 2rem; font-size: 0.34rem; line-height: 2rem;  }
.confirm .cont input{width: 1.4rem; height: 0.6rem; background: #00afec; border-radius: 0.22rem; color:#fff; font-size: 0.32rem;}
.confirm .cont .sure{margin-left: 1.8rem;}
.confirm .cont .cancel{margin-right: 1.8rem;}
</style>
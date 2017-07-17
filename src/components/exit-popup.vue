<template>
	<div class="pop" >
		<div class="confirm" :class="{'show':showFlag}">
			<div class="title"></div>
			<div class="cont">
				<div class="tip">是否退出？</div>
				<input type="button" value="确定" class="sure fl" @click=''>
				<input type="button" value="取消" class="cancel fr" @click='showFlag=false'>
			</div>
		</div>
		<div class="overlay" v-if='showFlag'></div>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return{
			showPop:false,
			showFlag:false,
		}
	},
	porps:{
		content:String,
	}
}
</script>
<style type="text/css">
.overlay { position: fixed; top: 0;  left: 0; width: 100%;  height: 100%; background: rgba(0,0,0,0.2); z-index: 200;}

.confirm{position: fixed; top: 45%; left: 50%; width: 7.12rem; height: 3.56rem; visibility: hidden; -webkit-transform: translate(-50%,-50%);  -ms-transform: translate(-50%,-50%);  transform: translate(-50%,-50%); z-index: 201; border-radius: 0.1rem; background: #fff; box-shadow: 0.03rem 0.03rem 0.03rem #191818; }
.confirm .title{height: 0.6rem; background: url(../assets/pop_bg.jpg) repeat-x; border-radius: 0.1rem;}
.confirm .cont{height: 2.96rem; }
.confirm .cont .tip{ height: 2rem; font-size: 0.34rem; line-height: 2rem;  }
.confirm .cont input{width: 1.4rem; height: 0.6rem; background: #00afec; border-radius: 0.22rem; color:#fff;}
.confirm .cont .sure{margin-left: 1.8rem;}
.confirm .cont .cancel{margin-right: 1.8rem;}
.show {visibility: visible;}
</style>
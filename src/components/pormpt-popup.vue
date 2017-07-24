/**
 * 提示弹窗
 * 传出参数：
 * tip：提示信息
 * showTipFlag：是否显示提示弹窗
 *
 * 传入参数
 * on-flag-change：
 */
<template>
	<div class=""  v-if='showTipFlag'>
		<div class="tip-pop">
			<div class="title">提 示</div>
			<div class="cont">
				<div class="tip">{{tip}}</div>
				<input type="button" value="确定" @click='change()'>
			</div>
		</div>
		<div class="overlay"></div>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return{
			myShowTipFlag:this.showTipFlag
		}
	},
	props:{
		tip:String,
		showTipFlag:{    //是否显示弹出框
            type:Boolean,
            default:false
        }
	},
	watch:{
		showTipFlag(val){
			this.myShowTipFlag = val;
		},
		myShowTipFlag(val){
			this.$emit("on-flag-change",val);
		}
	},
	methods:{
		change(){
			this.myShowTipFlag = !this.myShowTipFlag;
		}
	}
}
</script>
<style type="text/css" scoped>
.overlay { position: fixed; top: 0;  left: 0; width: 100%;  height: 100%; background: rgba(0,0,0,0.2); z-index: 200;}

.tip-pop{position: fixed; top: 45%; left: 50%; width: 7.12rem; height: 3.56rem; visibility: visible; -webkit-transform: translate(-50%,-50%);  -ms-transform: translate(-50%,-50%);  transform: translate(-50%,-50%); z-index: 201; border-radius: 0.1rem; background: #fff; box-shadow: 0.03rem 0.03rem 0.03rem #191818; }
.tip-pop .title{height: 0.6rem; line-height: 0.6rem; text-align: center; background: url(../assets/pop_bg.jpg) repeat-x; border-radius: 0.1rem; font-size: 0.32rem;}
.tip-pop .cont{height: 2.96rem; position: relative;}
.tip-pop .cont .tip{ height: 2rem; font-size: 0.34rem; line-height: 2rem;  }
.tip-pop .cont input{width: 1.4rem; height: 0.6rem; display: inline-block; background: #00afec; border-radius: 0.22rem; color:#fff; font-size: 0.32rem; position: relative; top:-0.3rem; }

</style>
<template>
	<div class="mode-of-repayment-ok">
		<top-bar></top-bar>
		<nav-header :title="title" :showLeft="true" :showImg='false'></nav-header>
		<div class="mode-of-repayment-ok-content">
			<img src="../../assets/card_successful@2x.png" />
			<p>您已成功办理还款方式变更</p>
			<button class="submit" @click="success">完  成</button>
		</div>
	</div>
</template>
<script>

import navHeader from '../../components/nav-header.vue';
import topBar from '../../components/top-bar.vue';
import cell from '../../components/cell';
import cellInput from '../../components/cell-input';
export default{
	name:'modeOfRepayment',
	data(){
		return{
			title:'还款方式变更',
		}
	},
	methods:{
		success(){
			this.$router.push('/');
		}
		
	},
	components:{
		navHeader,
		topBar,
		cell,
		cellInput
	}
}
</script>
<style lang="less">
.mode-of-repayment-ok{
	background-color: #fff;
	position: absolute;
    top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	.mode-of-repayment-ok-content{
		img{
			width: 77px;
			margin-top: 50px;
		}
		p{
			font-size: 18px;
			margin-top: 15px;
		}
		.submit{
			background-image: url(../../assets/success-btn-normal@2x.png);
			background-repeat: no-repeat;
		    background-position: center;
		    background-size: cover;
			border-style: none;	
		    border-radius: 25px;
		    color: #fff;
		    font-size: 18px;
		    height: 60px;
		    width: 280px;
		    margin-top: 80px;
		}
	}
	
}
</style>
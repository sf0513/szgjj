<template>
	<div class="mode-of-repayment">
		<top-bar></top-bar>
		<nav-header :title="title" :showLeft="true" :showImg='false'></nav-header>
		<cell leftString="原还款人姓名" :centerString="payeeName" :isShowRight="false" ></cell>
		<cell leftString="原还款人方式" :centerString="oldRepay"  :isShowRight="false" :isLine="false"></cell>
		<cell class="newPayee" leftString="新还款人方式" :centerString="newRepay"  :isShowRight="false" :isLine="false"></cell>
		
		<cell  class="change" centerString="变更前" rightString="变更后" :isShowLeft="false"></cell>
		<cell leftString="月还款额（元）" :centerString="monthlyPayment" rightString="0" ></cell>
		<cell leftString="贷款到期日" :centerString="maturityDate" rightString="0" ></cell>
		<cell leftString="剩余贷款利息总和" :centerString="sum" rightString="0" :isLine="false"></cell>
		<div>
			<button class="submit">提  交</button>
		</div>
		
	</div>
</template>
<script>

import navHeader from '../../components/nav-header.vue';
import topBar from '../../components/top-bar.vue';
import cell from '../../components/cell';
export default{
	name:'modeOfRepayment',
	data(){
		return{
			title:'还款方式变更',
			payeeName:'王小华',
			oldRepay:'等额本金',
			newRepay:'等额本息',
			monthlyPayment:'￥4,586.94',
			maturityDate:'2035-12-31',
			maturityDate:'2035-12-31',
			sum:'￥419,767.53',
		}
	},
	components:{
		navHeader,
		topBar,
		cell
	}
}
</script>
<style type="text/css">
.mode-of-repayment{
	background-color: #f5f5f5;
	position: absolute;
    top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
.newPayee{
	margin-top: 15px;
}
.newPayee .cell-left{
	color:red;
}
.change{
	margin-top: 50px;
}
.submit{
	background-image: url(../../assets/success-btn-normal@2x.png);
	border-style: none;	
    border-radius: 25px;
        height: 60px;
    width: 5.6rem;
        color: #fff;
    font-size: 18px;
}
</style>
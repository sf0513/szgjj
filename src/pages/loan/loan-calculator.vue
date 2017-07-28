<template>
	<div class="calculator">
		<top-bar></top-bar>
		<div class="calculator-header">
			<div>等额本息</div>
			<div>等额本金</div>
		</div>
		<div class="repayment">
			<div>每月还款金额为</div>
			<div style="font-size: 18px;">{{repayment}}</div>
		</div>
		<cell-input leftString="贷款类型" rightText='组合贷款 >' :pickerFunc="aa"></cell-input>
		<cell-input leftString="商贷金额（万元）" input="输入贷款金额"></cell-input>
		<cell-input leftString="公积金贷款额（万元)" input="输入贷款金额"></cell-input>
		<cell-input leftString="期限（年）" rightText='5>' :pickerFunc="aa"></cell-input>
		<cell-input leftString="利率" rightText='基准利率' :pickerFunc="aa"></cell-input>
		<cell-input leftString="商贷利率（%）" rightText='4.75' :pickerFunc="aa"></cell-input>
		<cell-input leftString="公积金利率（%）" rightText='2.75' :pickerFunc="aa" :isLine="false"></cell-input>

		<p class="tips">以上为央行2015年最新的贷款基准利率</p>

	</div>
</template>
<script>
	import navHeader from '../../components/nav-header.vue';
	import topBar from '../../components/top-bar.vue';
	import cell from '../../components/cell';
	import cellInput from '../../components/cell-input';
	export default {
		name: 'modeOfRepayment',
		data() {
			return {
				repayment: '￥3，216.42',
			}
		},
		methods: {
			aa() {
				alert(1)
			}

		},
		components: {
			navHeader,
			topBar,
			cell,
			cellInput
		}
	}
</script>
<style lang="less">
	/*@import url('../../../static/css/base.less');*/
	
	.calculator {
		background-color: #f5f5f5;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		.calculator-header {
			font-size: 15px;
			display: flex;
			div {
				flex: 1;
				height: 35px;
				line-height: 35px;
				margin: 0 10px;
				color: orange;
				border-bottom: 4px solid orange;
			}
		}
		.sel {
			color: orange;
			border-bottom: 4px solid orange;
		}
		.repayment {
			display: flex;
			text-align: left;
			div {
				flex: 1;
				margin: 30px 0;
				padding-left: .3rem;
			}
			font-size: 15px;
		}
		.tips {
			font-size: 12px;
			margin: 30px;
			text-align: left;
		}
	}
</style>
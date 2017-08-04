<template>
	<div class="loan-trial">
		<top-bar></top-bar>
		<div class="trial-header">
			<ul>
				<li v-for="(title,index) in menuTitls" @click="menuClick(title, index)" :class="{active: isActive === index}">{{title}}</li>
			</ul>
		</div>
		<div class="loan-amount">
			<span>您的可贷金额为</span>
			<span>￥69,0000.00</span>
		</div>
		<cell leftString='公积金余额:' :isLine='true' centerString='￥10,0000.00'></cell>
		<cell leftString='缴存基数:' :isLine='true' centerString='￥4,0000.00'></cell>
		<div class="applyPerson" :class="{borderB: isShowBorder}">
			<span>共同申请人 :</span>
			<i @click="showHide()"></i>
		</div>
		<div class="hide" v-show='isShowFlag'>
			<div class="hideWrap">
				<div class="item1">
					<span>共贷人1缴存基数:</span>
					<input type="" placeholder="请输入" name="">
				</div>
				<div class="item1">
					<span>公积金账户余额:</span>
					<input type="" placeholder="请输入金额" name="">
				</div>
			</div>
			<i class="delete" @click='hideHide()'></i>
		</div>
		<div class="hr30-efefef"></div>
		<cell leftString='家庭名下房产套数' :isLine='true' centerString='1'></cell>
		<cell leftString='还款期数:' :isLine='true' centerString='240'></cell>
		<div v-show="page">
			<cell-input  leftString="购房总价（万元)：" input="请输入金额"></cell-input>
			<cell-input  leftString="首付款（万元)：" :isLine='false' input="请输入金额"></cell-input>
		</div>
		<div v-show="!page">
			<cell-input  leftString="2016年9月应还款本金：" input="请输入金额"></cell-input>
			<cell-input  leftString="原商业贷款余额（万元)：" input="请输入金额"></cell-input>
			<cell-input  leftString="原剩余还款期数：" :isLine='false' input="请输入金额"></cell-input>
		</div>
	</div>
</template>
<script type="text/javascript">
import topBar from '../../components/top-bar.vue';
import cell from '../../components/cell';
import cellInput from '../../components/cell-input';
export default {
	name: '',
	data() {
		return {
			menuTitls:["公积金贷款","商业贷款转公积金贷款"],
			isActive: 0,
			isShowFlag: false,
			isShowBorder: false,
			page: true,
		}
	},
	methods: {
		menuClick:function(title,index){
			this.isActive = index;
			this.page = !this.page;
		},
		showHide:function(){
			this.isShowFlag = true;
			this.isShowBorder = true;
		},
		hideHide:function(){
			this.isShowFlag = false;
			this.isShowBorder = false;
		}
	},
	components: {
		topBar,
		cell,
		cellInput
	}
}
</script>
<style type="text/css">
.loan-trial{ font-size: 0.28rem;}
.hr30-efefef{height: 0.3rem; background: #efefef;}
.trial-header{height: 0.9rem; background: #efefef;}
.trial-header ul{height: 0.6rem; line-height: 0.6rem;}
.trial-header li{float: left; width: 3.35rem; margin:0 0.2rem;}
.trial-header .active{border-bottom:0.06rem solid #f7ab00; height: 0.54rem; color: #f7ab00;}
.loan-amount{height: 1.2rem; line-height: 1.2rem; background: #efefef; margin-top: -0.02rem;}
.loan-amount span{display: inline-block;}
.loan-amount span:nth-child(1){flex: 1; -webkit-flex: 1; font-size: 0.34rem; color: #727171;}
.loan-amount span:nth-child(2){width: 3.75rem; font-size: 0.4rem; color: #000;}
.applyPerson{height: 0.9rem; line-height: 0.9rem; font-size: 0.32rem; color:#333;}
.applyPerson span{display: inline-block; width: 50%; float: left;}
.applyPerson i{display: inline-block; width: 0.4rem; height: 0.4rem; background: url(../../assets/card_add@2x.png) no-repeat; background-size: 0.4rem 0.4rem; margin-top: 0.25rem; float: left;}
.borderB{border-bottom:1px solid #ccc; margin: 0 0.3rem;}
.hideWrap{width: 6.4rem; padding: 0 0.2rem;  }
.hide{ position: relative;}
.delete{position: absolute; top:0.52rem; right: 0.3rem; display: inline-block; width: 0.4rem; height: 0.4rem; background: url(../../assets/card_delete@2x.png) no-repeat; background-size: 0.4rem 0.4rem;}
.hideWrap .item1,.hideWrap .item2{border-bottom:1px solid #ccc; }
.hideWrap .item1 span,.hideWrap .item2 span{margin-right: 0.2rem; }
</style>
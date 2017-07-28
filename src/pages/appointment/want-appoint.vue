<template>
	<div class="appointment">
		<div class="appoint-head">
			<top-bar></top-bar>
			<div class="hr30-efefef"></div>
			<div class="head">请选择业务</div>
			<div class="hr30-efefef border-b"></div>
		</div>
		<div class="item">
			<ul>
				<li class="fl" v-for='item in serviceTypeArr'>
					<img :src="item.image">
					<span>{{item.name}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>

import navHeader from '../../components/nav-header.vue';
import topBar from '../../components/top-bar.vue';
export default{
	name:'appointment',
	data(){
		return{
			// serviceTypeArr:[
			// 	{name:'自助协议' , image:require("../../assets/appoint/card_business_1@2x.png")},
			// 	{name:'按月还贷' , image:require("../../assets/appoint/card_business_2@2x.png")},
			// 	{name:'非按月还贷' , image:require("../../assets/appoint/card_business_3@2x.png")},
			// 	{name:'本市购房提取' , image:require("../../assets/appoint/card_business_4@2x.png")},
			// 	{name:'异地购房提取' , image:require("../../assets/appoint/card_business_5@2x.png")},
			// 	{name:'缴存证明' , image:require("../../assets/appoint/card_business_6@2x.png")},
			// 	{name:'异地转入' , image:require("../../assets/appoint/card_business_7@2x.png")},
			// 	{name:'异地转出' , image:require("../../assets/appoint/card_business_7@2x.png")},
			// 	{name:'更多' , image:require("../../assets/appoint/card_business_8@2x.png")},
			// ]
			serviceTypeArr:[],
		}
	},
	created: function() {
      	this.$http.get('../../data/appoint/want-appoint.json').then((response) => {
        	this.json = response.body.result.serviceTypeArr;
        	this.serviceTypeArr=eval("(" + json +")");
      	}).catch(function(response) {
        	console.log(response)
      	});
	},
	components:{
		navHeader,
		topBar
	}
}
</script>
<style type="text/css">
.appointment{width: 7.5rem; font-size: 0.34rem;}
.appointment .appoint-head .head{height: 0.9rem; line-height: 0.9rem; background: #f8f8f8; text-align: left; text-indent: 0.8rem;}
.hr30-efefef{height: 0.3rem; background: #efefef;}
.border-b{border-bottom: 0.01rem solid #c9caca;}

.item ul{width: 7.5rem; font-size: 0.35rem;}
.item li{width: 2.48rem; height: 2.48rem; border-right: 0.01rem solid #c9caca; border-bottom: 0.01rem solid #c9caca;  position: relative;}

.item img{width: 0.76rem; height: 0.73rem; position: absolute; left: 0.96rem; top: 0.68rem;}
.item span{ display: inline-block; width: 2.5rem; margin-top: 1.94rem;  text-align: center;}
</style>
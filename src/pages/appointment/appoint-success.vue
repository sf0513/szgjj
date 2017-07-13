<template>
	<div class="appoint-success">
		<topBar></topBar>
		<div>
			<div class="cont-top">
				<img :src='src'>
				<h3>恭喜您！预约成功</h3>
			</div>
			<ul class="content">
				<li v-for="item in dataArr">
					<span class="fl">{{item.title}} :</span> 
					<span class="fl">{{item.cont}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import topBar from '../../components/top-bar.vue';
export default{
	data(){
		return{
			src:require('../../assets/appoint_success.png'),
			dataArr:[
				{title:'预约业务' , cont:'非按月还贷提取'},
				{title:'预约单号' , cont:'0987'},
				{title:'预约网点' , cont:'非按月还贷提取'},
				{title:'预约时间' , cont:'非按月还贷提取'},
			]
		}
	},
	components:{
		topBar
	}
}
</script>
<style type="text/css">
.appoint-success{font-size: 0.28rem;}
.appoint-success .cont-top{height: 4.54rem; background: #fff;}
.appoint-success .cont-top img{margin-top: 1.04rem; width: 1.8rem; height: 1.8rem;}
.appoint-success .cont-top h3{font-size: 0.3rem; margin-top: 0.36rem;}
.appoint-success .content {background: #f7f8f8; }
.appoint-success .content li{height: 0.89rem; line-height: 0.9rem; border-bottom: 0.01rem solid #c9caca; margin:0 0.2rem;}
.appoint-success .content li:last-child{border-bottom: none; height: 0.9rem; line-height: 0.9rem;}
.appoint-success .content span:nth-child(1){text-indent: 0.4rem;}
.appoint-success .content span:nth-child(2){margin-left:0.9rem;}
</style>
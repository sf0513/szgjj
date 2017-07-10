<template>
	<div class="my-appointment">
		<div class="my-appointment-head">
			<top-bar></top-bar>	
		</div>
		<div class="appoint-tabs">
			<div class="tabs">
				<ul>
					<li class="active">预约代办</li>
					<li @click='completeAppoint'>已完成预约</li>
				</ul>
				<div class="hr30"></div>
			</div>
			<div class="pages">
				<div class="page">
					<div class="page-tit">
						<div class="title">
							<img src="../../assets/appointment-icon.png">
							<span>预约代办</span>
							<i>2 条</i>
						</div>
						<div class="hr30"></div>
					</div>
					<div class="page-cont">
						<ul>
							<li>
								<span>订单编号</span>
								<span>0987</span>
							</li>
							<li>
								<span>业务类型</span>
								<span>租房业务</span>
							</li>
							<li>
								<span>办理银行</span>
								<span>中国银行</span>
							</li>
							<li>
								<span>办理网点</span>
								<span class="network-dot">
									<i>中国银行侨香支行</i>
									<div class="addr">深圳市福田区侨香路123号  0755-123123</div>
								</span>
							</li>
							<li>
								<span>预约时间</span>
								<span><i class="red-color">2016-04-05</i> <i>上午</i></span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="btn-area">
				<input type="button" name="" value="取 消">
			</div>
			<div class="map"></div>
		</div>
	</div>
</template>
<script>
import topBar from '../../components/top-bar.vue';
export default{
	data(){
		return{

		}
	},
	methods:{
		completeAppoint:function(){
			this.$router.push('/appointment/completeAppoint')
		}
	},
	components:{
		topBar
	}
}
</script>
<style type="text/css">
.my-appointment{font-size: 0.28rem;}
.hr30{height: 0.3rem; background: #fff;}
.appoint-tabs .tabs{height: 0.9rem; background: #fff; font-size: 0.28rem;}
.appoint-tabs .tabs ul{height: 0.6rem; line-height: 0.6rem; }
.appoint-tabs .tabs li{float: left; width: 3.35rem; margin:0 0.2rem;}
.appoint-tabs .tabs .active{border-bottom:0.06rem solid #f7ab00; height: 0.54rem; color: #f7ab00;}
.page .page-tit .title{height: 0.6rem; line-height: 0.6rem; background: #f7f8f8; }
.page .page-tit .title img{display: inline-block; width: 0.4rem; height: 0.3rem; margin: 0.15rem 0.3rem 0 0.2rem;}
.page .page-tit .title span{margin-right: 1.12rem;}
.page .page-tit .title i{color: #008cd6;}
.page .page-tit .title img,.page .page-tit .title span,.page .page-tit .title i{float: left;}

.page .page-cont{}
.page .page-cont li{height: 0.9rem; overflow: hidden;}
.page .page-cont li:nth-of-type(odd){background: #f7f8f8;}
.page .page-cont li:nth-of-type(even){background: #fff; }
.page .page-cont li span{float: left;  line-height: 0.9rem;}
.page .page-cont li span:nth-child(1){margin-left: -0.45rem; width: 4rem;}
.page .page-cont li span:nth-child(2){text-align: left; width: 3.5rem;}
.network-dot{font-size: 0.24rem; margin-top: 0.1rem; line-height: 0.4rem !important; }
.network-dot .addr{font-size: 0.18rem;}

.btn-area{height: 1.56rem;}
.btn-area input{width: 2.8rem; height: 0.7rem; margin-top: 0.3rem; background: #00afec; border-radius: 0.4rem; font-size: 0.36rem; color:#fff;}

.map{height: 3.5rem; background: pink;}
</style>
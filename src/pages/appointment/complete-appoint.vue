<template>
	<div class="my-appointment">
		<div class="my-appointment-head">
			<top-bar></top-bar>	
		</div>
		<div class="appoint-tabs">
			<div class="tabs">
				<ul>
					<li @click='myAppoint'>预约办结</li>
					<li class="active">已完成预约</li>
				</ul>
				<div class="hr30-efefef"></div>
			</div>
			<div class="pages">
				<div class="page">
					<div class="page-tit">
						<div class="title">
							<img src="../../assets/appointment_icon2.png">
							<span>预约办结</span>
							<i>2 条</i>
						</div>
						<div class="hr30-efefef"></div>
					</div>
					<div class="page-cont">
						<div class="item">
							<div class="item-cont">
								<span>时间</span>
								<span><i class="red-color">2015-11-15</i> <i>上午</i></span>
							</div>
							<div class="item-cont">
								<span>业务类型</span>
								<span>忘记密码</span>
							</div>
							<div class="item-cont">
								<span>业务网点</span>
								<span>中国银行侨香支行</span>
							</div>
						</div>
						<div class="hr30-efefef"></div>
						<div class="item">
							<div class="item-cont">
								<span>时间</span>
								<span><i class="red-color">2015-11-15</i> <i>上午</i></span>
							</div>
							<div class="item-cont">
								<span>业务类型</span>
								<span>忘记密码</span>
							</div>
							<div class="item-cont">
								<span>业务网点</span>
								<span>中国银行侨香支行</span>
							</div>
						</div>
					</div>
					<div class="footer"></div>
				</div>
			</div>
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
		myAppoint:function(){
			this.$router.push('/appointment/myAppointment')
		}
	},
	components:{
		topBar
	}
}
</script>
<style type="text/css" scoped>
.my-appointment{font-size: 0.28rem;}
.hr30-efefef{height: 0.3rem; background: #efefef;}
.appoint-tabs .tabs{height: 0.9rem; background: #efefef; font-size: 0.28rem;}
.appoint-tabs .tabs ul{height: 0.6rem; line-height: 0.6rem; }
.appoint-tabs .tabs li{float: left; width: 3.35rem; margin:0 0.2rem;}
.appoint-tabs .tabs .active{border-bottom:0.06rem solid #f7ab00; height: 0.54rem; color: #f7ab00;}
.page .page-tit .title{height: 0.6rem; line-height: 0.6rem; background: #f7f8f8; }
.page .page-tit .title img{display: inline-block; width: 0.4rem; height: 0.3rem; margin: 0.15rem 0.3rem 0 0.2rem;}
.page .page-tit .title span{margin-right: 1.12rem;}
.page .page-tit .title i{color: #008cd6;}
.page .page-tit .title img,.page .page-tit .title span,.page .page-tit .title i{float: left;}

.page-cont .item-cont{height: 0.89rem; line-height: 0.9rem; margin: 0 0.2rem; border-bottom: 0.01rem solid #c9caca; text-align: left;}
.page-cont .item div:last-child{height: 0.9rem; border-bottom: none;}
.page-cont .item-cont span:nth-child(1){float: left; width: 2.95rem; padding-left: 0.6rem; }
.page-cont .item-cont span:nth-child(2){float: left; width: 3.1rem; padding-left: 0.45rem;}

.footer{height: 3.82rem; background: #efefef;}
</style>
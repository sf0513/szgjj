<template>
	<div class="change-appoint">
		<div>
			<top-bar></top-bar>
			<nav-header :title="title" :showLeft="true" :showImg='false'></nav-header>
		</div>
		<div class="cont clear">
			<div class="fl l-side">
				<ul>
					<li>预约业务</li>
					<li @click="selectArea">预约区域</li>
					<li @click="selectBack">预约银行</li>
					<li @click="selectDot">预约网点</li>
					<li>预约时间</li>
				</ul>
			</div>
			<div class="fl r-side">
				<ul>
					<li>租房业务<i class="bg"></i></li>
					<li @click="selectArea">福田区<i class="bg"></i></li>
					<li @click="selectBack">中国银行<i class="bg"></i></li>
					<li @click="selectDot">中国银行侨香支行<i class="bg"></i></li>
					<li><i class="red-color">2015-12-20</i>&nbsp;&nbsp;&nbsp;&nbsp;<span>上午</span><i class="bg"></i></li>
				</ul>
			</div>
		</div>
		<div class="btn-area">
			<input type="button" name="" value="取 消">
		</div>
		<div class="map"></div>
	</div>
</template>
<script>

import navHeader from '../../components/nav-header.vue';
import topBar from '../../components/top-bar.vue';
export default{
	name:'appointment',
	data(){
		return{
			title:'修改预约'
		}
	},
	methods:{
		selectBack:function(){
			this.$router.push('/appointment/appointBank')
		},
		selectArea:function(){
			this.$router.push('/appointment/appointArea')
		},
		selectDot:function(){
			this.$router.push('/appointment/appointDot')
		}
	},
	components:{
		navHeader,
		topBar
	}
}
</script>
<style type="text/css">
.change-appoint{font-size: 0.28rem;}
.change-appoint .cont .l-side{width: 3.58rem; display: inline-block; }
.change-appoint .cont .r-side{width: 3.92rem; display: inline-block; }
.cont .l-side li{ text-align: center; margin-left: -1rem;}
.cont .l-side li,.cont .r-side li{height: 0.9rem; line-height: 0.9rem;}
.cont .r-side li{ text-align: left; }
.bg{display: inline-block; width: 0.92rem; height: 0.9rem; background: url(../../assets/arrow_right.png) no-repeat left center; background-size: 0.12rem 0.12rem; float: right;}
.cont .l-side li:nth-of-type(odd) , .cont .r-side li:nth-of-type(odd){background: #f7f8f8;}
.cont .l-side li:nth-of-type(even) , .cont .r-side li:nth-of-type(even){background: #fff;}


.btn-area{height: 1.85rem;}
.btn-area input{width: 2.8rem; height: 0.7rem; margin-top: 0.3rem; background: #00afec; border-radius: 0.4rem; font-size: 0.36rem; color:#fff;}

.map{height: 4rem; background: pink;}
</style>
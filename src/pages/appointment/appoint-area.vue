<template>
	<div class="">
		<div>
			<top-bar></top-bar>
			<nav-header :title="title" :showLeft="true" :showImg='true' :src='image' color='true'></nav-header>
		</div>
		<div class="wrap">
			<div class="top">请选择预约网点的区域</div>
			<div class="hr30-efefef"></div>
			<ul class="item">
				<li v-for='item in areaArr'>{{item.title}}</li>
			</ul>
			<div class="footer"></div>
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
			title:'预约区域',
			image:require('../../assets/appointment-a.png'),
			areaArr:[
				{title:'福田区'},
				{title:'龙岗区'},
				{title:'罗湖区'},
				{title:'南山区'},
				{title:'盐田区'},
				{title:'宝安区'},
			]
		}
	},
	components:{
		navHeader,
		topBar
	}
}
</script>
<style type="text/css">
.hr30-efefef{height: 0.3rem; background: #efefef;}
.wrap{font-size: 0.28rem;}
.wrap .top{height: 0.9rem; background: #f7f8f8; line-height: 0.9rem; font-size: 0.32rem; text-align:left; text-indent: 0.46rem;}
.item li{height: 0.89rem; line-height: 0.9rem; margin: 0 0.2rem; border-bottom: 0.01rem solid #c9caca; text-align: left; text-indent: 0.7rem; background: url(../../assets/arrow_right.png) no-repeat right 0.7rem center; background-size: 0.12rem 0.12rem;}
.item li:last-child{height: 0.9rem; border-bottom: none;}

.footer{height: 2.5rem; background: #efefef;}
</style>
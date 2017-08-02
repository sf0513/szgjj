<template>
	<div class="">
		<div>
			<top-bar></top-bar>
			<nav-header :title="title" :showLeft="true" :showImg='true' :src='image' :isshowcolor='false'></nav-header>
		</div>
		<div class="wrap">
			<ul class="item clear">
				<li v-for='item in areaArr'>{{item.title}} <img class="pic" :src='item.pic'></img><i class="bg"></i> </li>
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
			title:'更多业务',
			image:require('../../assets/appointment-a.png'),
			areaArr:[
				{title:'业务A' , pic:require('../../assets/appoint/moreService/card_a@2x.png')},
				{title:'业务B' , pic:require('../../assets/appoint/moreService/card_b@2x.png')},
				{title:'业务C' , pic:require('../../assets/appoint/moreService/card_c@2x.png')},
				{title:'业务D' , pic:require('../../assets/appoint/moreService/card_d@2x.png')},
				{title:'业务E' , pic:require('../../assets/appoint/moreService/card_e@2x.png')},
				{title:'业务F' , pic:require('../../assets/appoint/moreService/card_f@2x.png')},
			]
		}
	},
	components:{
		navHeader,
		topBar
	}
}
</script>
<style type="text/css" scoped>
.hr30-efefef{height: 0.3rem; background: #efefef;}
.wrap{font-size: 0.28rem;}
.wrap .top{height: 0.9rem; background: #f7f8f8; line-height: 0.9rem; font-size: 0.32rem; text-align:left; text-indent: 0.46rem;}
.item li{height: 0.89rem; line-height: 0.9rem; text-align: left; text-indent: 0.5rem; }
.item li:nth-of-type(odd){background: #f7f8f8 ; }
.item li:nth-of-type(even){}
.bg{display: inline-block; width: 0.92rem; height: 0.88rem; background: url(../../assets/arrow_right.png) no-repeat left center; background-size: 0.12rem 0.12rem; float: right;}
.item .pic{display: inline-block; width: 0.4rem; height: 0.4rem; float: left; margin-left:0.4rem; margin-top: 0.25rem;}

</style>
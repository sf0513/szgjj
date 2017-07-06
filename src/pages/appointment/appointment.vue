<template>
	<div class="appointment">
		<div class="appoint-head">
			<top-bar></top-bar>
			<nav-header :title="title" :showLeft="true" :showImg='false'></nav-header>
		</div>
		<div class="item">
			<ul>
				<li>
					<img src="../../assets/appointment-a.png">
					<span>a业务</span>
				</li>
				<li>
					<img src="../../assets/appointment-a.png">
					<span>b业务</span>
				</li>
				<li class="no-border">
					<img src="../../assets/appointment-a.png">
					<span>c业务</span>
				</li>
				<li>
					<img src="../../assets/appointment-a.png">
					<span>d业务</span>
				</li>
				<li>
					<img src="../../assets/appointment-a.png">
					<span>e业务</span>
				</li>
				<li class="no-border border-b">
					<img src="../../assets/appointment-a.png">
					<span>f业务</span>
				</li>
				<li>
					<img src="../../assets/appointment-a.png">
					<span>g业务</span>
				</li>
				<li>
					<img src="../../assets/appointment-a.png">
					<span>更多</span>
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
			title:'预约业务'
		}
	},
	components:{
		navHeader,
		topBar
	}
}
</script>
<style type="text/css">
.appointment{width: 7.5rem;}
.appointment .appoint-head{padding-bottom: 0.9rem;}

.item ul{width: 7.5rem; font-size: 0.35rem;}
.item li{width: 2.48rem; height: 3.14rem; border-right: 0.01rem solid #c9caca; border-top:0.01rem solid #c9caca; float: left;  position: relative;}
.item .no-border{border-right:none; }
.border-b{border-bottom: 0.01rem solid #c9caca; margin-bottom: -0.01rem;}
.item img{width: 0.76rem; height: 0.73rem; position: absolute; left: 0.96rem; top: 0.68rem;}
.item span{ position: absolute; top: 1.94rem; left: 0.96rem;}
</style>
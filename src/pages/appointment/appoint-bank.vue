<template>
	<div class="">
		<top-bar></top-bar>
		<nav-header :title="title" :showLeft="true" :showImg='false'></nav-header>
	</div>
</template>
<script>

import navHeader from '../../components/nav-header.vue';
import topBar from '../../components/top-bar.vue';
export default{
	name:'appointment',
	data(){
		return{
			title:'预约银行'
		}
	},
	components:{
		navHeader,
		topBar
	}
}
</script>
<style type="text/css">

</style>
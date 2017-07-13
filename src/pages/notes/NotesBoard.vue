<template>
	<div class="app">
        <topbar_view></topbar_view>
        <title_bar_view></title_bar_view>
        <p>{{title}}</p>
	</div>
</template>

<script>
import topbar_view from '@/components/top-bar.vue';
import title_bar_view from '@/components/nav-header.vue'
export default{
	data(){
		return{
			title:'我要留言',
		}
	},
	methods: {},
    components:{
        topbar_view,
        title_bar_view
    }
}	
</script>

<style type="text/css">
    .app{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #EFEFEF;
    }
</style>
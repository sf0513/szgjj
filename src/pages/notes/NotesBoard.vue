<template>
	<div class="app">
        <nav_header_view :title="title"></nav_header_view>
        <topbar_view></topbar_view>
        <p>{{title}}</p>
	</div>
</template>

<script>
import topbar_view from '@/components/top-bar.vue';
import nav_header_view from '../../components/notes_nav-header.vue';
export default{
	data(){
		return{
			title:'我要留言',
		}
	},
	methods: {},
    components:{
        topbar_view,
        nav_header_view
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
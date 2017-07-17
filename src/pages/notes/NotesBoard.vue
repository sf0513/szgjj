<template>
	<div class="app">
        <TopBar></TopBar>

        <div class="inline_show_style">
            <label class="label_style" :class="{checkedStyle:page===page_one_id}">
                {{page_one_name}}<input type="radio" v-model="page" :value="page_one_id" class="radio_style"/>
            </label>
            <label class="label_style" :class="{checkedStyle:page===page_two_id}">
                {{page_two_name}}<input type="radio" v-model="page" :value="page_two_id" class="radio_style"/>
            </label>
        </div>

        <WriteNote v-show="page==='page_one'"></WriteNote>
        <MyHistoryNote v-show="page==='page_two'"></MyHistoryNote>
    </div>
</template>

<script>
import TopBar from '@/components/top-bar'
import WriteNote from './WriteNote'
import MyHistoryNote from './MyHistoryNote'
export default{
	data(){
		return{
            page:'page_one',
            page_one_id:'page_one',
            page_two_id:'page_two',
            page_one_name:'我要留言',
            page_two_name:'我的历史留言',
		}
	},
	methods: {
    },
    components:{
        TopBar,WriteNote,MyHistoryNote
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
    .label_style{
        line-height: 42px;
        font-size: 16px;
        width: 50%;
    }
    .inline_show_style{
        display: flex;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
    }
    .radio_style{
        display: none;
    }
    .checkedStyle{
        color: #f6b012;
        border-bottom:4px solid #f6b012;
    }
</style>
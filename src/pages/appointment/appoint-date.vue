<template>
	<div class="">
		<div>
			<top-bar></top-bar>
			<nav-header :title="title" :showLeft="true" :showImg='false' :showText="true" :src='image' :isshowcolor='true'></nav-header>
		</div>
		<div class="wrap">
			<div class="top">请选择预约时间</div>
			<div class="hr30-efefef"></div>
			<div class="date-wrap">
				<div class="date">
					<calendar :events="calendarData.events" :lunar="calendarData.lunar" :value="calendarData.value" :begin="calendarData.begin" :end="calendarData.end" :weeks="calendarData.weeks" :months="calendarData.months" @select="calendarData.select"></calendar>
				</div>
				<div class="tip">您最多可预约最近七个工作日的日期</div>
			</div>
			<div class="hr30-efefef"></div>
			<div class="select-date">
				<div class="select-title">请选择预约时段</div>
				<cell :isShowLeft='true' leftString="上午" :centerString='a' :isShowRight="false"></cell>
				<cell class="newPayee" leftString="下午" :centerString='b' :isShowRight="false" :isLine="false"></cell>
			</div>
			<div class='footer'>
				<input class="btn" type="button" name="" value="确 认">
			</div>
		</div>
	</div>
</template>
<script>

import navHeader from '../../components/nav-header.vue';
import topBar from '../../components/top-bar.vue';
import cell from '../../components/cell.vue';
import calendar from '../../components/calendar.vue'
export default{
	name:'appointment',
	data(){
		return{
			title:'预约时间',
			image:require('../../assets/appointment-a.png'),
			a: 'a',
			b: 'b',
			calendarData:{
                value:[new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()], //日期
                // lunar:true, //显示农历
                weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                events:{
                    // '2018-2-14':'$408','2018-2-15':'$460','2018-2-16':'$500',
                },
                select(value){
                    console.log(value.toString());
                }
            },
		}
	},
	methods:{
		
	},
	components:{
		navHeader,
		topBar,
		cell,
		calendar
	}
}
</script>
<style type="text/css" scoped>
.hr30-efefef{height: 0.3rem; background: #efefef;}
.wrap{font-size: 0.28rem;}
.wrap .top{height: 0.9rem; background: #f7f8f8; line-height: 0.9rem; font-size: 0.32rem; text-align:left; text-indent: 0.46rem;}
.item li{height: 0.89rem; line-height: 0.9rem; margin: 0 0.2rem; border-bottom: 0.01rem solid #c9caca; text-align: left; text-indent: 0.7rem; background: url(../../assets/arrow_right.png) no-repeat right 0.7rem center; background-size: 0.12rem 0.12rem;}
.item li:last-child{height: 0.9rem; border-bottom: none;}

.date-wrap .date{height: 4.3rem; font-size: 0.1rem;}
.date-wrap .tip{height: 0.6rem; line-height: 0.6rem; background: #f7f8f8; font-size: 0.2rem; text-align: left; text-indent: 0.54rem;}
.select-date .select-title{height: 0.6rem; line-height: 0.6rem; background: #f7f8f8; font-size: 0.3rem; text-align: left; text-indent: 0.54rem;}

.footer{height: 2.4rem; background: #efefef;}
.btn{width: 2.8rem; height: 0.7rem; margin-top: 0.3rem; background: #00afec; border-radius: 0.4rem; font-size: 0.36rem; color:#fff;}
</style>
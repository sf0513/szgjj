<template>
    <div class="echarts">
	  <div id="myCharts" :style="{width:'300px',height:'300px'}"></div>
	</div>
</template>
<script>
import echarts from 'echarts';
    export default {
        data() {
            return {
               
               
            }
        },
        methods: {
        },
        mounted () {
        	// 基于准备好的dom，初始化echarts实例
			let myChart = echarts.init(document.getElementById('myCharts'));
			// 绘制图表
			myChart.setOption({
//			    title: { text: 'ECharts 入门示例' },
//			    tooltip: {},
//			    xAxis: {
//			        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//			    },
//			    yAxis: {},
//			    series: [{
//			        name: '销量',
//			        type: 'bar',
//			        data: [5, 20, 36, 10, 10, 20]
//			    }]

				series : [
				        {
				            name: '访问来源',
				            type: 'pie',
				            radius: '55%',
				//          data:[
				//              {value:235, name:'视频广告'},
				//              {value:274, name:'联盟广告'},
				//              {value:310, name:'邮件营销'},
				//              {value:335, name:'直接访问'},
				//              {value:400, name:'搜索引擎'} 
				//          ]

							data: [
							        {       // 这里每一个项就是数据项（dataItem）
							            value: 2323, // 这是数据项的数据值（value）
							        },
							        1212,   // 也可以直接是 dataItem 的 value，这更常见。
							        2323,   // 每个 value 都是『一维』的。
							        4343,
							        3434
							    ]
        				}
					]
			});
        }
    }
</script>

<style lang="less">

</style>
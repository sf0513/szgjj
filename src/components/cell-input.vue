/*
 * 信息展示单元格组件（文字和输入框）
 *
 */
<template>
	<div class="cell" >
		<div class="cell-content" :class="{ line: isLine }">
			<div class="cell-left">
				<span>{{leftString}}</span>
				<slot name="left" ></slot>
			</div>
			<div class="cell-center">
				<input :type="type" :placeholder="placeholder" />
				<slot name="right" ></slot>
			</div>
			
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
            leftString:String, //左边文本
            type:{//输入框类型
            	type:String,
                default:"text",
            },
            placeholder:String,//输入框占位符
            isLine:{//是否显示分隔线（底部）
            	type:Boolean,
                default:true,
            },
            

        },
		
		methods: {
		}
	}
</script>

<style lang="less" >
.cell{
	background-color:#fff;
	font-size:16px;
    height: 50px;
    vertical-align: middle;
    line-height: 50px;
    color:#333;
    .cell-content{
	    height: 49px;
		display:flex;
		margin: 0 15px;
	}
	.line{
		border-bottom: 1px solid #ccc;
	}
	.cell-left{
		flex: 1;
		color:#686767;
	}
	.cell-center{
		flex: 1;
	}	
}

</style>
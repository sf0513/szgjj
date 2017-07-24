/*
 *信息展示单元格组件（两列或3列）
 *
 */
<template>
	<div class="cell-input" >
		<div class="cell-content" :class="{ line: isLine }">
			<div class="cell-left">
				<span v-if="isShowLeft">{{leftString}}</span>
				<slot name="left" ></slot>
			</div>
			<div class="cell-center">
				<span v-if="isShowCenter">{{centerString}}</span>
				<slot name="center" ></slot>
			</div>
			<div class="cell-right">
				<span v-if="isShowRight">{{rightString}}</span>
				<slot name="right" ></slot>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
            leftString:String, //左边文本
            centerString:String, //中间文本
            rightString:String, //右边文本
            isShowLeft:{    //是否显示左边
                type:Boolean,
                default:true,
            },
            isShowCenter:{    //是否显示中间
                type:Boolean,
                default:true,
            },
            isShowRight:{    //是否显示右边
                type:Boolean,
                default:true,
            },
            isLine:{//是否显示分隔线（底部）
            	type:Boolean,
                default:true,
            }

        },
		
		methods: {
			
		}
	}
</script>
<style lang="less" >
.cell-input{
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
		flex: 2;
		color:#686767;
	}
	.cell-center{
		flex: 2;
	}
	.cell-right{
		flex: 1;
	}
}
</style>
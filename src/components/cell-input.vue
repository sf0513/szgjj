/*
 * 
 * 信息展示单元格组件（文字和输入框）
 *
 * 
 */
<template>
	<div class="cell">
		<div class="cell-content" :class="{ line: isLine }">
			<div class="cell-left">
				<slot name="left">
					<span>{{leftString}}</span>
				</slot>
			</div>
			<div class="cell-center" v-if="input">
				<slot name="input">
					<input :type="type" :placeholder="input" />
				</slot>
			</div>
			<div class="cell-picker" v-if="rightText" @click="picker">
				<slot name="picker">
					<p class="picker-text">{{rightText}}</p>
				</slot>
			</div>

		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			leftString: String, //左边文本
			type: { //输入框类型
				type: String,
				default: "text",
			},
			isLine: { //是否显示分隔线（底部）
				type: Boolean,
				default: true,
			},
			input: String,
			rightText: String,
			pickerFunc:Function,

		},

		methods: {
			picker(){
				if(typeof this.pickerFunc === 'function' ){
					this.pickerFunc();
				}
			}
		}
	}
</script>

<style lang="less">
	.cell {
		background-color: #fff;
		font-size: 15px;
		height: 50px;
		vertical-align: middle;
		line-height: 50px;
		color: #000;
		.cell-content {
			height: 49px;
			display: flex;
			margin: 0 15px;
			text-align: left;
			padding-left: .3rem;
		}
		.line {
			border-bottom: 1px solid #ccc;
		}
		.cell-left {
			flex: 1;
			color: #686767;
			width: 50%;
		}
		.cell-center {
			flex: 1;
			width: 50%;
			input{
				padding-left: .25rem;
				width: 3rem;
			}
		}
		.cell-picker {
			width: 50%;
			flex: 1;
			text-align: left;
			/*padding-left: .3rem;*/
			.picker-text{
				padding-left: .25rem;
			}
		}
	}
</style>
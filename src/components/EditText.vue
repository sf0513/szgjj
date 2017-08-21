<!--输入框公共组件-->
<template>
	<div class="edit_zone_style" >
			<label class="label_style" v-show="showLabel">{{labelStr}}</label>
			<input type="text" :placeholder="holderStr" class="holder_style" v-model="input_data"
                   :maxlength="max_length"
                   v-if="showLabel===true" />
            <input type="text" :placeholder="holderStr" class="whole_line_style" v-model="input_data"
                   :maxlength="max_length"
                   v-else="showLabel===false" />
	</div>
</template>

<script type="text/javascript">
    export default {
	    data() {
            return{
                input_data:''
            }
        },
		props:{
            labelStr:String, //左边标签文字
            holderStr:String, //占位符提示文字
            showLabel:{
                type:Boolean,
                default:true
            },
            max_length:Number,//可输入最大位数
    	},
        watch:{
            input_data:function (input_data) {
                this.$emit('son_to_father',this.input_data)
            }
        }
	}
</script>

<style type="text/css" scoped>
	.edit_zone_style{
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 3px #999;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        display: flex;
        height: 50px;
        font-size: 14px;
        text-align: center;
    }
	.label_style{
        line-height: 50px;
        width: 2.6rem;
      }
	.holder_style{
        width:3.8rem;
    }
    .whole_line_style{
        width: 100%;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }

</style>
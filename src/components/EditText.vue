<!--输入框公共组件-->
<template>
	<div class="edit_zone_style" >
			<span class="label_style">{{labelStr}}</span>
			<input type="text" :placeholder="holderStr" class="holder_style">
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
            labelStr:String, //左边标签文字
            holderStr:String, //占位符提示文字
//            isShowLeft: {    //是否显示左边
//                type: Boolean,
//                default: true,
//            }
        },
		
		methods: {
			back(){
                if(typeof this.leftFunc === 'function'){
                    this.leftFunc();
                }else{
                    this.$router.back();

                    //返回时删除缓存
                    if(this.isKeepAlive){
                        this.$store.dispatch('popKeepAlive');
                    }
                    //设置返回标志，在动画里面处理
                    this.$store.dispatch('setPageAnimationBack', true);
                    console.log("back");
                }
            },
		}
	}
</script>
<style type="text/css" scoped>
	.edit_zone_style{
        background-color: white;
        padding: 2px;
        margin: 20px 10px;
        border-radius: 8px;
        box-shadow:0 0 3px #999999;
    }
	.label_style{}
	.holder_style{}

</style>
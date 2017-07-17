<!--验证码倒计时组件-->
<template>
    <div class="verification_zone_style">
        <span class="label_style">{{labelStr}}</span>
        <input type="text" :placeholder="holderStr" v-model="verification_info" class="holder_style">
        <span class="btn_style" @click="setTimer" :class="{sended:startFrom>0}">{{btn_name}}</span>
    </div>
</template>
<script type="text/javascript">
	export default {
		props:{
            countDown:{//从该值开始倒计时
                type:Number,
                default:30,
            },
            default_start:{
                type:Boolean,
                default:false,
            },
            labelStr:String,//标签文本
            holderStr:String,//占位符文本
        },
        data(){
		    return{
                btn_name:'重发',
                startFrom:0,
            }
        },
        methods:{
            setTimer(){
                if (this.startFrom===0){
                    this.startFrom=this.countDown;
                }
                this.startFrom--;
                let timer = setTimeout(() => {
                    this.setTimer();
                }, 1000);
                if(this.startFrom >0){
                    this.btn_name='重发'+this.startFrom+'s';
                }else{
                    clearTimeout(timer);
                    this.btn_name='重发';
                }
            }
        },
        created(){
            this.startFrom=this.countDown;
            if (this.default_start){
                this.btn_name='重发'+this.startFrom+'s';
                this.setTimer();
            } else{
                this.btn_name='发送验证码';
            }
        }
	}
</script>
<style type="text/css" scoped>
    .verification_zone_style{
        background-color: white;
        border-radius: 8px;
        box-shadow:0 0 3px #999999;
        height: 50px;
        margin-left: 0.25rem;
        margin-right: 0.25rem;

    }
	.btn_style{
        font-size: 12px;
        background-color: #f7ab00;
        color: white;
        border-radius: 3px;
        padding: 1px 0.21rem;
    }
    .sended{
        background: #CCC;
    }
    .label_style{
        margin-left: 0.06rem;
        line-height: 50px;
    }
    .holder_style{
        font-size: 12px;
        width: 3.0rem;
    }
</style>
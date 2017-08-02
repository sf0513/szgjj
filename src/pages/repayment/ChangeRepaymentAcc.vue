<template>
	<div class="app">
        <topBar></topBar>
		<NavHeader :title="title" :showImg="false" :isshowcolor="!submit_success_flag"></NavHeader>

        <div v-if="submit_success_flag===false">
            <div class="div_style">
                <p class="raw_style bank_background_style">
                    <span class="left_style">委托银行</span>
                    <span class="right_style">中国银行</span>
                </p>
            </div>
            <div class="div_style">
                <p class="raw_style">
                    <span class="left_style">原还款人姓名</span>
                    <span class="right_style black_font_style">王达</span>
                </p>
                <div class="line_zone_style">
                    <p class="line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="left_style red_color_style">新还款人姓名</span>
                    <span class="right_style black_font_style">王小花</span>
                </p>
                <div class="line_zone_style">
                    <p class="line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="left_style">原还款账户</span>
                    <span class="right_style black_font_style">622112 3478965673388</span>
                </p>
                <div class="line_zone_style">
                    <p class="line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="left_style red_color_style">新还款账户</span>
                    <input type="text" placeholder="请输入" class="right_style black_font_style" pattern="[0-9]"
                           autofocus="autofocus" maxlength="20" onkeyup="this.value=this.value.replace(/[\D]/,'');"/>
                </p>
            </div>

            <SubmitBtn :btn_name="btnName" :afun="submitInfo"></SubmitBtn>
        </div>

        <div>
            <ChangeRepaySubmitSuccess :msg="submit_success_msg"
                                          v-if="submit_success_flag===true"></ChangeRepaySubmitSuccess>
        </div>
	</div>
</template>

<script>
    import topBar from '@/components/top-bar';
	import NavHeader from '@/components/nav-header'
    import EditText from '@/components/EditText'
    import SubmitBtn from '@/components/SubmitBtn'
    import ChangeRepaySubmitSuccess from './ChangeRepaySubmitSuccess'
export default{
	data(){
		return{
			title:'还款账户信息变更',
            btnName:'提&nbsp;&nbsp;&nbsp;&nbsp;交',
            submit_success_flag:false,
            submit_success_msg:'您已成功办理还款账户变更!',
		}
	},
	methods:{
        submitInfo(){
            this.submit_success_flag=!this.submit_success_flag;
        }
    },
    components:{
        topBar,NavHeader,EditText,SubmitBtn,ChangeRepaySubmitSuccess
    }
}
</script>

<style type="text/css" >
    .app{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #EFEFEF;
    }
    .div_style{
        font-size: 14px;
    }
    .raw_style{
        background-color: white;
        line-height: 48px;
        width: 100%;
        display: flex;
    }
    .left_style{
        flex: 1.2;
        line-height: 48px;
        color: #666666;
        text-align: left;
        margin-left: 0.38rem;
    }
    .right_style{
        flex: 2;
        line-height: 48px;
        height: 48px;
        text-align: left;
    }
    .line_zone_style{
        background-color: white;
        height:2px;
    }
    .line_style{
        height: 2px;
        width: 97%;
        background-color:#EFEFEF;
    }
    .red_color_style{
        color: red;
    }
    .bank_background_style{
        background-color: #F7F8F8;
        margin-bottom: 30px;
    }
    .black_font_style{
        color: #000000;
    }
</style>
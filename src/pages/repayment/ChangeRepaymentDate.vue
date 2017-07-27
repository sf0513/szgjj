<template>
	<div class="app">
        <topBar></topBar>
		<NavHeader :title="title" :showImg="false" :isshowcolor="!submit_success_flag"></NavHeader>

        <div v-if="submit_success_flag===false">
            <div class="div_style">
                <p class="raw_style">
                    <span class="left_style">原还款人姓名</span>
                    <span class="right_style">王小花</span>
                </p>
                <div class="line_zone_style">
                    <p class="line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="left_style">原还款日</span>
                    <span class="right_style repay_font_style">24日</span>
                </p>
            </div>

            <div class="div_style margin_top_style">
                <p class="raw_style">
                    <span class="left_style red_color_style">新还款日</span>
                    <input type="text" placeholder="请输入新的还款日" class="right_style new_repay_font_style" pattern="[0-9]"
                           autofocus="autofocus" maxlength="2" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"/>
                </p>
            </div>

            <div class="identity_no_zone_style">
            </div>

            <SubmitBtn :btn_name="btnName" :afun="submitInfo"></SubmitBtn>
        </div>

        <div>
            <ChangeRepayDateSubmitSuccess :msg="submit_success_msg" :info="submit_success_info"
                                          v-if="submit_success_flag===true"></ChangeRepayDateSubmitSuccess>
        </div>
	</div>
</template>

<script>
    import topBar from '@/components/top-bar';
	import NavHeader from '@/components/nav-header'
    import EditText from '@/components/EditText'
    import SubmitBtn from '@/components/SubmitBtn'
    import ChangeRepayDateSubmitSuccess from './ChangeRepayDateSubmitSuccess'
export default{
	data(){
		return{
			title:'还款日变更',
            btnName:'提&nbsp;&nbsp;&nbsp;&nbsp;交',
            submit_success_flag:false,
            submit_success_msg:'您已成功办理还款日变更!',
            submit_success_info:'下一次还款日期为2017年7月27日',
		}
	},
	methods:{
        submitInfo(){
            this.submit_success_flag=!this.submit_success_flag;
        }
    },
    components:{
        topBar,NavHeader,EditText,SubmitBtn,ChangeRepayDateSubmitSuccess
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
    .repay_font_style{
        font-size: 21px;
    }
    .margin_top_style{
        margin-top: 30px;
    }
    .red_color_style{
        color: red;
    }
    .new_repay_font_style{
        font-size: 16px;
    }
</style>
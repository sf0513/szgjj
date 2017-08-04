<template>
	<div class="app">
        <topBar></topBar>
		<NavHeader :title="title" :showImg="false" :isshowcolor="!submit_success_flag"></NavHeader>

        <div v-if="submit_success_flag===false">
            <div class="div_style">
                <p class="raw_style">
                    <span class="cell_common_style left_style">还款人姓名</span>
                    <span class="cell_common_style right_style black_font_style">王小花</span>
                </p>
                <div class="line_zone_style">
                    <p class="line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="cell_common_style left_style">查看<a herf="#" class="blue_font_style underline_style">对冲还贷</a>协议</span>
                    <span class="cell_common_style right_style"></span>
                </p>
            </div>

            <div class="div_style margin_top_style">
                <p class="raw_style">
                    <span class="cell_common_style left_style new_left_flex">提前还款金额区间</span>
                    <span class="cell_common_style right_style new_right_flex yellow_font_style">￥5,436.74-￥201,467.47</span>
                </p>
                <div class="line_zone_style new_line_zone_style">
                    <p class="line_style new_line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="cell_common_style left_style new_left_flex">是否全额还款</span>
                    <span class="cell_common_style right_style new_right_flex">
                        <label class="full_choose_style" :class="{blue_font_style:full==='yes'}">
                            <input type="radio" v-model="full" value="yes"/>
                            &nbsp;&nbsp;是</label>
                        <label class="full_choose_style margin_left_style" :class="{blue_font_style:full==='no'}">
                            <input type="radio" v-model="full" value="no"/>
                            &nbsp;&nbsp;否</label>
                    </span>
                </p>
                <div class="line_zone_style new_line_zone_style">
                    <p class="line_style new_line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="cell_common_style left_style new_left_flex red_color_style">提前还款金额</span>
                    <span class="cell_common_style right_style new_right_flex">
                        <input type="text" value="￥20146.67"/>
                        <button>详情</button>
                    </span>
                </p>
            </div>

            <div class="div_style margin_top_style">
                <p class="raw_style">
                    <span class="cell_common_style cell_flex_style"></span>
                    <span class="cell_common_style cell_flex_style black_font_style">变更前</span>
                    <span class="cell_common_style cell_flex_style black_font_style">变更后</span>
                </p>
                <div class="line_zone_style new_line_zone_style">
                    <p class="line_style new_line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="cell_common_style cell_flex_style">月还款额（元）</span>
                    <span class="cell_common_style cell_flex_style black_font_style">￥4,586.94</span>
                    <span class="cell_common_style cell_flex_style black_font_style">0</span>
                </p>
                <div class="line_zone_style new_line_zone_style">
                    <p class="line_style new_line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="cell_common_style cell_flex_style">贷款到期日</span>
                    <span class="cell_common_style cell_flex_style black_font_style">2035-12-31</span>
                    <span class="cell_common_style cell_flex_style black_font_style">0</span>
                </p>
                <div class="line_zone_style new_line_zone_style">
                    <p class="line_style new_line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="cell_common_style cell_flex_style">剩余贷款利息总额</span>
                    <span class="cell_common_style cell_flex_style black_font_style">￥419,763.53</span>
                    <span class="cell_common_style cell_flex_style black_font_style">0</span>
                </p>
                <div class="line_zone_style new_line_zone_style">
                    <p class="line_style new_line_style"></p>
                </div>
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
			title:'提前还款',
            btnName:'提&nbsp;&nbsp;&nbsp;&nbsp;交',
            submit_success_flag:false,
            submit_success_msg:'您已成功办理还款账户变更!',
            full:'yes',//是否全额还贷
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
        font-size: 12px;
    }
    .raw_style{
        background-color: white;
        line-height: 48px;
        width: 100%;
        display: flex;
    }
    .cell_common_style{
        line-height: 48px;
        text-align: left;
    }
    .left_style{
        flex: 1.1;
        color: #666666;
        margin-left: 0.38rem;
    }
    .right_style{
        flex: 2;
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
    .black_font_style{
        color: #000000;
    }
    .blue_font_style{
        color: blue;
    }
    .underline_style{
        text-decoration: underline;
    }
    .margin_top_style{
        margin-top: 20px;
    }
    .new_left_flex{
        flex:1.4;
    }
    .new_right_flex{
        flex:2;
    }
    .yellow_font_style{
        color: #F8AF19;
        font-size: 14px;
    }
    .new_line_zone_style{
        text-align: -webkit-center;
    }
    .new_line_style{
        width: 94%;
    }
    .full_choose_style{
        font-size: 16px;
    }
    .margin_left_style{
        margin-left: 0.5rem;
    }
    .cell_flex_style{
        flex:1;
        text-align: center;
    }
</style>
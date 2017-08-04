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
                        <label class="repay_all_radio_style" :class="{blue_font_style:full==='yes'}">
                            <input type="radio" v-model="full" value="yes" class="radio_icon_style"/>
                            &nbsp;&nbsp;是</label>
                        <label class="repay_all_radio_style margin_left_style" :class="{blue_font_style:full==='no'}">
                            <input type="radio" v-model="full" value="no" class="radio_icon_style"/>
                            &nbsp;&nbsp;否</label>
                    </span>
                </p>
                <div class="line_zone_style new_line_zone_style">
                    <p class="line_style new_line_style"></p>
                </div>
                <p class="raw_style">
                    <span class="cell_common_style left_style new_left_flex red_color_style">提前还款金额</span>
                    <span class="cell_common_style right_style new_right_flex">
                        <input type="text"/>
                        <button @click="showDetail">详情</button>
                    </span>
                </p>
                <div v-show="full==='no'">
                    <div class="line_zone_style new_line_zone_style">
                        <p class="line_style new_line_style"></p>
                    </div>
                    <div>
                        <p class="raw_style">
                            <span class="cell_common_style left_style new_left_flex">选择还款方式</span>
                            <span class="cell_common_style right_style new_right_flex two_line_style">
                                <label class="repay_way_radio_style">
                                    <input type="radio" v-model="repay_way" value="repay_one" class="radio_icon_style radio_icon_margin_right_style"/>
                                    期限缩短，月供不变</label>
                                <label class="repay_way_radio_style">
                                    <input type="radio" v-model="repay_way" value="repay_two" class="radio_icon_style radio_icon_margin_right_style"/>
                                    期限不变，月供减少</label>
                            </span>
                        </p>
                    </div>
                </div>
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

        <div v-show="show_detail_flag" :class="{pop_background_style:show_detail_flag}">
            <div class="pop_dialog_style">
                <p class="top_line_style">
                    <img src="../../assets/btn_shut_down@2x.png" @click="shutdownPop" class="shutdown_btn_style"/>
                </p>
                <div>
                    <p v-for="item in pop_items" class="pop_raw_style">
                        <span class="pop_left_style">{{item.label}}</span>
                        <span class="pop_right_style red_color_style">{{item.money}}</span>
                    </p>
                </div>
            </div>
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
            submit_success_msg:'您办理的提前还款已成功受理!',
            full:'yes',//是否全额还贷
            show_detail_flag:false,//默认不展示详情
            pop_items:[{label:'本金',money:'￥2,000,000.00'},{label:'利息',money:'￥1,467.47'}],
            repay_way:'',//还款方式
		}
	},
	methods:{
        showDetail(){
            this.show_detail_flag=true;
        },
        shutdownPop(){
            this.show_detail_flag=false;
        },
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
    .repay_all_radio_style{
        font-size: 16px;
    }
    .margin_left_style{
        margin-left: 0.5rem;
    }
    .cell_flex_style{
        flex:1;
        text-align: center;
    }
    .pop_background_style{
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.4);
        position: absolute;
        left: 0;
        top: 0;
    }
    .pop_dialog_style{
        position: fixed;
        top: 45%;
        left: 50%;
        width: 7.12rem;
        height: 3.6rem;
        visibility: visible;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 201;
        border-radius: 0.1rem;
        background: white;
    }
    .top_line_style{
        height: 30px;
        width: 100%;
        background-color: #C2E6F8;
        margin-bottom: 10px;
    }
    .pop_raw_style{
        display: flex;
        font-size: 14px;
        height: 42px;
    }
    .pop_left_style{
        flex: 1.2;
        line-height: 42px;
        text-align: right;
    }
    .pop_right_style{
        flex: 2;
        line-height: 42px;
        text-align: left;
        padding-left: 0.8rem;
    }
    .shutdown_btn_style{
        position: absolute;
        right: 9px;
        top: 4px;
        height: 18px;
    }
    .two_line_style{
        display: flex;
        flex-direction: column;
    }
    .repay_way_radio_style{
        line-height: 24px;
    }
    .radio_icon_style{
        height: 10px;
    }
    .radio_icon_margin_right_style{
        margin-right: 0.1rem;
    }
</style>
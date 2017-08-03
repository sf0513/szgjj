<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="extract_details">
        <NavHeader :title="title" :showImg="false" :isshowcolor="true"></NavHeader>
        <div class="content">
            <div class="content_item" v-show="is_show_content_one">
                <div class="top">
                    <div class="step">
                        <div class="step_one item selected">
                            <div class="selected circle">
                                <img :src="selected">
                                <span>{{one}}</span>
                            </div>
                        </div>
                        <div class="step_two item unchecked">
                            <div class="unchecked circle">
                                <img :src="unchecked">
                                <span>{{two}}</span>
                            </div>
                        </div>
                        <div class="step_three item unchecked">
                            <div class="unchecked circle">
                                <img :src="unchecked">
                                <span>{{three}}</span>
                            </div>
                        </div>

                    </div>
                    <div class="step">
                        <div class="step_one item selected">
                            <span>{{extractAmount}}</span>
                        </div>
                        <div class="step_two item unchecked">
                            <span>{{informationValidation}}</span>
                        </div>
                        <div class="step_three item unchecked">
                            <span>{{extractionResult}}</span>
                        </div>

                    </div>
                </div>
                <div class="amount_money">
                    <span class="money_num">{{moneySymbol}}</span>
                    <input class="money_num" v-model.number="money" type="number">
                    <img class="delete" @click="clearMoney" :src="deleteImg">
                </div>
                <div class="phone bg_item">
                    <span>请确认您正在使用的手机：</span>
                    <input v-model="phone" type="number">
                    <img class="delete" @click="clearPhoneNumber" :src="deleteImg">
                </div>
                <div class="rule" v-if="is_show_rule">
                    <div>
                        本次最高可提取<span class="highest_money">{{totalMoney}}</span>元
                        <span class="calculation_rule" @click="showFlag=true">查看计算规则</span>
                    </div>
                    <div>
                        提取起止时间：<span class="time">{{startTimeYear}}</span>{{year}}
                        <span class="time">{{startTimeMonth}}</span> {{month}}<span>-</span>
                        <span class="time">{{endTimeYear}}</span>{{year}}
                        <span class="time">{{endTimeMonth}}</span>{{month}}
                    </div>
                    <div>
                        最大提取月份：<span class="time">{{maximumMathNumber}}</span>个月
                    </div>
                </div>
                <div v-bind:class="[is_show_rule ? 'operate_two': 'operate']">
                    <button class="my_button one" @click="extract">提&nbsp;&nbsp;&nbsp;&nbsp;取</button>
                </div>
            </div>
            <div class="content_item" v-show="is_show_content_two">
                <div class="top">
                    <div class="step">
                        <div class="step_one item unchecked">
                            <div class="unchecked circle">
                                <img :src="complete">
                            </div>
                        </div>
                        <div class="step_two item selected">
                            <div class="selected circle">
                                <img :src="selected">
                                <span>{{two}}</span>
                            </div>
                        </div>
                        <div class="step_three item unchecked">
                            <div class="unchecked circle">
                                <img :src="unchecked">
                                <span>{{three}}</span>
                            </div>
                        </div>

                    </div>
                    <div class="step">
                        <div class="step_one item unchecked">
                            <span>{{extractAmount}}</span>
                        </div>
                        <div class="step_two item selected">
                            <span>{{informationValidation}}</span>
                        </div>
                        <div class="step_three item unchecked">
                            <span>{{extractionResult}}</span>
                        </div>
                    </div>
                </div>
                <div class="amount_money">
                    <span class="money_num">{{moneySymbol}}</span>
                    <input class="money_num" readonly="readonly" v-model="money">
                </div>
                <div class="bg_item bg_item_font">
                    <span>手机号：</span>
                    <span>{{phone}}</span>
                </div>
                <div class="bg_item bg_item_font">
                    <span>卡&nbsp;&nbsp;&nbsp;号：</span>
                    <span>{{cardNumber}}</span>
                    <span class="bank">{{bank}}</span>
                </div>
                <div class="operate">
                    <button class="my_button two" @click="previousStep">上一步</button>
                    <button class="my_button one" @click="sure">确&nbsp;&nbsp;&nbsp;&nbsp;认</button>
                </div>
            </div>
            <div class="content_item" v-show="is_show_content_three">
                <img class="success_sign" :src="src"/>
                <span class="success_remind">恭喜你，受理成功！</span>
                <div class="success_rule_remind">
                    <div v-show="isShowSuccessRuleRemindOne">资金将在<span class="important_remind">3个工作日</span> 内转入您的联名卡
                    </div>
                    <div class="remind_two" v-show="isShowSuccessRuleRemindTwo">在资金转入前
                        <span class="important_remind">请勿</span>将联名卡注销
                        <span class="calculation_rule" v-show="isShowSuccessRuleRemindTwoRule" @click="showFlag=true">查看结算规则</span>
                    </div>
                </div>
                <div class="bg_item bg_item_font">
                    <span>提取金额：</span>
                    <span class="money_num">{{moneySymbol}}{{money}}</span>
                </div>
                <div class="bg_item bg_item_font">
                    <span>账户余额：</span>
                    <span class="money_num">{{moneySymbol}}{{accountBalance}}</span>
                </div>
                <div class="operate">
                    <button class="my_button one" @click="finish">完&nbsp;&nbsp;&nbsp;&nbsp;成</button>
                </div>
            </div>
        </div>
        <div class="pop" v-show='showFlag'>
            <div class="confirm">
                <div class="title">
                    <span class="rule_title">{{title}}</span>
                    <img src="../../assets/btn_shut_down@2x.png" @click="showFlag=false">
                </div>
                <div class="cont">
                    <div class="cont_two">
                        <div class="extract_quota cont_item">
                            <span class="extract_quota_title big_font">提取额度</span>
                            <div class="second_column">
                                <div>
                                    = 当前月缴存额 x <span class="number big_font">50%</span> x 可提取月份
                                </div>
                                <div class="extract_quota_number">
                                    = {{currentMonthlyDeposit}} x <span class="number">50%</span> x <span
                                        class="number">{{maximumMathNumber}}</span> =
                                    <span class="number big_font">{{totalMoney}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="cont_item month">
                            <span class="month_title">可提取月:</span>
                            <div class="second_column">
                                <div>
                                    您的上一次提取月份为<span class="number extract_month"> {{startTimeYear}} </span>{{year}}
                                    <span class="number extract_month"> {{startTimeMonth}} </span>{{month}}
                                </div>
                                <div class="can_extract_month">
                                    可提取月为<span class="number extract_month"> {{maximumMathNumber}}</span>个月
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
        </div>

    </div>
</template>

<script>
    import NavHeader from '@/components/nav-header'

    export default {
        name: "ExtractDetails",
        data() {
            return {
                title: '',
                one: 1,
                two: 2,
                three: 3,
                selected: require('../../assets/card_steps_s@2x.png'),
                unchecked: require('../../assets/card_steps_n@2x.png'),
                complete: require('../../assets/card_steps_complete@2x.png'),
                deleteImg: require('../../assets/card_delete_1@2x.png'),
                extractAmount: '提取金额',
                informationValidation: '信息确认',
                extractionResult: '提取结果',
                startTimeYear: 2015,
                startTimeMonth: 1,
                endTimeYear: 2015,
                endTimeMonth: 11,
                maximumMathNumber: 12,
                year: '年',
                month: '月',
                moneySymbol: '￥',
                is_show_content_one: true,
                is_show_content_two: false,
                is_show_content_three: false,
                is_show_rule: false,
                src: require('../../assets/appoint_success.png'),
                totalMoney: 25000,
                money: 0,
                phone: 13800000000,
                showFlag: false,
                cardNumber: '6225****1111',
                bank: '(中国建设银行)',
                isShowSuccessRuleRemindOne: false,
                isShowSuccessRuleRemindTwo: false,
                isShowSuccessRuleRemindTwoRule: false,
                currentMonthlyDeposit: 2000,
                percentage: 0.5,

            }
        },
        created: function () {
            //从上一个页面来的数据
            var typeSign = this.$route.query.typeSign;
            this.totalMoney = this.currentMonthlyDeposit * this.percentage * this.maximumMathNumber;
            this.money = this.totalMoney;
            switch (typeSign) {
                case 1:
                    this.title = "租房提取";
                    this.is_show_rule = true;
                    this.isShowSuccessRuleRemindOne = true;
                    this.isShowSuccessRuleRemindTwo = false;
                    this.isShowSuccessRuleRemindTwoRule = false;
                    break;
                case 2:
                    this.title = "其他住房消费提取";
                    this.is_show_rule = true;
                    this.isShowSuccessRuleRemindOne = true;
                    this.isShowSuccessRuleRemindTwo = false;
                    this.isShowSuccessRuleRemindTwoRule = false;
                    break;
                case 3:
                    this.title = "非深户离深销户提取";
                    this.is_show_rule = false;
                    this.isShowSuccessRuleRemindOne = false;
                    this.isShowSuccessRuleRemindTwo = true;
                    this.isShowSuccessRuleRemindTwoRule = true;
                    break;
                case 4:
                    this.title = "退休销户提取";
                    this.is_show_rule = false;
                    this.isShowSuccessRuleRemindOne = true;
                    this.isShowSuccessRuleRemindTwo = true;
                    this.isShowSuccessRuleRemindTwoRule = false;
                    break;
            }

        },
        computed: {
            //账户余额
            accountBalance: function () {
                return this.totalMoney - this.money;
            }
        },
        methods: {
            //提取
            extract: function () {
                if (this.money === "") {
                    alert('提取金额不能为空');
                    return;
                }
                if (this.phone === "") {
                    alert('正在使用的手机号码不能为空');
                    return;
                }
                if (this.money > this.totalMoney) {
                    alert('提取金额不能大于最高可以提前金额');
                    return;
                }
                var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
                if (!reg.test(this.money)) {
                    alert("提取金额格式错误！");
                    return;
                }
                if (this.money === 0) {
                    alert('提取金额不能等于0')
                    return;
                }
//                以1开始后面加10位数字
                var re = /^1[3|4|5|8][0-9]\d{4,8}$/;
                if (!re.test(this.phone)) {
                    alert("手机号格式错误！");
                    return;
                }
                this.is_show_content_one = false;
                this.is_show_content_two = true;
                this.is_show_content_three = false;
            },
            //上一步
            previousStep: function () {
                this.is_show_content_one = true;
                this.is_show_content_two = false;
                this.is_show_content_three = false;
            },
            //确认
            sure: function () {
                this.is_show_content_one = false;
                this.is_show_content_two = false;
                this.is_show_content_three = true;
            },
            //完成
            finish: function () {
                history.back();

            },
            //提取金额清空
            clearMoney: function () {
                this.money = '';
            },
            //正在使用电话清空
            clearPhoneNumber: function () {
                this.phone = '';
            },
            showRule: function () {

            }

        },
        components: {
            NavHeader,

        }
    }
</script>

<style scoped>
    .extract_details {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #EFEFEF;
        font-size: 0.38rem;
    }

    .content_item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .top {
        height: 3rem;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .step {
        display: flex;
        width: 100%;
        margin-bottom: 0.2rem;
    }

    .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .circle {
        position: relative;
        width: 100%;
    }

    .selected.circle img {
        width: 0.6rem;

    }

    .circle span {
        width: 50%;
        height: 50%;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

    }

    .selected {
        font-size: 0.35rem;
        color: blue;
    }

    .unchecked.circle img {
        width: 0.55rem;

    }

    .unchecked {
        font-size: 0.3rem;
    }

    .amount_money {
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5rem;
        width: 5rem;
        box-shadow: 1px 1px #949494;
    }

    .amount_money input {
        width: 3rem;
    }

    .money_num {
        font-weight: bold;
        font-size: 0.5rem;
    }

    .delete {
        width: 0.4rem;
        height: 0.4rem;
        margin-left: 0.1rem;
    }

    .phone {
        font-size: 0.32rem;
        margin-top: 0.3rem;
        justify-content: center;
    }

    .bg_item {
        height: 1.3rem;
        width: 100%;
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .bg_item_font {
        margin-top: 0.3rem;
        font-size: 0.35rem;
        padding-left: 1.6rem;
    }

    .bg_item .bank {
        font-size: 0.3rem;
        margin-left: 0.1rem;
    }

    .phone input {
        width: 2rem;
        color: blue;
        text-decoration: underline;
    }

    .rule {
        font-size: 0.3rem;
        margin-top: 0.2rem;
        width: 100%;
    }

    .rule div {
        margin-top: 0.2rem;
        text-align: left;
        width: 100%;
        margin-left: 0.6rem;
    }

    .highest_money {
        font-weight: bold;
        font-size: 0.4rem;
    }

    .calculation_rule {
        margin-left: 0.1rem;
        color: blue;
        text-decoration: underline;
    }

    .time {
        font-size: 0.35rem;
    }

    input, button {
        outline: none;
        border: none;
    }

    .operate {
        margin-top: 1rem;
    }

    .operate_two {
        margin-top: 0.5rem;
    }

    .my_button {
        width: 3rem;
        height: 0.8rem;
        font-size: 0.37rem;
        -webkit-transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
        transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
        border-radius: 3rem;
        cursor: pointer;
        color: white;
        background-repeat: no-repeat;
        background-position: 50% center;
        background-color: transparent;
        overflow: hidden;
    }

    .one {
        background-image: url(../../assets/bg_extract_details_one.png);
        margin-left: 0.5rem;
    }

    .two {
        background-image: url(../../assets/bg_extract_details_two.png);
        color: black;
    }

    .success_sign {
        margin-top: 1.3rem;
        width: 1.8rem;
        height: 1.8rem;
    }

    .success_remind {
        margin-top: 0.5rem;
        font-size: 0.35rem;
        font-weight: bold;
    }

    .success_rule_remind {
        font-size: 0.25rem;
        margin-top: 0.4rem;
    }

    .important_remind {
        color: red;
        font-size: 0.28rem;
    }

    .remind_two {
        margin-top: 0.1rem;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        z-index: 200;
    }

    .confirm {
        position: fixed;
        top: 45%;
        left: 50%;
        width: 7.12rem;
        height: 4rem;
        visibility: visible;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 201;
        border-radius: 0.1rem;
        background: white;
        box-shadow: 0.03rem 0.03rem 0.03rem white;
    }

    .confirm .title {
        height: 0.6rem;
        background: url(../../assets/pop_bg.jpg) repeat-x;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 0.1rem;
    }

    .rule_title {
        flex: 1;
        font-size: 0.32rem;
        font-weight: bold;
    }

    .title img {
        width: 0.33rem;
        margin-right: 0.2rem;
    }

    .confirm .cont {
        height: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .cont_two {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    /*计算规则对话框中的提取额度和可提取月份两行*/
    .cont_item {
        display: flex;
        flex-direction: row;
    }

    /*提取額度*/
    .extract_quota {
        font-size: 0.25rem;
    }

    .big_font {
        font-size: 0.33rem;
    }

    /*计算规则对话框可提取月*/
    .month {
        font-size: 0.2rem;
        margin-top: 0.5rem;
    }

    /*计算规则中可提取月 第一列*/
    .month_title {
        font-size: 0.28rem;
        font-weight: bold;
    }

    /*计算规则对话框中的蓝色字*/
    .number {
        color: blue;
    }

    /*计算规则对话框中可提取月份那一行*/
    .can_extract_month {
        margin-top: 0.2rem;
    }

    /*计算规则对话框中可提取月份中的数字*/
    .extract_month {
        font-size: 0.28rem;
    }

    /*计算规则对话框中提取额度第二行*/
    .extract_quota_number {
        margin-top: 0.2rem;
    }

    /*计算规则对话框中第二列*/
    .second_column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>
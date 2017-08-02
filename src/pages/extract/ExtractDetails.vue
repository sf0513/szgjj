<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="extract_details">
        <NavHeader :title="title" :showImg="false" :isshowcolor="true"></NavHeader>
        <div class="content">
            <div class="content_item" v-show="is_show_content_one">
                <div class="top">
                    <div class="step">
                        <div class="step_one item selected">
                            <div class="selected circle">
                                <img src="../../assets/card_steps_s@2x.png">
                                <span>1</span>
                            </div>
                        </div>
                        <div class="step_two item unchecked">
                            <div class="unchecked circle">
                                <img src="../../assets/card_steps_n@2x.png">
                                <span>2</span>
                            </div>
                        </div>
                        <div class="step_three item unchecked">
                            <div class="unchecked circle">
                                <img src="../../assets/card_steps_n@2x.png">
                                <span>3</span>
                            </div>
                        </div>

                    </div>
                    <div class="step">
                        <div class="step_one item selected">
                            <span>提取金额</span>
                        </div>
                        <div class="step_two item unchecked">
                            <span>信息确认</span>
                        </div>
                        <div class="step_three item unchecked">
                            <span>提取结果</span>
                        </div>

                    </div>
                </div>
                <div class="amount_money">
                    <span class="money_num">￥</span>
                    <input class="money_num" v-model.number="money" type="number">
                    <img class="delete" @click="clearMoney" src="../../assets/card_delete_1@2x.png">
                </div>
                <div class="phone bg_item">
                    <span>请确认您正在使用的手机：</span>
                    <input v-model="phone">
                    <img class="delete" @click="clearPhoneNumber" src="../../assets/card_delete_1@2x.png">
                </div>
                <div class="rule" v-if="is_show_rule">
                    <div>
                        <span>本次最高可提取</span><span class="highest_money">{{totalMoney}}</span><span>元</span>
                        <span class="calculation_rule">查看计算规则</span>
                    </div>
                    <div>
                        <span>提取起止时间：</span><span class="time">2015</span><span>年</span><span
                            class="time">1</span><span>月</span><span>-</span>
                        <span class="time">2015</span><span>年</span><span class="time">12</span><span>月</span>
                    </div>
                    <div>
                        <span>最大提取月份：</span><span class="time">12</span><span>个月</span>
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
                                <img src="../../assets/card_steps_complete@2x.png">
                            </div>
                        </div>
                        <div class="step_two item selected">
                            <div class="selected circle">
                                <img src="../../assets/card_steps_s@2x.png">
                                <span>2</span>
                            </div>
                        </div>
                        <div class="step_three item unchecked">
                            <div class="unchecked circle">
                                <img src="../../assets/card_steps_n@2x.png">
                                <span>3</span>
                            </div>
                        </div>

                    </div>
                    <div class="step">
                        <div class="step_one item unchecked">
                            <span>提取金额</span>
                        </div>
                        <div class="step_two item selected">
                            <span>信息确认</span>
                        </div>
                        <div class="step_three item unchecked">
                            <span>提取结果</span>
                        </div>
                    </div>
                </div>
                <div class="amount_money">
                    <span class="money_num">￥</span>
                    <input class="money_num" readonly="readonly" v-model="money">
                </div>
                <div class="bg_item bg_item_font">
                    <span>手机号：</span>
                    <span>{{phone}}</span>
                </div>
                <div class="bg_item bg_item_font">
                    <span>卡&nbsp;&nbsp;&nbsp;号：</span>
                    <span>6225****1111</span>
                    <span class="bank">(中国建设银行)</span>
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
                    <div><span>资金将在</span><span class="important_remind">3个工作日</span><span>内转入您的联名卡</span></div>
                    <div class="remind_two"><span>在资金转入前</span><span
                            class="important_remind">请勿</span><span>将联名卡注销</span></div>
                </div>
                <div class="bg_item bg_item_font">
                    <span>提取金额：</span>
                    <span class="money_num">￥{{money}}</span>
                </div>
                <div class="bg_item bg_item_font">
                    <span>账户余额：</span>
                    <span class="money_num">￥{{accountBalance}}</span>
                </div>
                <div class="operate">
                    <button class="my_button one" @click="finish">完&nbsp;&nbsp;&nbsp;&nbsp;成</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavHeader from '@/components/nav-header'
    export default {
        name: "ExtractDetails",
        data () {
            return {
                title: '',
                is_show_content_one: true,
                is_show_content_two: false,
                is_show_content_three: false,
                is_show_rule: false,
                src: require('../../assets/appoint_success.png'),
                totalMoney: 25000,
                money: '',
                phone: 13800000000,

            }
        },
        created: function () {
            //从上一个页面来的数据
            var typeSign = this.$route.query.typeSign;
            this.money = this.totalMoney;
            switch (typeSign) {
                case 1:
                    this.title = "租房提取";
                    this.is_show_rule = true;
                    break;
                case 2:
                    this.title = "其他住房消费提取";
                    this.is_show_rule = true;
                    break;
                case 3:
                    this.title = "非深户离深销户提取";
                    this.is_show_rule = false;
                    break;
                case 4:
                    this.title = "退休销户提取";
                    this.is_show_rule = false;
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
            clearMoney: function () {
                this.money='';
            },
            clearPhoneNumber:function () {
                this.phone='';
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
</style>
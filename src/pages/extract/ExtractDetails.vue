<template>
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
                    <input class="money_num"   v-model="money">
                    <img class="delete" src="../../assets/card_delete_1@2x.png">
                </div>
                <div class="phone bg_item">
                    <span>请确认您正在使用的手机：</span>
                    <input v-model="phone">
                    <img class="delete" src="../../assets/card_delete_1@2x.png">
                </div>
                <div class="rule" v-show="is_show_rule">
                    <div>
                        <span>本次最高可提取</span><span class="highest_money">20,000.00</span><span>元</span>
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
                <button class="my_button one" @click="extract">提取</button>
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
                    <span>卡   号：</span>
                    <span>6225****1111</span>
                    <span class="bank">(中国建设银行)</span>
                </div>
                <div>
                    <button class="my_button two" @click="previousStep">上一步</button>
                    <button class="my_button one" @click="sure">确 认</button>
                </div>
            </div>
            <div class="content_item" v-show="is_show_content_three">
                <img :src="src"/>

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
                title: '租房提取',
                is_show_content_one: true,
                is_show_content_two: false,
                is_show_content_three: false,
                is_show_rule: false,
                src: require('../../assets/appoint_success.png'),
                money:20000,
                phone:13800000000,

            }
        },
        methods: {
            extract(){
                this.is_show_content_one = false;
                this.is_show_content_two = true;
                this.is_show_content_three = false;
            },
            previousStep(){
                this.is_show_content_one = true;
                this.is_show_content_two = false;
                this.is_show_content_three = false;
            },
            sure(){
                this.is_show_content_one = false;
                this.is_show_content_two = false;
                this.is_show_content_three = true;
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

    .my_button {
        position: relative;
        width: 2.6rem;
        height: 35px;
        font-size: 16px;
        margin: 48px 20px 10px;
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
        background-image: url(../../assets/btn.png);
    }

    .two {
        background-image: url(../../assets/btn_apply_d@2x.png);
        color: black;
    }
</style>
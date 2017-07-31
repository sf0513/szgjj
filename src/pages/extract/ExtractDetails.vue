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
                    <span>￥</span>
                    <input value="20,000.00">
                    <img class="delete" src="../../assets/card_delete_1@2x.png">
                </div>
                <div class="phone">
                    <span>请确认您正在使用的手机：</span>
                    <input value="13800000000">
                    <img class="delete" src="../../assets/card_delete_1@2x.png">
                </div>
                <button class="button" @click="extract">提取</button>
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
            </div>
            <div class="content_item" v-show="is_show_content_three"></div>
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
                is_show_content_three: false
            }
        },
        methods: {
            extract(){
                this.is_show_content_one = false;
                this.is_show_content_two = true;
                this.is_show_content_three = false;
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
        font-weight: bold;
        width: 5rem;
    }

    .amount_money input {
        width: 3rem;
        font-size: 0.5rem;
    }

    .delete {
        width: 0.4rem;
        height: 0.4rem;
        margin-left: 0.1rem;
    }

    .phone {
        background-color: white;
        display: flex;
        flex-direction: row;
        font-size: 0.32rem;
        margin-top: 0.8rem;
        align-items: center;
        justify-content: center;
        height: 1.3rem;
        width: 100%;
    }

    .phone input {
        width: 2rem;
        color: blue;
        text-decoration: underline;
    }

    input, button {
        outline: none;
        border: none;
    }

    .button {
        position: relative;
        width: 2.6rem;
        height: 35px;
        font-size: 16px;
        background-image: url(../../assets/btn.png);
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
</style>
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
            </div>
            <div class="content_item" v-show="is_show_content_two">
                <div class="step">
                    <div class="step_one">

                    </div>
                    <div class="step_two"></div>
                    <div class="step_three"></div>
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
        /*overflow: auto;*/
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
        width: 5rem;
    }

    .amount_money input {
        width: 3rem;
        font-size: 0.5rem;
    }

    .delete {
        width: 0.4rem;
    }
</style>
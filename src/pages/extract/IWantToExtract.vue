<template>
    <div class="extract">
        <div class="extract_head">
            <top-bar></top-bar>
        </div>
        <div class="tabs">
            <ul>
                <li @click="show_first" id="select_1" class="active"> 立即提取</li>
                <li @click="show_second" id="select_2">更多提取</li>
            </ul>
            <div class="hr30"></div>
        </div>
        <!-- 立即提前-->
        <div v-show="showItemFlag">
            <div class="immediate_extraction" v-for="item in immediateExtractionArr">

                <div class="immediate_extraction_item">
                    <div class="type">
                        <img class="img " src="../../assets/bg_apply_type.png">
                        <div class="title">
                            <span>{{item.type}}</span>
                        </div>
                    </div>
                    <div class="content">
                        <div class="column_one">
                            <img :src="item.img">
                            <div class="column_column_two immediate_extraction_column_column_two">
                                <span>{{item.title}}</span>
                                <div v-if="item.which_num==='1'">
                                    <div class="row_two">
                                        <span class="num1">月缴存额度的</span>
                                        <span class="num">{{item.num}}</span>
                                    </div>
                                </div>
                                <div v-else="true">
                                    <div class="row_two">
                                        <span class="num_all num">{{item.num}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column_two">
                            <button v-if="item.able==='1'" class="able my_button" @click="operate(item)">
                                {{item.operate}}
                            </button>
                            <button v-else-if="item.able='2'" disabled class="disable my_button" @click="operate(item)">
                                {{item.operate}}
                            </button>
                        </div>

                    </div>
                </div>
                <p class="line"></p>
            </div>
        </div>

        <!--更多提取-->
        <div v-show="!showItemFlag">
            <div class="more_extraction" v-for="item in moreExtractionArr">

                <div class="more_extraction_item">
                    <div class="content">
                        <div class="column_one">
                            <img :src="item.img">
                            <div class="column_column_two more_extraction_column_column_two">
                                <div>
                                    <span>{{item.title}}</span>
                                    <span v-if="item.exit"
                                          class="age_limit more_extraction_content">男满50周岁，女满45周岁</span>
                                </div>
                                <span class="service_guide more_extraction_content">办事指南</span>
                            </div>
                        </div>
                        <div class="column_two">
                            <button v-if="item.able==='1'" class="able my_button" @click="operate(item)">
                                {{item.operate}}
                            </button>
                            <button v-else-if="item.able='2'" disabled class="disable my_button" @click="operate(item)">
                                {{item.operate}}
                            </button>
                        </div>

                    </div>
                </div>
                <p class="line"></p>
            </div>
        </div>
        <div class="pop" v-show='showFlag'>
            <div class="confirm">
                <div class="title"></div>
                <div class="cont">
                    <div class="tip">{{tip}}</div>
                    <input type="button" value="确 定" class="sure fl" @click='extractSuccess()'>
                    <input type="button" value="取 消" class="cancel fr" @click='showFlag=false'>
                </div>
            </div>
            <div class="overlay"></div>
        </div>

    </div>
</template>

<script>
    import topBar from '../../components/top-bar.vue';

    export default {
        name: 'IWantToExtract',
        data() {
            return {
                show_item: "index_first",
                showItemFlag: true,
                showFlag: false,
                tip: "",
                immediateExtractionArr: [
                    {
                        type: "租 房",
                        img: require("../../assets/card_rent_house@2x.png"),
                        title: "家庭成员在深圳无房产",
                        which_num: "1",
                        operate: "申请",
                        status: 1,
                        type_sign: 1,
                        num: "50%x 可提取月份",
                        able: "1"
                    },
                    {
                        type: "其 他",
                        img: require("../../assets/card_other@2x.png"),
                        title: "物业，装修等住房消费",
                        which_num: "1",
                        operate: "申请",
                        status: 1,
                        type_sign: 2,
                        num: "30%x 可提取月份",
                        able: "1"
                    },
                    {
                        type: "非深户离深销户",
                        img: require("../../assets/card_Pin_households@2x.png"),
                        title: "非深圳户籍人员离开深圳",
                        which_num: "2",
                        operate: "撤销",
                        status: 1,
                        type_sign: 3,
                        num: "全额提取",
                        able: "1"
                    },
                    {
                        type: "退休销户",
                        img: require("../../assets/card_retired@2x.png"),
                        title: "男满60周岁，女满55周岁或有退休证",
                        which_num: "2",
                        operate: "申请",
                        status: 1,
                        type_sign: 4,
                        num: "全额提取",
                        able: "1"
                    }

                ],
                moreExtractionArr: [
                    {
                        img: require("../../assets/card_house_purchase@2x.png"),
                        title: "购房",
                        operate: "申请",
                        status: 2,
                        exit: false,
                        able: "1"
                    },
                    {
                        img: require("../../assets/card_repay@2x.png"),
                        title: "还贷",
                        operate: "申请",
                        status: 2,
                        exit: false,
                        able: "1"
                    },
                    {
                        img: require("../../assets/card_social_security@2x.png"),
                        title: "社保存量",
                        operate: "申请",
                        status: 2,
                        exit: false,
                        able: "1"
                    },
                    {
                        img: require("../../assets/card_overhaul@2x.png"),
                        title: "大修，翻建房屋",
                        operate: "申请",
                        status: 2,
                        exit: false,
                        able: "1"
                    },
                    {
                        img: require("../../assets/card_low@2x.png"),
                        title: "低保",
                        operate: "申请",
                        status: 2,
                        exit: false,
                        able: "1"
                    },
                    {
                        img: require("../../assets/card_foreign@2x.png"),
                        title: "定居国外或港澳台",
                        operate: "申请",
                        status: 2,
                        exit: false,
                        able: "1"
                    },
                    {
                        img: require("../../assets/card_unemployment@2x.png"),
                        title: "失业",
                        operate: "申请",
                        status: 2,
                        exit: true,
                        able: "1"
                    },
                    {
                        img: require("../../assets/card_move_census_register@2x.png"),
                        title: "户籍迁出本市",
                        operate: "申请",
                        status: 2,
                        exit: false,
                        able: "1"

                    }

                ]

            }
        },
        components: {
            topBar
        },
        methods: {
            show_first() {
                this.show_item = "index_first";
                this.showItemFlag = true;
                this.showSelect();
            },
            show_second() {
                this.show_item = "index_second";
                this.showItemFlag = false;
                this.showSelect();
            },
            showSelect() {
                var select_1 = document.getElementById("select_1");
                var select_2 = document.getElementById("select_2");
                var select_3 = document.getElementById("select_3");
                if (this.show_item === "index_first") {
                    select_1.style.color = "#f7ab00";
                    select_1.style.borderBottom = "0.06rem solid #f7ab00";
                    select_1.style.height = "0.54rem";

                    select_2.style.color = "black";
                    select_2.style.borderBottom = "none";

                } else if (this.show_item === "index_second") {
                    select_2.style.color = "#f7ab00";
                    select_2.style.borderBottom = "0.06rem solid #f7ab00";
                    select_2.style.height = "0.54rem";

                    select_1.style.color = "black";
                    select_1.style.borderBottom = "none";

                }
            },
            operate(str) {
                if (str.status === 1) {//立即提取
                    if (str.operate === "撤销") {//撤销
                        this.tip = "你是否确认撤销非深户销户提取";
                        this.showFlag = true;
                    } else {//申请
                        this.$router.push({path: '/pages/extract/ExtractDetails', query: {typeSign: str.type_sign}});
                    }
                } else {//更多提取
                    alert("功能正在开发...,请稍后！");
                }
            },
            extractSuccess() {
                this.$router.push('/pages/extract/ExtractSuccess');
            }
        }
    }
</script>

<style scoped>
    .extract {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
    }

    div {
        font-size: 16px;
    }

    .hr30 {
        height: 0.3rem;
        background: #EFEFEF;
    }

    .extract .tabs {
        height: 0.9rem;
        background: #EFEFEF;
        font-size: 0.28rem;
    }

    .extract .tabs ul {
        height: 0.6rem;
        line-height: 0.6rem;
    }

    .extract .tabs li {
        float: left;
        width: 3.35rem;
        margin: 0 0.2rem;
    }

    .extract .tabs .active {
        border-bottom: 0.06rem solid #f7ab00;
        height: 0.54rem;
        color: #f7ab00;
    }

    /*立即提取每一块*/
    .immediate_extraction_item {
        position: relative;
        height: 2.5rem;
        background: white;
    }

    .immediate_extraction_item .type {
        text-align: center;
    }

    .immediate_extraction_item .type .img {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 3.5rem;
        height: 30px;
    }

    .immediate_extraction_item .type .title {
        position: absolute;
        left: 0.5rem;
        top: 8px;
        word-wrap: break-word;
    }

    .immediate_extraction_item .type span {
        color: white;
    }

    /*内容布局*/
    .content {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }

    /*立即提取中图标样式*/
    .immediate_extraction_item .content img {
        width: 0.8rem;
        margin-top: 0.2rem;
        margin-left: 0.3rem;
    }

    /*第一列布局*/
    .column_one {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    /*第一列中第二列布局*/
    .column_column_two {
        height: 100%;
        display: flex;
        margin-top: 0.2rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    /*立即提取中第一列中第二列布局*/
    .immediate_extraction_column_column_two {
        margin-left: 0.1rem;
        font-size: 8px;
    }

    /*更多提取中第一列中第二列布局*/
    .more_extraction_column_column_two {
        margin-left: 0.3rem;

    }

    /*立即提取中第一列中第二列中的第一行布局*/
    .row_two {
        margin-top: 0.1rem;
    }

    .row_two span {
        font-size: 14px;
        font-weight: bold;
        color: black;
    }

    /*立即提取部分提取*/
    .row_two .num {
        color: #0086D4;
    }

    /*立即提取全额提取样式*/
    .row_two .num_all {
        margin-left: 0.5rem;
    }

    /*第二列布局*/
    .column_two {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
    }

    /*按钮可点击*/
    .able {
        background-image: url(../../assets/btn_apply_n@2x.png);
        color: white;

    }

    /*按钮不可点击*/
    .disable {
        background-image: url(../../assets/btn_apply_d@2x.png);
        color: black;
    }

    /*按钮公共样式*/
    .my_button {
        margin-right: 0.5rem;
        width: 1.5rem;
        height: 35px;
        font-size: 16px;
        margin-top: 0.1rem;
        border-radius: 3rem;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: 50% center;
        background-color: transparent;
        overflow: hidden;
        outline: none;
        border: none;
    }

    /*立即提取线条*/
    .immediate_extraction .line {
        height: 20px;
        background: #EFEFEF;
    }

    /*更多提取每一块*/
    .more_extraction_item {
        position: relative;
        height: 1.5rem;
        background: white;
    }

    /*更多提取中的图片标示*/
    .more_extraction_item .content img {
        width: 0.6rem;
        margin-top: 0.2rem;
        margin-left: 0.3rem;
    }

    /*更多提取中的年龄限制*/
    .more_extraction_content {
        font-size: 12px;
        color: gray;
        margin-top: 0.2rem;
    }

    /*更多提取中的线*/
    .more_extraction .line {
        height: 2px;
        background: #EFEFEF;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
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
        height: 3.56rem;
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
        border-radius: 0.1rem;
    }

    .confirm .cont {
        height: 2.96rem;
    }

    .confirm .cont .tip {
        height: 2rem;
        font-size: 0.34rem;
        line-height: 2rem;
    }

    .confirm .cont input {
        width: 1.4rem;
        height: 0.6rem;
        background: #00afec;
        border-radius: 0.22rem;
        color: #fff;
        font-size: 0.32rem;
    }

    .confirm .cont .sure {
        margin-left: 1.8rem;
    }

    .confirm .cont .cancel {
        margin-right: 1.8rem;
        background: #DFDFDF;
        color: black;
    }
</style>
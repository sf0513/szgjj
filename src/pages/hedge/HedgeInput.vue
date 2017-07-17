<template>
    <div class="repayperson-div">

        <top-bar></top-bar>
        <nav-header title="对冲还贷" :showImg="false" :isshowcolor="true"></nav-header>

        <div class="detail-information-div">
            <table class="repayperson-table">
                <tr>
                    <td>还款人姓名</td>
                    <td>王刚</td>
                </tr>
                <tr>
                    <td>余额</td>
                    <td id="money-td">¥56436.45</td>
                </tr>
            </table>
        </div>

        <div class="detail-information-div">
            <table class="selectperson-table">
                <tr>
                    <td>选择对象</td>
                    <td></td>
                </tr>
                <tr>
                    <td><input id="person-radio" name="pereson" type="radio" value="43200********001" v-model="personRadioSelect" />王小花</td>
                    <td>43200********001</td>
                </tr>
                <tr>
                    <td>父女</td>
                    <td>借款合同:123456789</td>
                </tr>
                <tr>
                    <td><input id="person-radio" name="pereson" type="radio" value="43200********002" v-model="personRadioSelect" />王小梨</td>
                    <td>43200********002</td>
                </tr>
                <tr>
                    <td>父女</td>
                    <td>借款合同:12******89</td>
                </tr>
            </table>
        </div>

        <div class="detail-information-div">
            <table class="inputmoney-table">
                <tr>
                    <td>是否全额还款</td>
                    <td><input id="yes-no-radio" name="yes-no" type="radio" value="1" v-model="yesnoRadioSelect" />是</td>
                    <td><input id="yes-no-radio" name="yes-no" type="radio" value="0" v-model="yesnoRadioSelect" />否</td>
                </tr>
                <tr>
                    <td>提前还款金额区间</td>
                    <td id="money-td">¥56436.45—¥208436.45</td>
                    <td></td>
                </tr>
                <tr>
                    <td>提前还款金额</td>
                    <input id="money-input" placeholder="请输入" v-model=inputText />
                    <td></td>
                </tr>
            </table>
        </div>

        <button @click="submitAction">提交</button>

    </div>
</template>

<script type="application/javascript">
    import TopBar from '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'
    export default {
        name: 'hedge-input',
        data() {
            return {
                inputText: '',
                personRadioSelect: '',
                yesnoRadioSelect: ''
            }
        },
        components: {
            TopBar,
            NavHeader
        },
        methods: {
            submitAction: function () {
                console.log('输入框:' + this.inputText + '选择的人:' + this.personRadioSelect + '是否全额:' + this.yesnoRadioSelect)
            }
        }
    }

</script>

<style type="text/css" scoped>

    .repayperson-div {
        background-color: whitesmoke;
    }

    .detail-information-div {
        background-color: white;
    }

    /* 还贷人详情table */
    .repayperson-table, .selectperson-table, .inputmoney-table {
        width: 100%;
        margin: 10px;
        text-align: left;
    }

    tr {
        width: 100%;
        border-bottom:1px
        solid gainsboro;
    }
    td {
        width: 100px;
        padding: 10px;
        font-size: 15px;
    }
    #money-td {
        color: orange;
    }
    h4 {
        font-size: 24px;
        display: inline-block;
    }
    #money-input {
        width: 70%;
        height: 30px;
        font-size: 15px;
        border-radius: 10px;
        /*border: 1px solid #CCC;*/
        box-shadow:1px 1px 5px 2px #eaeaea inset;
        background-color: #f4ffff;
    }
    #person-radio, #yes-no-radio {
        width: 20px;
        height: 13px;
        line-height: 10px;
        display: inline;
    }
    button {
        width: 200px;
        height: 44px;
        border-radius: 10px;
        background-color: cornflowerblue;
        border: none;
        outline: none;
        color: white;
        font-size: 15px;
    }

</style>
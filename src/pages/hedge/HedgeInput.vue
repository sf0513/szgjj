<template>
    <div class="repayperson-div">

        <div class="my-information-title-div">
            <button id="back-button">返回</button>
            <h4>对冲还贷</h4>
        </div>


        <div class="detail-information-div">
            <table class="repayperson-table">
                <tr>
                    <td>还款人姓名</td>
                    <td>王刚</td>
                </tr>
                <tr>
                    <td>余额</td>
                    <td>¥56436.45</td>
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
                    <td><input id="person-radio" name="pereson" type="radio" />王小花</td>
                    <td>43200********002</td>
                </tr>
                <tr>
                    <td>父女</td>
                    <td>借款合同:123456789</td>
                </tr>
                <tr>
                    <td><input id="person-radio" name="pereson" type="radio" />王小梨</td>
                    <td>43200********001</td>
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
                    <td><input id="yes-no-radio" name="yes-no" type="radio" value="" />是</td>
                    <td><input id="yes-no-radio" name="yes-no" type="radio" value="" />否</td>
                </tr>
                <tr>
                    <td>提前还款金额区间</td>
                    <td>¥56436.45—¥208436.45</td>
                    <td></td>
                </tr>
                <tr>
                    <td>提前还款金额</td>
                    <input placeholder="请输入" />
                    <td></td>
                </tr>
            </table>
        </div>

        <button>提交</button>

    </div>
</template>


<style type="text/css" scoped>

    .repayperson-div, .my-information-title-div {
        background-color: whitesmoke;
    }
    /* 返回按钮 */
    #back-button {
        width: 60px;
        height: 30px;
        display: inline;
        position: relative;
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
    h4 {
        font-size: 24px;
        display: inline-block;
    }
    input {
        width: 70%;
        height: 30px;
        font-size: 15px;
        border-radius: 10px;
        border-color: #1d9620;
        border-width: 10px;
        background-color: #e5fbfc;
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
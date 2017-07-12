<template>
    <div id="repayperson-div">

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

            <table class="selectperson-table">
                <tr>
                    <td>选择对象</td>
                </tr>
                <tr>
                    <td><input name="pereson" type="radio" />  王小花</td>
                    <td>4320000000000000</td>
                </tr>
                <tr>
                    <td>父女</td>
                    <td>借款合同:123456789</td>
                </tr>
                <tr>
                    <td><input name="pereson" type="radio" />  王小梨</td>
                    <td>4320000000000000</td>
                </tr>
                <tr>
                    <td>父女</td>
                    <td>借款合同:123456789</td>
                </tr>

            </table>

            <table class="inputmoney-table">
                <tr>
                    <td>是否全额还款</td>
                    <td><input name="yes-no" type="radio" value="" />   是</td>
                    <td><input name="yes-no" type="radio" value="" />   否</td>
                </tr>
                <tr>
                    <td>提前还款金额区间</td>
                    <td>¥56436.45—¥208436.45</td>
                </tr>
                <tr>
                    <td>提前还款金额</td>
                    <input placeholder="请输入" />
                </tr>
            </table>

            <button>提交</button>

        </div>


    </div>
</template>


<style type="text/css">

    .my-information-title-div {
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
        align-content: center;
    }

    /* 还贷人详情table */
    .repayperson-table, .selectperson-table, .inputmoney-table {
        background-color: #b5d592;
        width: 100%;
        margin: 10px;
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
    }
    button {
        width: 200px;
        height: 44px;
        border-radius: 10px;
        background-color: cornflowerblue;
    }

</style>
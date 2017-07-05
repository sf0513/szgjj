<template>
    <div class="my-information">

        <div class="my-information-title">
            <button id="back-button">返回</button>
            <h4>我的信息</h4>
        </div>

        <div class="my-information-list">
            <table class="my-information-table">
                <tr id="odd-tr">
                    <td>姓名:</td>
                    <td>王小花</td>
                    <td></td>
                    <td>修改密码></td>
                </tr>
                <tr id="even-tr">
                    <td>省份证:</td>
                    <td>4320000000000000</td>
                    <td></td>
                    <td>升位></td>
                </tr>
                <tr id="odd-tr">
                    <td>缴存单位:</td>
                    <td>深圳富士康集团</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr id="even-tr">
                    <td>手机号码:</td>
                    <td>13812345678</td>
                    <td>立即绑定</td>
                    <td>修改></td>
                </tr>
                <tr id="odd-tr">
                    <td>邮箱:</td>
                    <td>12345678@163.com</td>
                    <td></td>
                    <td>修改></td>
                </tr>
                <tr id="even-tr">
                    <td>婚姻状况:</td>
                    <td>已婚</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr id="odd-tr">
                    <td>配偶:</td>
                    <td>李芙蓉</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr id="even-tr">
                    <td>配偶省份证:</td>
                    <td>432000********00</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>

    .my-information {
        background-color: whitesmoke;
    }
    .my-information-title, #back-button {

    }

    h4 {
        font-size: 24px;
        display: inline-block;
        width: auto;
        background-color: white;
    }

    .my-information-list {
        font-size: 18px;
        display: block;
        /*width: 400px;*/
        /*height: 800px;*/
    }
    .my-information-table {
        width: 100%;
        aligin: center;
        /* 去掉<td>单元格之间的 间隙 */
        border-collapse: collapse;
        empty-cells: hide;
        background-color: cornflowerblue;
    }
    .my-information-list, #odd-tr {
        width: 100%;
        margin: 5px;
        /*display: block;*/
        background-color: gainsboro;
    }
    .my-information-list, #even-tr {
        width: 100%;
        margin: 5px;
        /*display: block;*/
        background-color: white;
    }
    td {
        width:100px;
        padding:10px;
        border:1px
        solid green;
    }

</style>
<template>
    <div class="my-information-div">

        <top-bar></top-bar>
        <nav-header title="我的信息" :showImg="false"></nav-header>

        <div class="my-information-list-div">
            <table class="my-information-table">
                <tr id="odd-tr">
                    <td>姓名:</td>
                    <td>王小花</td>
                    <td></td>
                    <td><a @click="">修改密码 ></a></td>
                </tr>
                <tr id="even-tr">
                    <td>省份证:</td>
                    <td>4320000000000000</td>
                    <td></td>
                    <td><a @click="expandIDCard">升位 ></a></td>
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
                    <td><a href="/index.html">立即绑定</a></td>
                    <td><a href="#">修改 ></a></td>
                </tr>
                <tr id="odd-tr">
                    <td>邮箱:</td>
                    <td>12345678@163.com</td>
                    <td></td>
                    <td><a href="#">修改 ></a></td>
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

<script type="application/javascript">
    import TopBar from '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'

    export default {
        name: 'my-information',
        data() {
            return {

            }
        },
        components: {
            TopBar,
            NavHeader
        },
        methods: {
            expandIDCard: function () {
                // 跳转 升位 身份证
                this.$router.push('/pages/account/ExpandIDCard')
            }
        }
    }
</script>


<style type="text/css" scoped>

    .my-information-div {
        /*background-color: whitesmoke;*/
    }

    .my-information-list-div {
        font-size: 14px;
        display: block;
        padding-top: 10px;
    }
    .my-information-table {
        width: 100%;
        aligin: center;
        /* 去掉<td>单元格之间的 间隙 */
        border-collapse: collapse;
        empty-cells: hide;
    }
    .my-information-list-div, #odd-tr {
        width: 100%;
        margin: 5px;
        background-color: #f1f1f1;
    }
    .my-information-list-div, #even-tr {
        width: 100%;
        margin: 5px;
        background-color: white;
    }

    h4 {
        font-size: 24px;
        display: inline;
        width: auto;
        background-color: white;
    }
    td {
        width:100px;
        padding:10px;
        border:1px
        /*solid green;*/
    }
    a {
        color: royalblue;
        text-decoration-color: #008800;
    }

</style>
<template>
    <div class="my-information-div">

        <top-bar></top-bar>
        <nav-header title="我的信息" :showImg="false"></nav-header>

        <div class="my-information-list-div">
            <table class="my-information-table">
                <tr id="odd-tr">
                    <td>姓名:</td>
                    <td>{{ userName }}</td>
                    <td></td>
                    <td><a @click="goToPage(1)">修改密码 ></a></td>
                </tr>
                <tr id="even-tr">
                    <td>省份证:</td>
                    <td>{{ userIDCard }}</td>
                    <td></td>
                    <td><a @click="goToPage(2)">升位 ></a></td>
                </tr>
                <tr id="odd-tr">
                    <td>缴存单位:</td>
                    <td>{{ userUnit }}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr id="even-tr">
                    <td>手机号码:</td>
                    <td>{{ userPhone }}</td>
                    <td><a @click="goToPage(3)">立即绑定</a></td>
                    <td><a @click="goToPage(4)">修改 ></a></td>
                </tr>
                <tr id="odd-tr">
                    <td>邮箱:</td>
                    <td>{{ userEmail }}</td>
                    <td></td>
                    <td><a @click="goToPage(5)">修改 ></a></td>
                </tr>
                <tr id="even-tr">
                    <td>婚姻状况:</td>
                    <td>{{ userMarriage }}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr id="odd-tr">
                    <td>配偶:</td>
                    <td>{{ spouseName }}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr id="even-tr">
                    <td>配偶省份证:</td>
                    <td>{{ spouseIDCard }}</td>
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
                userName: '',
                userIDCard: '',
                userUnit: '',
                userPhone: '',
                userEmail: '',
                userMarriage: '',
                spouseName:'',
                spouseIDCard:'',
                pageNumber: '',
            }
        },
        mounted() {

        },
        created() {
            // 请求 '我的信息' 接口
            this.serverApi.requestMyInformation({
                userId: '10012',
            },(error, data) => {
                if (error) {
                    alert('errorCode:' + error.code + 'errorMessage:' + error.message);
                    console.log('E_MAIL:' + data.E_MAIL);
                    return;
                }
                this.userName = data.USER_NAME;
                this.userIDCard = data.ID_NUMBER;
                this.userUnit = data.DEPOSIT_UNIT;
                this.userPhone = data.USER_PHONE;
                this.userEmail = data.E_MAIL;
                this.spouseName = data.SPOUSE_NAME;
                this.spouseIDCard = data.SPOUSE_NUMBER;
                if (data.MARITAL_STATUS === 1) {
                    this.userMarriage = '未婚';
                } else {
                    this.userMarriage = '已婚';
                }
                //alert(data.DEPOSIT_UNIT)
            })
        },
        components: {
            TopBar,
            NavHeader
        },
        methods: {
            goToPage: function (pageIndex) {
                if (pageIndex === 1) {
                    // 修改密码
                    this.$router.push('/pages/psw/ModifyPsw')
                }else if (pageIndex === 2) {
                    // 跳转 升位 身份证
                    this.$router.push('/pages/account/ExpandIDCard')

                }else if (pageIndex === 3) {
                    // 绑定手机号
                    this.$router.push('/pages/bind/PhoneBind')

                }else if (pageIndex === 4) {
                    // 修改手机号

                }else if (pageIndex === 5) {
                    // 修改邮箱
                    this.$router.push('/pages/bind/EmailBind')
                }
                console.log(this.pageNumber,pageIndex)
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
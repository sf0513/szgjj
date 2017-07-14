<template>
    <div class="content-background">
        <top-bar></top-bar>
        <nav-header title="对冲还贷" :showImg="false"></nav-header>

        <div class="span-div">
            <span id="icon-span">
                <img class="icon-img" src="../../assets/card_signed.png"> &nbsp;{{ titleP }}
            </span>
        </div>

        <div class="ul-div">
            <ul>
                <li><p>姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ name }}</p> </li>
                <li><p>协议关系&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ relationship }}</p></li>
                <li><p>协议关系人姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ relationshipName }}</p></li>
                <li><p>协议关系人证件号码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ relationshipNumber }}</p></li>
                <li><p>签订协议日期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ relationshipDate }}</p></li>
            </ul>
        </div>

        <div class="ul-div">
            <ul>
                <li><p>姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ name }}</p> </li>
                <li><p>协议关系&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ relationship }}</p></li>
                <li><p>协议关系人姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ relationshipName }}</p></li>
                <li><p>协议关系人证件号码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ relationshipNumber }}</p></li>
                <li><p>签订协议日期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ relationshipDate }}</p></li>
            </ul>
        </div>

    </div>

</template>


<script type="application/javascript">
    import TopBar from '../../components/top-bar.vue'
    import NavHeader from '../../components/nav-header.vue'

    export default {
        name: 'hedge-sign',
        data() {
            return {
                titleP: '您已签订2份对冲还款协议',
                name: '王小花',
                relationship: '父女',
                relationshipName: '王刚',
                relationshipNumber: '432**********012345',
                relationshipDate: '2015-12-24'
            }
        },
        components: {
            TopBar,
            NavHeader
        }
    }
</script>

<style scoped>

    .content-background {
        width: 100%;
        background-color: #edeeee;
        text-align: center;
    }
    .span-div {
        text-align: left;
        display: block;
    }

    p {
        height: 30px;
        font-size: 15px;
        display: inline-block;
        text-align: center;
        padding-top: 15px;
    }
    #icon-span {
        width: 100%;
        height: 30px;
        padding-left: 10px;
        padding-top: 15px;
        font-size: 15px;
        text-align: left;
        background-color: #f7f8f8;
        display: block;
    }
    img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        padding-top: 0px;
        display: inline-block;
    }
    ul {
        width: 100%;
        padding-top: 10px;
        /*border: darkgray 1px solid;*/
    }
    li {
        width: 100%;
        font-size: 15px;
        background-color: white;
        /*li标签下划线*/
        border-top: darkgray 0.5px solid;
    }
    li:first-child {
        border-top: none;
    }
</style>

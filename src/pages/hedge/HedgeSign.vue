<template>
    <div class="content-background">
        <p id="icon-p"><img class="icon-img" src="../../assets/card_signed.png"> &nbsp;{{ titleP }}</p>

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
        }
    }
</script>

<style scoped>

    .content-background {
        width: 100%;
        background-color: #f7f8f8;
        text-align: center;
    }

    p {
        height: 30px;
        font-size: 15px;
        display: inline-block;
        text-align: center;
        padding-top: 15px;
    }
    #icon-p {
        width: 100%;
        padding-left: 10px;
        text-align: left;
        background-color: #fbfcfc;
    }
    img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        padding-top: 5px;
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

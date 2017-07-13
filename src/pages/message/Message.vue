<template>
    <div class="message">
        <div class="message-menu-div">
            <!--<button class="message-menu-button" @click="buttonClick" v-bind:style="isSelect ? selectStyle : defaultStyle">我要留言</button>-->
            <!--<button class="message-menu-button" @click="buttonClick" v-bind:style="isSelect ? defaultStyle : selectStyle">我的历史留言</button>-->

            <ul class="menu-ul">
                <li class="menu-li" v-for="item in sortMenu">
                    <a href="#">{{ item.sortname }}</a>
                </li>
            </ul>


        </div>
    </div>
</template>

<script type="application/javascript" scoped>
    export default {
            name: 'message',
            data() {
                return {
                    msg: 'this is',
                    sortMenu: [
                        { sortname: '我要留言' },
                        { sortname: '我的历史留言' }
                    ],

                    isSelect: false,
                    menuButtonTitle: '',
                    selectStyle: {
                        borderBottomWidth: '1px',
                        borderBottomColor: 'orange',
                    },
                    defaultStyle: {
                        color: '#807C81',
                        borderWidth: '0px'
                    }
                }
            },
            methods: {
                buttonClick: function (event) {
                    this.isSelect = !this.isSelect;
                }
            }
    }
</script>

<style type="text/css">

    .message-menu-div {
        text-align: center;
    }
    .menu-ul .menu-li {
        list-style-type: none;
        display: inline;
        margin: 10px;
    }
    a {
        font-size: 15px;
    }

    /*.message-menu-button {*/
        /*display: inline;*/
        /*color: darkgoldenrod;*/
        /*background-color: transparent;*/
        /*width: 20%;*/
        /*height: 40px;*/
        /*outline: none;*/
        /*border-color: transparent;*/
        /*!*border-bottom-width: 1px;*!*/
        /*!*border-bottom-color: orange;*!*/
    /*}*/


</style>
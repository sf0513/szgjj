<template>
    <div class="content-background-div">
        <div class="message-menu-div">
            <button class="message-menu-button" @click="buttonClick" v-bind:style="isSelect ? selectClass : defaultClass">我要留言</button>
            <button class="message-menu-button" @click="buttonClick" v-bind:style="isSelect ? defaultClass : selectClass">我的历史留言</button>
        </div>
    </div>
</template>

<script type="application/javascript">
    export default {
            name: 'message',
            data() {
                return {
                    msg: 'this is',
                    isSelect: false,
                    selectClass: {
                        borderBottomWidth: '1px',
                        borderBottomColor: 'orange',
                    },
                    defaultClass: {
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
    .message-menu-button {
        display: inline;
        color: darkgoldenrod;
        background-color: transparent;
        width: 20%;
        height: 40px;
        outline: none;
        border-color: transparent;
        /*border-bottom-width: 1px;*/
        /*border-bottom-color: orange;*/
    }
</style>
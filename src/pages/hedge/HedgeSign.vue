<template>
    <div class="content-background">
        <p><img class="icon-img" src="../../assets/card_signed.png"> &nbsp;{{ titleP }}</p>
    </div>
</template>


<script type="application/javascript">
    export default {
        name: 'hedge-sign',
        data() {
            return {
                titleP: '您已签订2份对冲还款协议',
            }
        }
    }
</script>

<style scoped>

    .content-background {
        width: 100%;
        background-color: #4d5657;
    }

    p {
        height: 30px;
        font-size: 15px;
        background-color: #f7f8f8;
        text-align: center;
    }
    img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        padding-top: 5px;
    }
</style>

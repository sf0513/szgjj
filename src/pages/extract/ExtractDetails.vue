<template>
    <div class="extract_details">
        <div class="title">
            <img class="btn_return" src="../../assets/btn_return@2x.png">
            <span class="title_content">{{title}}</span>
        </div>
        <span>提取详情</span>
    </div>
</template>

<script>
    export default {
        name: "ExtractDetails",
        data () {
            return {
                title: '租房提取'
            }
        }
    }
</script>

<style scoped>
    .extract_details {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #EFEFEF;
        font-size: 0.38rem;
    }

    .title {
        font-size: 0.38rem;
        height: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .title .btn_return {
        width: 0.35rem;
        height: 0.35rem;
        align-self: flex-end;
    }

    .title .title_content:nth-child(1) {
        align-self: flex-start;
    }
</style>
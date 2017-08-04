<template>

    <div class="reduce-div">

        <span class="top-blue-span">36期</span>
        <span class="top-span"></span>
        <span class="top-blue-span">最短期数</span>
        <span class="top-span"></span>
        <span class="top-span">240期</span>
        <div class="line-p">
            <img class="radio-li1" src="../../assets/reduceDate/card_the_progress_of_s.png"></img>
            <img class="radio-li2" src="../../assets/reduceDate/card_the_progress_of_n.png"></img>
            <img class="radio-li3" src="../../assets/reduceDate/card_the_progress_of_s.png"></img>
            <img class="radio-li4" src="../../assets/reduceDate/card_the_progress_of_n.png"></img>
            <img class="radio-li5" src="../../assets/reduceDate/card_the_progress_of_1.png"></img>
        </div>
        <span class="bottom-span">你已还款</span>
        <span class="bottom-span">60</span>
        <span class="bottom-span">120</span>
        <span class="bottom-span">180</span>
        <span class="bottom-span">您的还款期数</span>

        <div class="latest-div">
            <span>最新期数</span>
            <input type="text" placeholder="输入新的还款期数" >
        </div>

        <div class="after-div">
            <ul>
                <li id="two-span-li"><span class="li-span">变更前</span><span class="li-span">变更后</span></li>
                <li><span class="li-span">月还款额(元)</span><span class="li-span">¥4500.00</span><span class="li-span">0</span></li>
                <li><span class="li-span">贷款到期日</span><span class="li-span">2035-12-30</span><span class="li-span">0</span></li>
                <li><span class="li-span">剩余贷款利息总额</span><span class="li-span">¥42000.00</span><span class="li-span">0</span></li>
            </ul>
        </div>

        <button @click="submintAction">提交</button>

    </div>

</template>



<script type="application/javascript">
    export default {
        name: 'reduce-date',
        data() {
            return {

            }
        },
        methods: {
            submintAction: function () {
                this.$router.push('/pages/reduce/ReduceSuccess')
            }
        }
    }
</script>


<style scoped>

    .reduce-div {
         text-align: center;
         background-color: #e8feff;
         display: inline-block;
     }

    span {
        width: 1rem;
        height: 20px;
        font-size: 12px;
        display: inline-block;
    }
    .top-blue-span {
        color: #6143d5;
    }
    .line-p {
        width: 6.5em;
        height: 2px;
        text-align: center;
        background-color: darkgray;
        display: inline-block;
        top: 20px;
        position: relative;
    }
    .top-span {

    }
    .bottom-span {
        top: -40px;
        position: relative;
    }

    /* 圆点 */
    img {
        width: 20px;
        height: 20px;
        background-color: darkgray;
        display: inline-block;
        position: relative;
        top: -35px;
    }
    .radio-li1 {
        left: -60px;
    }
    .radio-li2 {
        left: -30px;
    }
    .radio-li4 {
        right: -30px;
    }
    .radio-li5 {
        right: -60px;
    }


    /* 最新期数div */
    .latest-div {
        display: inline-block;
        position: relative;
        top: -40px;
    }
    input {
        width: 3rem;
        font-size: 12px;
        border-radius: 10px;
        box-shadow: inset 1px 1px 2px 1px #f1f1f1;
    }

    /* 变更后div */
    .after-div {
        text-align: center;
        display: inline-block;
    }
    ul {
        text-align: center;
        align-content: center;
        /*background-color: #42b983;*/
        display: inline-block;
    }
    li {
        width: 7rem;
        display: inline-block;
        /* 下划线 */
        list-style-type: none;
        border-bottom: 1px solid #aabebf;
    }
    .li-span {
        width: 2.3rem;
        text-align: center;
        position: relative;
        top: -10px;
    }
    #two-span-li {
        width: 4.7rem;
        padding-left: 130px;
    }

    button {

        width: 5rem;
        height: 40px;
        color: white;
        font-size: 15px;
        background-color: #a899fb;
        border-radius: 10px;
        border: none;
        outline: none;
    }
</style>
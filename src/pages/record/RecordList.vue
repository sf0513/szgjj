<template>
    <div class="list-div">
        <p v-for="list in listData">
            <span class="blue-span1">
                缴存
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                +
                <span class="gray-span1">¥{{ list.money }}</span>
            </span>

            <span class="gray-span2">
                {{ list.date }}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="gray-span3">网厅</span>
            </span>
        </p>

    </div>
</template>


<script type="application/javascript">
    export default {
        name: 'record-list',
        data() {
            return {
                listData: [
                    {
                        'money': '1500.00',
                        'date': '2015-02-02'
                    },
                    {
                        'money': '1800.00',
                        'date': '2015-02-05'
                    },
                    {
                        'money': '1500.00',
                        'date': '2015-02-02'
                    },
                    {
                        'money': '1800.00',
                        'date': '2015-02-05'
                    },
                    {
                        'money': '1500.00',
                        'date': '2015-02-02'
                    },
                    {
                        'money': '1800.00',
                        'date': '2015-02-05'
                    },
                ]
            }
        },
        methods: {

        }
    }
</script>


<style scoped>
    .list-div {
        width: 100%;
        height: 0px;
        background-color: #f7f8f8;
    }

    .money-span-div {
        width: 100%;
        height: 40px;
        /*display: inline;*/
        /*margin-top: -20px;*/
        background-color: #7450ff;
    }
    .date-span-div {
        width: 100%;
        height: 40px;
        display: block;
        background-color: #00ee00;
    }

    .blue-span1 {
        color: #a899fb;
        margin-top: 5px;
        display: block;
    }
    .blue-span2 {
        /*display: inline;*/
    }
    .gray-span1 {
        color: #4d5657;
        /*display: inline-block;*/
    }
    .gray-span2 {
        color: #aabebf;
        margin-top: 5px;
        display: block;
        /*background-color: #dbfc92;*/
    }
    .gray-span3 {
        /*display: block;*/
    }

    span {
        /*!*width: 10rem;*!*/
        /*height: 20px;*/
        font-size: 12px;
        /*!*padding: 10px;*!*/
        /*display: block;*/
        /*background-color: lightgoldenrodyellow;*/
    }
    p {
        width: 100%;
        height: 40px;
        /*padding: 0px 0px 0px 0px;*/
        /*margin-top: -20px;*/
        background-color: #f7f8f8;
        text-align: center;
        display: inline-block;
    }

</style>
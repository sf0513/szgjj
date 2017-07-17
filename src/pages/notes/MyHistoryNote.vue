<template>
    <div class="app">
        <div class="select_zone_style">
            <label class="select_label_style">{{select_label}}</label>
            <select v-model="type_selected" class="selector_style">
                <option v-for="item in types" :value="item.value">{{item.text}}</option>
            </select>
            <select v-model="time_selected" class="selector_style">
                <option v-for="item in times" :value="item.value">{{item.text}}</option>
            </select>
        </div>
        <div class="board_style">
            <div v-for="item in items">
                <p class="content_style">
                    <span class="label_style">{{item.label}}</span>
                    <span class="content_style">{{item.content}}</span>
                </p>
                <p class="line_style"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                select_label:'筛选',
                type_selected:'e',
                time_selected:'a',
                types:[{text:'业务类型',value:'e'},{text:'公积金缴存',value:'a'},{text:'公积金提取',value:'b'},{text:'公积金贷款',value:'c'},{text:'其他',value:'d'}],
                times:[{text:'时间',value:'a'},{text:'最近3个月',value:'b'},{text:'6个月',value:'c'},{text:'1年',value:'d'}],
                items:[{label:'类型',content:'公积金提取'},{label:'标题',content:'租房提取需要怎么处理'},{label:'提出时间',content:'2015/12/12/ 18:11'}, {label:'回复时间',content:'2015/12/12/ 19:11'},
                    {label:'提出内容',content:'公积金提取/n公积金提取/n公积金提取/n公积金提取'},
                    {label:'回复内容',content:'公积金提取/n公积金提取/n公积金提取/n公积金提取'}]

            }
        },
        methods: {
        },
    }
</script>

<style type="text/css" scoped>
    .app{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #EFEFEF;
    }
    .select_zone_style{
        display: flex;
        margin-top: 10px;
        height: 38px;
        text-align: center;
    }
    .select_label_style{
        width: 1.6rem;
        font-size: 16px;
        line-height: 38px;
    }
    .selector_style{
        width: 3rem;
        border-radius: 12px;
        height: 38px;
        outline-style: none;
        font-size: 16px;
        margin-right: 0.5rem;
        color: #888;
        font-family: '微软雅黑';
        padding-left: 0.2rem;
        padding-right: 0.2rem;
    }
    .content_style{
        width: 100%;
        line-height: 40px;
        display: flex;
        font-size: 14px;
    }
    .label_style{
        flex: 1.2;
        text-align: left;
        color: #7e8c8d;
        text-indent: 2em;
    }
    .content_style{
        flex: 2;
        text-align: left;
        color: #333;
    }
    .board_style{
        outline-style: none;
        border-radius: 10px;
        background-color: white;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        margin-top: 20px;
    }
    .line_style{
        background: rgb(188,188,188);
        width: 95%;
        height: 1px;
        display: block;
        margin-left: 0.2rem;
    }
</style>
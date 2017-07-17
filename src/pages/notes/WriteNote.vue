<template>
	<div class="app">
        <div>
            <label class="label_style">{{type_label}}</label>
            <select v-model="selected" class="selector_style">
                <option v-for="item in items" :value="item.value">{{item.text}}</option>
            </select>
        </div>
        <EditText :showLabel="false"  :holderStr="title_label" class="margin_top_style"></EditText>

        <div class="margin_top_style">
            <textarea v-model="content" class="textarea_style" :placeholder="content_holder"></textarea>
        </div>
        <EditText :showLabel="false"  :holderStr="phone_label" class="margin_top_style"></EditText>

        <SubmitBtn :btn_name="btnName" :afun="submitInfo" class="submit_btn_style"></SubmitBtn>
	</div>
</template>

<script>
import EditText from '@/components/EditText'
import SubmitBtn from '@/components/SubmitBtn'
export default{
	data(){
		return{
			type_label:'请选择业务类型',
            selected:'a',
            items:[{text:'公积金缴存',value:'a'},{text:'公积金提取',value:'b'},{text:'公积金贷款',value:'c'},{text:'其他',value:'d'}],
            title_label:'请输入标题',
            phone_label:'联系电话',
            btnName:'提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交',
            content_holder:'请输入内容',
		}
	},
	methods: {
	    submitInfo(){
	        alert('提交成功！')
        }
    },
    components:{
        EditText,SubmitBtn
    }
}
</script>

<style type="text/css" scoped>
    .app{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #EFEFEF;
    }
    .label_style{
        font-size: 16px;
        width: 50%;
    }
    .selector_style{
        width: 50%;
        border-radius: 12px;
        height: 38px;
        outline-style: none;
        font-size: 16px;
        text-indent: 2em;
    }
    .margin_top_style{
        margin-top: 20px;
    }
    .submit_btn_style{
        margin-top: 30px;
    }
    .textarea_style{
        border-radius: 10px;
        box-shadow:0 0 3px #999;
        background-color: white;
        width: 7rem;
        height: 150px;
        font-size: 14px;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        text-indent: 1em;
        padding-top: 10px;
    }
</style>
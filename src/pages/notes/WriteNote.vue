<template>
	<div class="app">
        <div>
            <label class="label_style">{{type_label}}</label>
            <select v-model="selected" class="selector_style">
                <!--<option v-for="item in items" :value="item.value">{{item.text}}</option>-->
                <option v-for="item in items" :value="item.BUSINESS_ID">{{item.BUSINESS_NAME}}</option>
            </select>
        </div>
        <EditText :showLabel="false"  @son_to_father="save_title" :holderStr="title_label" class="margin_top_style"></EditText>
        <div class="margin_top_style">
            <textarea v-model="content" class="textarea_style" :placeholder="content_holder"></textarea>
        </div>
        <EditText @son_to_father="save_phone" :showLabel="false"  :holderStr="phone_label"
                  :max_length="11" class="margin_top_style"></EditText>

        <SubmitBtn :btn_name="btnName" :afun="popDialog" class="submit_btn_style"></SubmitBtn>

        <div :class="{pop_background_style:showFlag}">
            <div v-show='showFlag' class="pop_dialog_style">
                <p class="top_line_style"></p>
                <div>
                    <div class="tip_style">{{tip}}</div>
                    <input type="button" value="确 定" class="confirm_style" @click='submitInfo' v-if="err_flag===false">
                    <input type="button" value="取 消" class="confirm_style" @click='showFlag=false' v-if="err_flag===false">
                    <input type="button" value="确 认" class="confirm_style" @click='errConfirm' v-else="err_flag===true">
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import EditText from '@/components/EditText'
import SubmitBtn from '@/components/SubmitBtn'
export default{
	data(){
		return{
			type_label:'请选择业务类型',
//            selected:'a',
//            items:[{text:'公积金缴存',value:'a'},{text:'公积金提取',value:'b'},{text:'公积金贷款',value:'c'},{text:'其他',value:'d'}],
            selected:'',
            items:[],
            title_label:'请输入标题',
            phone_label:'联系电话',
            btnName:'提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交',
            content_holder:'请输入内容',
            title:'',
            content:'',
            phone:'',
            msg:'您已留言成功',
            showFlag:false,
            tip:'',
            tip_confirm:'请确认是否提交',
            tip_error:'内容不合法或者手机格式有误，请检查！',
            err_flag:false
		}
	},
	methods: {
        save_title(msg){
            this.title=msg;
        },
        save_phone(msg){
            this.phone=msg;
        },
	    submitInfo(){
            this.aa();
            return;
	        if(this.title.length>0&&this.content.length>0&&this.checkPhone(this.phone)){
                this.$router.push({
                    path:'./SubmitSuccess',
                    query:{msg:this.msg,show_nav:false,show_img:false,title:''}
                });
            } else{
	            this.tip=this.tip_error;
	            this.err_flag=true;
                this.showFlag=true;
            }
        },
        checkPhone(phone){
            const reg = /^1\d{10}$/;
            if (reg.test(parseInt(phone))===false){
                return  false;
            }
            return true;
        },
        popDialog(){
            this.tip=this.tip_confirm;
            this.showFlag=true;
        },
        errConfirm(){
            this.showFlag=false;
            this.err_flag=false;
        },
        aa(){
            this.serverApi.login2({
                username: this.username,
                password: this.password,
                code:this.code,
                flag:2
            }, (error, data) => {
                if (error) {
                    alert(error.message);
                    return;
                }
                alert(data.username);
            });
        }
    },
    components:{
        EditText,SubmitBtn
    },
    beforeCreate(){
        this.serverApi.businessType({},(error,data)=>{
            console.log(data);
            this.items=data;
            this.selected=this.items[0].BUSINESS_ID;
        });
        console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
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
    .pop_dialog_style{
        position: fixed;
        top: 45%;
        left: 50%;
        width: 7.12rem;
        height: 3.98rem;
        visibility: visible;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 201;
        border-radius: 0.1rem;
        background: white;
        /*box-shadow: 0 0 7rem rgba(0,0,0,0.4);*/
    }
    .tip_style{
        height: 2rem;
        font-size: 0.34rem;
        line-height: 2rem;
    }
    .confirm_style{
        height: 38px;
        font-size: 0.34rem;
        padding: 5px;
    }
    .top_line_style{
        height: 0.6rem;
        width: 100%;
        background-color: #00afec;
    }
    .pop_background_style{
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.4);
        position: absolute;
        left: 0;
        top: 0;
    }
</style>
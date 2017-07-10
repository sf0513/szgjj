<template>
	<div class="app">
		<div class="title_bar">
			<img src="../../assets/back_icon.png" width="16px" class="back_icon">
            <h1 class="title">{{title}}</h1>
		</div>
		<div class="edit_zone">
            <span class="label_style">{{gjj_acc_label}}</span>
			<input type="text" :placeholder="gjj_acc_holder" v-model="acc_info" class="holder_style">
		</div>
		<div class="edit_zone">
            <span class="label_style">{{identity_no}}</span>
            <input type="text" :placeholder="identity_holder" v-model="id_info" class="holder_style">
		</div>
		<div>
			<button type="submit" @click='submitInfo' class="submit_btn">{{submit}}</button>
		</div>
        <p class="err_info_style">{{acc_err_info}}<br/>{{id_err_info}}</p>
	</div>
</template>

<script>
export default{
	data(){
		return{
			title:'忘记密码',
            gjj_acc_label:'公积金账号：',
			gjj_acc_holder:'请输入个人公积金账号',
			identity_no:'身份证号码：',
            identity_holder:'请输入个人身份证号码',
			submit:'提交',
			acc_info:'',
			id_info:'',
            acc_err_info:'',
            id_err_info:''
		}
	},
	methods:{
		submitInfo(){
		   if(this.checkGjjAcc(this.acc_info)&&this.checkID(this.id_info)) {
		       this.acc_err_info= '';
		       this.id_err_info='';
               //公积金账号和身份证号验证正确后进入手机验证码页面
               this.$router.push('/')
           } else{
//               this.acc_info='';
//               this.id_info='';
           }
		},
        checkGjjAcc(acc_no){
		    // 深圳公积金211开头的11位全数字
            const reg = /^211\d{8}$/;
            if (reg.test(parseInt(acc_no))===false){
//                alert("公积金账号输入不合法");
                this.acc_err_info = '公积金账号输入不合法';
                return  false;
            }
            return true;
        },
        checkID(card_no){
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
            const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X)$)/;
            if(reg.test(parseInt(card_no)) === false)
            {
//                alert("身份证输入不合法");
                this.id_err_info='身份证输入不合法';
                return  false;
            }
            return true;
        }
	},
    watch:{
//        id_info:function (id_info) {
//            this.checkID(id_info)
//        }
    }
}	
</script>

<style type="text/css">
    .app{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #EFEFEF;
    }
    div{
        font-size:16px;
        font-family: '微软雅黑';
    }
    .title_bar{
        text-align: center;
		width: 100%;
        padding: 20px 0;
        margin-bottom: 45px;
    }
    .back_icon{
        position: absolute;
        left: 10px;
    }
    .title{
        font-weight: bold;
        color: #333333;
    }
    .edit_zone {
        background-color: white;
        padding: 10px;
        margin: 20px 10px;
        border-radius: 10px;
        box-shadow:0 0 5px #666666;
    }
    .submit_btn{
        background-color: #00afec;
        width: 200px;
        color: white;
        margin-top: 58px;
        font-size: 16px;
        padding: 8px;
        border-radius: 20px;
        font-family: '微软雅黑';
        border: none;
    }
    .holder_style{
        font-size: 12px;
        margin-left: 20px;
        padding: 10px;
    }
    .label_style{
        font-size: 14px;
    }
    .err_info_style{
        color: red;
        font-size: 14px;
        margin: 20px;
    }
</style>
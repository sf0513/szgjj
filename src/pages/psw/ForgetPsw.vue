<template>
	<div class="app">
		<div class="title_bar">
			<img src="../../assets/back_icon.png" width="16px" class="back_icon" @click="backHome">
            <h1 class="title">{{title}}</h1>
		</div>
		<div class="edit_zone" v-if="show_verification==false">
            <span class="label_style">{{gjj_acc_label}}</span>
			<input type="text" :placeholder="gjj_acc_holder" v-model="acc_info" class="holder_style">
		</div>
		<div v-else="show_verification==true">
			<span class="phone_info">已经发送验证码至138****5025手机</span>
			<button class="inner_btn_style" v-on:click="other_phone">我已换号</button>
		</div>

		<div class="edit_zone" v-if="show_verification==false">
            <span class="label_style">{{identity_no}}</span>
            <input type="text" :placeholder="identity_holder" v-model="id_info" class="holder_style">
		</div>
		<div class="edit_zone" v-else="show_verification==true">
			<span class="label_style">{{verification_code}}</span>
			<input type="text" :placeholder="verification_holder" v-model="verification_info" class="holder_style">
			<input type="button" :value="count_zero" class="inner_btn_style" v-on:click="repeat_verification"/>
		</div>
		<div>
			<button type="submit" @click="submitInfo" class="submit_btn">{{submit}}</button>
		</div>
        <p class="err_info_style">
            <span v-if="show_acc_err">{{acc_err_info}}</span>
            <br/>
            <span v-if="show_id_err">{{id_err_info}}</span>
            <br/>
            <span v-if="show_verification_err">{{verification_err_info}}</span>
        </p>
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
			acc_info:'21121121121',
			id_info:'223123133443231411',
            acc_err_info:'公积金账号输入不合法',
            id_err_info:'身份证输入不合法',
            show_verification:false,
            show_acc_err:false,
            show_id_err:false,
            verification_code:'验证码：',
            count_zero:'重发60s',
            verification_holder:'请输入收到的验证码',
			verification_info:'',
            right_verification_info:'',
            verification_err_info:'验证码只有四位数，请输入正确的的验证码',
            show_verification_err:false,
		}
	},
	methods:{
		submitInfo(){
		   if(this.checkGjjAcc(this.acc_info)&&this.checkID(this.id_info)) {
		       this.show_acc_err= false;
		       this.show_id_err=false;
               this.show_verification_err=false;
               //公积金账号和身份证号验证正确后进入手机验证码页面
               this.show_verification=!this.show_verification;
           }
		},
        checkGjjAcc(acc_no){
		    // 深圳公积金211开头的11位全数字
            const reg = /^211\d{8}$/;
            if (reg.test(parseInt(acc_no))===false){
//                alert("公积金账号输入不合法");
                this.show_acc_err = true;
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
                this.show_id_err=true;
                return  false;
            }
            return true;
        },
        backHome(){
            if (this.show_verification===false){
                this.$router.push('/');
            }else{
//                this.$router.push('/forgetpsw');
                this.show_verification=false
            }
		},
        other_phone(){
            alert('我已换号');
        },
        repeat_verification(){
            alert('重发验证码');
        }
	},
    watch:{
//        id_info:function (id_info) {
//            this.checkID(id_info)
//        }
        verification_info:function (verification_info) {
            console.log(verification_info.length)
            if (verification_info.length > 4) {
                this.show_verification_err=true;
                this.verification_info = this.right_verification_info
            } else if (verification_info.length === 4) {
                this.right_verification_info = verification_info
            } else{
                this.show_verification_err=false;
            }
        }
    }
}
</script>

<style type="text/css" >
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
        padding: 2px;
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
		width: 3.6rem;
    }
    .label_style{
        font-size: 14px;
		width:100px;
    }
    .err_info_style{
        color: red;
        font-size: 14px;
        margin: 20px;
    }
	.phone_info{
		font-size: 16px;
	}
	.inner_btn_style{
		font-size: xx-small;
		background-color: #f7ab00;
		color: white;
		border: none;
		padding: 0.05rem;
	}
</style>
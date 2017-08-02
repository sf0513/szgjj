<template>
	<div class="app">
		<NavHeader :title="title" :showImg="false" :isshowcolor="true"></NavHeader>

        <div class="gjj_acc_zone_style">
            <EditText :labelStr="gjj_acc_label" :holderStr="gjj_acc_holder"
                      v-if="show_verification==false" @son_to_father="saveacc" :max_length="11"></EditText>
            <div v-else="show_verification==true" class="hint_info_style">
                <p>
                    <span class="phone_info">已经发送验证码至138****5025手机</span>&nbsp;&nbsp;
                    <span class="small_btn_style" v-on:click="other_phone">我已换号</span>
                </p>
            </div>
        </div>

        <div class="identity_no_zone_style">
            <EditText :labelStr="identity_no" :holderStr="identity_holder"
                      v-if="show_verification==false" @son_to_father="saveid" :max_length="18"></EditText>
            <CountZero :countDown="timer" :default_start="true" :labelStr="verification_code_label"
                       :holderStr="verification_holder" v-else="show_verification==true"></CountZero>
        </div>

        <SubmitBtn :btn_name="btnName" :afun="submitInfo" v-if="show_verification==false"></SubmitBtn>
        <SubmitBtn :btn_name="btnName" :afun="submit_success" v-else="show_verification==true"></SubmitBtn>

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
	import NavHeader from '@/components/nav-header'
    import EditText from '@/components/EditText'
    import SubmitBtn from '@/components/SubmitBtn'
    import CountZero from '@/components/CountZero'
export default{
	data(){
		return{
			title:'忘记密码',
            gjj_acc_label:'公积金账号：',
			gjj_acc_holder:'请输入个人公积金账号',
			identity_no:'身份证号码：',
            identity_holder:'请输入个人身份证账号',
			submit:'提交',
			acc_info:'21121121121',
			id_info:'223123133443231411',
            acc_err_info:'公积金账号输入不合法',
            id_err_info:'身份证输入不合法',
            show_verification:false,
            show_acc_err:false,
            show_id_err:false,
            verification_code_label:'验证码：',
            count_zero:'重发60s',
            verification_holder:'请输入收到的验证码',
			verification_info:'',
            right_verification_info:'',
            verification_err_info:'验证码只有四位数，请输入正确的的验证码',
            show_verification_err:false,
            btnName:'提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交',
            timer:3, //默认倒计时30s
		}
	},
	methods:{
        saveacc(msg){
            this.acc_info=msg;
        },
        saveid(msg){
            this.id_info=msg;
        },
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
                this.show_verification=false
            }
		},
        other_phone(){
            alert('我已换号');
        },
        submit_success(){
            this.$router.push('/');
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
    },
    components:{
        NavHeader,
        EditText,
        SubmitBtn,
        CountZero
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
    .err_info_style{
        color: red;
        font-size: 14px;
        margin: 20px;
    }
	.phone_info{
		font-size: 16px;
	}
    .hint_info_style{
        margin-top: 50px;
    }
    .small_btn_style{
        font-size: xx-small;
        background-color: #f7ab00;
        color: white;
        padding: 0.05rem;
        border-radius: 3px;
    }
    .gjj_acc_zone_style{
        margin-top: 42px;
    }
    .identity_no_zone_style{
        margin-top: 20px;
        margin-bottom: 68px;
    }
</style>
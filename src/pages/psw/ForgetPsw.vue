<template>
	<div>
		<div class="title_bar">
			<img src="../../assets/back_icon.jpg" width="16px">
			<input type="button">
			{{title}}
		</div>
		<div>
			<p>
				<span>{{gjj_account}}</span>
				<input type="text" :placeholder="gjj_account_holder" v-model="acc_info">
			</p>
		</div>
		<div>
			<p>
				<span>{{ID_NO}}</span>
				<input type="text" :placeholder="ID_holder" v-model="id_info">
			</p>
		</div>
		<div>
			<button type="submit" @click='submitInfo'>{{submit}}</button>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			title:'忘记密码',
			gjj_account:'公积金账号',
			gjj_account_holder:'请输入个人公积金账号',
			ID_NO:'身份证号码',
			ID_holder:'请输入个人身份证号码',
			submit:'提交',
			acc_info:'',
			id_info:''
		}
	},
	methods:{
		submitInfo(){
			alert('hello')
		}
	}
}	
</script>

<style type="text/css">
	div{
        font-size:16px;
        font-family: '微软雅黑';
    }
    .title_bar{
    	float: left;
    }
</style>
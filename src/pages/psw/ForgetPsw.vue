<template>
	<div id="app">
		<h1>{{title}}</h1>
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
	#app{
		width: 60%;
	}
</style>
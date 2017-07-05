<template>
	<div class="appointment">
		<header>
			<a></a>
			<div>预约业务</div>
			<a></a>
		</header>
		<div class="item">
			<ul>
				<li>
					<img src="">
					<span>a业务</span>
				</li>
				<li>
					<img src="">
					<span>b业务</span>
				</li>
				<li>
					<img src="">
					<span>c业务</span>
				</li>
				<li>
					<img src="">
					<span>d业务</span>
				</li>
				<li>
					<img src="">
					<span>e业务</span>
				</li>
				<li class="item-li">
					<img src="">
					<span>f业务</span>
				</li>
				<li>
					<img src="">
					<span>g业务</span>
				</li>
				<li>
					<img src="">
					<span>更多</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'appointment',
		data(){
			return{

			}
		}
	}
</script>
<style type="text/css">
li{list-style: none;}
.appointment{width: 100%;}
.appointment header{width: 100%; height: 100px; line-height: 100px; display: -webkit-flex; display: flex; margin-bottom: 91px;}
.appointment header a:nth-child(1){background: url(../../assets/back_icon.jpg) no-repeat center; }
.appointment header a{width: 70px;}
.appointment header div{flex: 1; -webkit-flex: 1; font-size: 20px; }

.item li{width: 33%; height: 157px; border-right: 1px solid #c9caca;
border-top:1px solid #c9caca; float: left;}
</style>
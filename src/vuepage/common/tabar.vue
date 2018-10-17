<template>
    <div class="tab">
		<div class="img_box" @click="setIndex(0,'/Home')">
			<img class="img_cover" src='../../assets/img/tab_ic_bbs_pre.png' v-show='$route.meta.theIndex==1'>
			<img class="img_cover" src='../../assets/img/tab_ic_bbs.png' v-show='$route.meta.theIndex!=1'>
		</div>
		<div class="img_box" @click="setIndex(1,'/Discuss')">
			<img class="img_cover" src='../../assets/img/tab_ic_bbs_pre.png' v-show='$route.meta.theIndex==2'>
			<img class="img_cover" src='../../assets/img/tab_ic_bbs.png' v-show='$route.meta.theIndex!=2'>
		</div>
		<div class="img_box" @click="setIndex(2,'/Order')">
			<img class="img_cover" src='../../assets/img/tab_ic_bbs_pre.png' v-show='$route.meta.theIndex==3'>
			<img class="img_cover" src='../../assets/img/tab_ic_bbs.png' v-show='$route.meta.theIndex!=3'>
		</div>
		<div class="img_box" @click="setIndex(3,'/My')">
			<img class="img_cover" src='../../assets/img/tab_ic_my_pre.png' v-show='$route.meta.theIndex==4'>
			<img class="img_cover" src='../../assets/img/tab_ic_my.png' v-show='$route.meta.theIndex!=4'>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
	
		methods: {
			setIndex(val,path){
				this.$router.push({path:path})
			}
		},
		computed: {

		},
		created() {
		
		},
		mounted() {
     
		}
	}

</script>

<style lang='less'>
	.tab{
		width: 100%;
		height: 0.96rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		left: 0;
		bottom: 0;
		border: 1px solid #ddd;
		.img_box{
			width: 0.5rem;
			height: 0.76rem;
		}
	}
</style>
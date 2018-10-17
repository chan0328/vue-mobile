<template>
  <div class="page">
    <div class="home_page" >
      <span>首页</span>
      <!-- <span class="iconfont">&#xe614;</span> -->
    </div>
      <bottom-bar class="dis_bar"></bottom-bar>
  </div>
</template>

<script>
  import Bar from '../common/tabar.vue'
  import {} from '../../server/allServer'
  export default {
    data() {
      return {
          
      }
    },
    created() {
        
    },
    mounted(){
     
    },
    methods:{

    },
    computed:{
     
    },
    components: {
      'bottom-bar': Bar,
    }
  }
</script>

<style lang='less' scoped>
  .page{
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: relative;
    .home_page {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0.96rem;
      overflow-y: hidden;
    }
  }
</style>
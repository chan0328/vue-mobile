<template>
    <div class="page">   
        <div class="my_page">
            <span>我的</span>
            <span>{{str}}</span>
        </div>
        <bottom-bar class="my_bar"></bottom-bar>
    </div>
</template>

<script>
import Bar from '../common/tabar.vue'
import {getBackBrand} from '../../server/allServer'
export default {
   data(){
       return{
          str:''
       }
   },
   created(){
      this.str=this.$utils.getHashUrlParams('str')
   },
   mounted(){

   },
   methods:{
    
   },
   components:{
       'bottom-bar':Bar
   }
}
</script>

<style lang='less' scoped>
.my_page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.96rem;
  background: #F9F9F9;
  overflow-y: auto;
  .my_bar{
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
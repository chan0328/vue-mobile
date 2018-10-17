<template>
    <div class="page">   
        <div class="dis_page">
            <span>论坛</span>
            <span>{{str}}</span>
        </div>
        <bottom-bar class="dis_bar"></bottom-bar>
    </div>
</template>

<script>
import Bar from '../common/tabar.vue'
import {} from '../../server/allServer'

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
   components: {
      'bottom-bar': Bar,
    }
}
</script>

<style lang='less' scoped>
.dis_page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.98rem;
  transition: all .3s linear;
}
</style>
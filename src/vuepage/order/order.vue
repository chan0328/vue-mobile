<template>
    <div class="page">   
        <div class="order_page">
            <p>订单</p>
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
  .my_page{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }
</style>
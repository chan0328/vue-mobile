<template>
    <div class="page">   
        <div class="my_page">
            <p>my</p>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return{

       }
   },
   created(){
    //    this.$nextTick(() => {
    //     Indicator.close();
    //    })
   },
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
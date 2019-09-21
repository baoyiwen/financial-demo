<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import { server } from  '@/network/request'
  export default {
    name: 'app',
    components:{},
    data(){
      return{

      }
    },
    mounted(){
      this.getUserInfo();
    },
    methods:{
      getUserInfo(){
        server({
          url: 'userInfo/all',
          method: 'get',
        }).then(res=>{
          console.log(res);
        },error => {
          console.log(error);
        })
      }
    }
  }
</script>
<style>
@import "assets/css/base.css";
</style>

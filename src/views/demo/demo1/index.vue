<template >
  <div style="height:100%;">
    <router-view />
  </div>
</template>
<script>
  export default {
    name: 'index',
    data(){
      return{

      }
    },
    mounted() {
      //console.log(this.$store.tagsView.state.visitedViews);
    }
  }
</script>

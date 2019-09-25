<template>
  <ni-button @click="handleClick">
   <i  class="iconfont icon-fapiaochayan1"></i>
    <span>发票查验</span>
  </ni-button>
</template>
<script>
  import NiButton from './NiButton';
  export default {
    components:{NiButton},
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>

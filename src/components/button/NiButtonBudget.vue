<template>
  <ni-button @click="handleClick">
   <i  class="iconfont icon-feiyongchaxun1"></i>
    <span>预算检查</span>
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

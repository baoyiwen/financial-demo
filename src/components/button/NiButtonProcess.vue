<template>
  <ni-button @click="handleClick">
   <i class="iconfont icon-liucheng" ></i>
    <span>流程</span>
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

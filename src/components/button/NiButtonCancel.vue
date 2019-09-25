<template>
  <ni-button @click="handleClick" :primary="'danger'">
   <i class="iconfont icon-shanchu"></i>
    <span>删除凭证</span>
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

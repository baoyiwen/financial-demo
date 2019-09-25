<template>
  <ni-button @click="handleClick">
    <i class="iconfont icon-chexiao" style="font-size: 12px;margin-right: 6px"></i>
    <span>撤回记账</span>
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

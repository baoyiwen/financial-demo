<template>
  <ni-button :disabled="disabled" @click="handleClick">
   <i class="iconfont icon-baocun1"></i>
    <span>保存</span>
  </ni-button>
</template>
<script>
  import NiButton from './NiButton';
  export default {
    components:{NiButton},
    props:{
      disabled: Boolean,
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>

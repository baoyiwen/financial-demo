<template>
  <ni-button :disabled="disabled" @click="handleClick">
   <i style="font-size: 1em" class="iconfont icon-fapiaochayan1"></i>
    <span>发票查验</span>
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

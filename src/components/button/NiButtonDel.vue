<template>
  <ni-button @click="handleClick" :primary="'danger'">
   <i class="iconfont icon-shanchu" style="font-size: 14px;margin-right: 6px"></i>
    <span >删除</span>
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
